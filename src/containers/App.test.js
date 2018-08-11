import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HotelsApi from '../server/server';
import App from './App';

configure({ adapter: new Adapter() });
jest.mock('../server/server')

describe('App Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  })

  it('Should update state with valid values', () => {
    wrapper.instance().updateState({nights: 6})
    expect(wrapper.state('nights')).toEqual(6);
  });

  it('Should show loading spinner', () => {
    wrapper.instance().updateState({loading: true})
    const spinner = wrapper.find('.loading-spinner');
    expect(spinner).toHaveLength(1);
  });

  it('Should show no content message', () => {
    wrapper.instance().updateState({loading: false, hotels: []})
    const message = wrapper.find('.no-content');
    expect(message).toHaveLength(1);
  });
})
