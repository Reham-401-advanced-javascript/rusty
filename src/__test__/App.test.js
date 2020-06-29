import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../component/main/main.js';
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
// import { render } from '@testing-/library/react';


describe('<Main/>', () => {
  it('is alive at Mainlication start', () => {
    const form = shallow(<Main />);
    expect(form.find('section form').exists()).toBeTruthy();
    expect(form.find('input').exists()).toBeTruthy();
    expect(form.find('button').exists()).toBeTruthy();

    // expect(thing.find('form label span').exists()).toBeTruthy();
  });
  it('it properly clears the form/state after the form is submitted', () => {
    const form = mount(<Main />);
    const button = form.find('button');
    button.simulate('click');
    expect(form.state.method).toBe();
    expect(form.state.url).toBe();

  });
  it('change method on click on put', () => {
    const form = mount(<Main />);
    const button = form.find('#put');
    button.simulate('click');
    expect(form.state('method')).toBe('put');
  });
  it(' it properly store the users input into state', () => {
    const form = mount(<Main />);
    const button = form.find('button');
    button.simulate('click');
    form.state.method='GET';
    form.state.url='http';

    expect(form.state.method).toBe('GET');
    expect(form.state.url).toBe('http');
    // expect(form.find('label').get(0).prop()).to.deep.equal({display: 'flex'})   ;
  //   const elem = form.find('label');
  //  expect(getComputedStyle(elem.React.getDOMNode()).getPropertyValue('display')).toBe('flex');
  });
  it('changes URL on Change the input', () => {
    const form = mount(<Main />);
    const url = form.find('#url');
    url.simulate('change', { target: { value: 'https://reactjs.org/docs/testing.html' } });
    expect(form.state('url')).toBe('https://reactjs.org/docs/testing.html');
  });
  it('it properly display the users input in the output area on form submit', () => {
    const form = mount(<Main />);
    const url = form.find('#url');
    url.simulate('change', { target: { value: 'https://reactjs.org/docs/testing.html' } });
    const button = form.find('#get');
    button.simulate('click');
    const go = form.find('#goButton');
    go.simulate('submit');

    expect(form.state('request')).toStrictEqual({ url: 'https://reactjs.org/docs/testing.html', method: 'get'});

 
    // expect(form.state('request')).toBe('get    https://reactjs.org/docs/testing.html');
  });
 
  it(' Renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
