/**
 * Storybook demo for CS-Tools helpers
 * @module stories/helpers.stories
 */
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
  unique,
  groupBy,
  chunk,
  shuffle,
  debounce,
  deepClone,
  isEmpty,
  isObject,
  generateId
} from '@cs-tools/core';
import Card from '../components/Card.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';

/**
 * Main helpers story component
 * @returns {JSX.Element}
 */
const HelpersStorie: React.FC = () => {
  const [arrayInput, setArrayInput] = React.useState('1,2,2,3,3,4,5');
  const [chunkSize, setChunkSize] = React.useState(3);
  const [debounceText, setDebounceText] = React.useState('');
  const [debouncedResult, setDebouncedResult] = React.useState('');

  // Sample data for demonstrations
  const sampleArray = arrayInput.split(',').map(item => item.trim()).filter(Boolean);
  const sampleObjects = [
    { name: 'Alice', category: 'A', age: 25 },
    { name: 'Bob', category: 'B', age: 30 },
    { name: 'Charlie', category: 'A', age: 35 },
    { name: 'David', category: 'B', age: 28 },
  ];

  /**
   * Debounced update function for demo
   * @param {string} text
   */
  const debouncedUpdate = React.useMemo(
    () => debounce((text: string) => setDebouncedResult(text), 500),
    []
  );

  React.useEffect(() => {
    debouncedUpdate(debounceText);
  }, [debounceText, debouncedUpdate]);

  const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <pre className="text-xs cs-text-secondary bg-gray-100 p-2 rounded overflow-x-auto">
      {children}
    </pre>
  );

  const ResultBox: React.FC<{ label: string; result: unknown }> = ({ label, result }) => (
    <div className="cs-bg-tertiary p-3 rounded">
      <p className="text-sm font-medium mb-2">{label}:</p>
      <CodeBlock>{JSON.stringify(result, null, 2)}</CodeBlock>
    </div>
  );

  return (
    <div className="grid gap-6 max-w-6xl mx-auto">
      <Card
        header={<h3 className="text-lg font-semibold">Helpers Demo</h3>}
        variant="outlined"
      >
        <div className="space-y-8">
          {/* Array Helpers */}
          <div>
            <h4 className="text-md font-semibold mb-4">🔢 Array Helpers</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <Input
                  label="Array Input (comma separated)"
                  value={arrayInput}
                  onChange={(e) => setArrayInput(e.target.value)}
                  placeholder="1,2,2,3,3,4,5"
                />
                <ResultBox
                  label="Original Array"
                  result={sampleArray}
                />
                <ResultBox
                  label="unique(array)"
                  result={unique(sampleArray)}
                />
              </div>

              <div className="space-y-3">
                <Input
                  label="Chunk Size"
                  type="number"
                  min="1"
                  value={chunkSize}
                  onChange={(e) => setChunkSize(parseInt(e.target.value) || 1)}
                />
                <ResultBox
                  label="shuffle(array)"
                  result={shuffle([...sampleArray])}
                />
                <ResultBox
                  label={`chunk(array, ${chunkSize})`}
                  result={chunk(sampleArray, chunkSize)}
                />
              </div>
            </div>
          </div>

          {/* Object Helpers */}
          <div>
            <h4 className="text-md font-semibold mb-4">📦 Object Helpers</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <ResultBox
                label="Sample Objects"
                result={sampleObjects}
              />
              <ResultBox
                label="groupBy(objects, 'category')"
                result={groupBy(sampleObjects, (item: typeof sampleObjects[number]) => item.category)}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="space-y-3">
                <p className="text-sm font-medium">Deep Clone Test:</p>
                <CodeBlock>
                  {`const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 99;

original.b.c: ${deepClone({ a: 1, b: { c: 2 } }).b.c}
cloned.b.c: 99 (independent)`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Type Checkers & Utils:</p>
                <CodeBlock>
                  {`isEmpty(''): ${isEmpty('')}
                    isEmpty([]): ${isEmpty([])}
                    isEmpty({}): ${isEmpty({})}
                    isObject({}): ${isObject({})}
                    isObject([]): ${isObject([])}
                    generateId(): ${generateId()}`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Function Helpers */}
          <div>
            <h4 className="text-md font-semibold mb-4">⚡ Function Helpers</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <Input
                  label="Debounce Demo (500ms delay)"
                  value={debounceText}
                  onChange={(e) => setDebounceText(e.target.value)}
                  placeholder="Type to see debounce..."
                />
                <div className="cs-bg-tertiary p-3 rounded space-y-2">
                  <p className="text-sm">Immediate: <code>{debounceText}</code></p>
                  <p className="text-sm">Debounced: <code>{debouncedResult}</code></p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Throttle vs Debounce:</p>
                <div className="cs-bg-tertiary p-3 rounded text-xs cs-text-secondary space-y-1">
                  <p><strong>Debounce:</strong> Waits for pause in events</p>
                  <p><strong>Throttle:</strong> Limits frequency of execution</p>
                  <p><strong>Use debounce for:</strong> Search, resize events</p>
                  <p><strong>Use throttle for:</strong> Scroll, mouse move</p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Actions */}
          <div>
            <h4 className="text-md font-semibold mb-4">🎮 Interactive Demo</h4>
            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={() => setArrayInput(shuffle(['🍎', '🍌', '🍊', '🍇', '🥝']).join(','))}
                variant="primary"
                size="sm"
              >
                Random Fruits
              </Button>
              <Button
                onClick={() => setArrayInput(unique(['a', 'b', 'a', 'c', 'b', 'd']).join(','))}
                variant="outline"
                size="sm"
              >
                Remove Duplicates
              </Button>
              <Button
                onClick={() => setDebounceText('Hello World!')}
                variant="outline"
                size="sm"
              >
                Test Debounce
              </Button>
              <Button
                onClick={() => {
                  setArrayInput('1,2,3,4,5,6,7,8,9,10');
                  setChunkSize(3);
                }}
                variant="ghost"
                size="sm"
              >
                Reset Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs cs-text-secondary p-3 cs-bg-tertiary rounded">
          <strong>Available Helpers:</strong>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-1">
            <div>
              <p className="font-medium">Arrays:</p>
              <p>• <code>unique()</code></p>
              <p>• <code>chunk()</code></p>
              <p>• <code>shuffle()</code></p>
              <p>• <code>groupBy()</code></p>
            </div>
            <div>
              <p className="font-medium">Objects:</p>
              <p>• <code>deepClone()</code></p>
              <p>• <code>isEqual()</code></p>
              <p>• <code>omit()</code></p>
              <p>• <code>pick()</code></p>
            </div>
            <div>
              <p className="font-medium">Functions:</p>
              <p>• <code>debounce()</code></p>
              <p>• <code>throttle()</code></p>
              <p>• <code>memoize()</code></p>
              <p>• <code>retry()</code></p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const meta: Meta<typeof HelpersStorie> = {
  title: 'CS-Tools/Utils/Helpers',
  component: HelpersStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HelpersStorie>;

export const Primary: Story = {};
