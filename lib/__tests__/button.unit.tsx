import renderer from 'react-test-renderer';
import * as React from 'react';
import Button from '../button';

describe('button', () => {
  it('should be a div', function () {
    const json = renderer.create(<Button/>).toJSON();
    expect(json).toMatchSnapshot();
  });
});