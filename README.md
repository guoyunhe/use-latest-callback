# @guoyunhe/use-latest-callback

React hook to provide stable reference to latest callback function

## Installation

```bash
npm install --save @guoyunhe/use-latest-callback
```

## Examples

```js
import { useEffect, useRef, useState } from 'react';
import { useLatestCallback } from '@guoyunhe/use-latest-callback';

function List({ search }) {
  const [data, setData] = useState();

  const reload = useLatestCallback(() => {
    fetch('foobar?search=' + search)
      .then((res) => res.json())
      .then((res) => setData(res));
  });

  // When search change, useEffect will NOT run because dependencies didn't change
  useEffect(() => {
    const interval = setInterval(() => reload(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [reload]);
}
```

Compared with traditional useCallback:

```js
import { useCallback, useEffect, useRef, useState } from 'react';

function List({ search }) {
  const [data, setData] = useState();

  const reload = useCallback(() => {
    fetch('foobar?search=' + search)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [search]);

  // When search change, useEffect will run because dependencies changed
  useEffect(() => {
    const interval = setInterval(() => reload(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [reload]);
}
```
