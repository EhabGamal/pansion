import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FiltersForm from './FiltersForm';

configure({ adapter: new Adapter() });

describe('FiltersFrom Component', () => {
  let wrapper;
  let onFilterMock;

  beforeAll(() => {
    onFilterMock = jest.fn();
    wrapper = shallow(<FiltersForm
        range={{min: 10, max: 150, value: 50}}
        query='test'
        onFilter={onFilterMock} />);
  });

  it('Should render all components with valid values', () => {
    const searchQuery = wrapper.find('.search-query');
    const rangeSlider = wrapper.find('#slider');
    expect(searchQuery).toHaveLength(1);
    expect(rangeSlider).toHaveLength(1);
    expect(rangeSlider.props().value).toEqual(50);
  });
});
