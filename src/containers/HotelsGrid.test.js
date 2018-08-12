import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HotelsGrid from './HotelsGrid';
import data from '../server/__mocks__/hotels.json'

configure({ adapter: new Adapter() });

describe('HotelsGrid Component', () => {
  let wrapper;
  let props = {
    hotels: data.hotels.slice(0,3),
    nights: 5,
    query: '',
    range: { value: 50 }
  }

  beforeAll(() => {
    wrapper = shallow(<HotelsGrid {...props} />);
  })

  it('HotelsGrid render hotels cards', () => {
    const hotels = wrapper.find('.hotel-card');
    expect(hotels).toHaveLength(3);
    hotels.forEach((card, i) => {
      expect(card.props().hotel).toEqual(data.hotels[i])
      expect(card.props().nights).toBe(props.nights)
    });
  });
})
