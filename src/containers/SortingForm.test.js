import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortingForm from './SortingForm';
import data from '../server/__mocks__/hotels.json'

configure({ adapter: new Adapter() });

describe('SortingForm Component', () => {
  let wrapper;
  let onSortMock;
  let changeSortSpy;

  beforeAll(() => {
    onSortMock = jest.fn();
    wrapper = shallow(<SortingForm hotels={data.hotels}
        nights={6}
        onSort={onSortMock} />);
    changeSortSpy = jest.spyOn(wrapper.instance(),'changeSort');
    wrapper.instance().forceUpdate();
    wrapper.update();
  })

  it('Should render sorting buttons properly', () => {
    const btnName = wrapper.find('#name');
    const btnPrice = wrapper.find('#price');
    expect(btnName).toHaveLength(1);
    expect(btnPrice).toHaveLength(1);
  });

  it('Should sort hotels by name and price', () => {
    wrapper.find('#name').simulate('click')
    expect(changeSortSpy).toBeCalled();
    let state = wrapper.instance().state;
    expect(state).toEqual({sortField: 'name', order: 1});

    wrapper.find('#price').simulate('click')
    expect(changeSortSpy).toBeCalled();
    state = wrapper.instance().state;
    expect(state).toEqual({sortField: 'price', order: 1});
  });

  afterAll(() => {
    changeSortSpy.restore()
  })
})
