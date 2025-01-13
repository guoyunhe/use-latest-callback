import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { useLatestCallback } from '.';

describe('useLatestCallback()', () => {
  it('should get latest state while keep reference', async () => {
    let callback = null;
    const App = () => {
      const [foobar, setFoobar] = useState('foo');

      callback = useLatestCallback(() => foobar);

      return <button onClick={() => setFoobar('bar')}>{foobar}</button>;
    };
    render(<App />);

    expect(callback()).toBe('foo');
    const oldCallback = callback;

    screen.getByText('foo').click();
    await screen.findByText('bar');

    // callback can get latest state value
    expect(callback()).toBe('bar');
    // callback reference didn't change
    expect(callback).toBe(oldCallback);
  });
});
