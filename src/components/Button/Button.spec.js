import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';


describe('should click', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Button name="test" onClick={() => console.log('test')} />));
  });
  it('should contain button', () => {
    const callback = sinon.spy();
    shallow(<Button name="test" onClick={callback} />).find('button').simulate('click');
    expect(callback.calledOnce).toEqual(true);
  });
});
