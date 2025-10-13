// Example: Using cs-tools React hooks

import React, { useState } from 'react';
import {
  useLocalStorage,
  useDebounce,
  useWindowSize,
  useOnlineStatus,
} from '../src';

export function HooksExample() {
  // useLocalStorage example
  const [name, setName] = useLocalStorage<string>('userName', '');
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  // useDebounce example
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  // useWindowSize example
  const { width, height } = useWindowSize();

  // useOnlineStatus example
  const isOnline = useOnlineStatus();

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Hooks Examples</h2>

      {/* useLocalStorage */}
      <section style={{ marginBottom: '30px' }}>
        <h3>useLocalStorage</h3>
        <p>Value persists across page refreshes</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ marginRight: '10px' }}
        />
        <p>Stored name: {name}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme (current: {theme})
        </button>
      </section>

      {/* useDebounce */}
      <section style={{ marginBottom: '30px' }}>
        <h3>useDebounce</h3>
        <p>Value updates after 500ms of no typing</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search..."
        />
        <p>Current: {searchTerm}</p>
        <p>Debounced: {debouncedSearch}</p>
      </section>

      {/* useWindowSize */}
      <section style={{ marginBottom: '30px' }}>
        <h3>useWindowSize</h3>
        <p>Resize the window to see changes</p>
        <p>
          Width: {width}px, Height: {height}px
        </p>
      </section>

      {/* useOnlineStatus */}
      <section style={{ marginBottom: '30px' }}>
        <h3>useOnlineStatus</h3>
        <p>Try disconnecting from the internet</p>
        <p
          style={{
            color: isOnline ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          Status: {isOnline ? 'Online ✓' : 'Offline ✗'}
        </p>
      </section>
    </div>
  );
}

export default HooksExample;
