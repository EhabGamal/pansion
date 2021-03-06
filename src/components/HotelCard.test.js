import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HotelCard from './HotelCard';
import data from '../server/__mocks__/hotels.json'

configure({ adapter: new Adapter() });

describe('HotelCard Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<HotelCard
      hotel={data.hotels[3]}
      nights={6} />);
  })
  it('should render card components with valid values', () => {
    const name = wrapper.find('.hotel-card-name');
    const city = wrapper.find('.hotel-card-city');
    const price = wrapper.find('.hotel-card-price');
    expect(name).toHaveLength(1);
    expect(city).toHaveLength(1);
    expect(price).toHaveLength(1);
    expect(name.props().children).toContain('Golden Tulip');
    expect(city.props().children).toContain('paris');
    expect(price.props().children).toContain('657.60');
  });
})
