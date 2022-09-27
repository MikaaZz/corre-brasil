import { render } from '@testing-library/react';

import ApiCalls from './api-calls';

describe('ApiCalls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiCalls />);
    expect(baseElement).toBeTruthy();
  });
});
