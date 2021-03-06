/**
 * Tests for ButtonWrapper styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import ButtonWrapper from '../ButtonWrapper';

describe('<ButtonWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<ButtonWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ButtonWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ButtonWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ButtonWrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
