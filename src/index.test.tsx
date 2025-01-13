import { render, screen } from '@testing-library/react';
import { UseLatestCallback } from '.';

describe('UseLatestCallback', () => {
  it('render', async () => {
    render(<UseLatestCallback>foobar</UseLatestCallback>);
    await screen.findByText('foobar');
  });
});
