import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DateInput from './DateInput';

configure({ adapter: new Adapter() });

describe('DateInput Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<DateInput
      id="testDate"
      title="Test"
      value="10-15-2020"
      error />);
  })

  it('should render the error message and input label', () => {
    const errorLabel = wrapper.find('#testDateError');
    const inputLabel = wrapper.find('.date-input-label');
    expect(errorLabel).toHaveLength(1);
    expect(inputLabel).toHaveLength(1);
    expect(errorLabel.props().children).toContain('Invalid date');
    expect(inputLabel.props().children).toContain('Test');
  });
})
