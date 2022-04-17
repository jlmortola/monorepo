import { render } from '@testing-library/react'
import React from 'react';

import Test from '..'

describe('Test', () => {
    it('Renders', () => {
      const { container } = render(<Test />)
      expect(container).not.toBeNull();
    });
});
