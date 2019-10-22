import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

const wrapper = (props = {}) => shallow(<Button {...props} />);

describe('should click', () => {
  it('should render without throwing an error', () => {
    const props = {
      name: 'test',
      onClick: () => 'teste',
    };
    expect(wrapper(props)).toMatchSnapshot();
  });
  it('should contain button', () => {
    const callback = sinon.spy();
    const props = {
      name: 'test',
      onClick: callback,
    };
    wrapper(props).find('button').simulate('click');
    expect(callback.calledOnce).toEqual(true);
  });
});
