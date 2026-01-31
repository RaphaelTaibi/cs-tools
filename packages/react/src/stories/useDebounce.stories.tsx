import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import useDebounce from '../hooks/useDebounce.js';
import Button from '../components/Button.js';
import Card from '../components/Card.js';
import Input from '../components/Input.js';

const DebounceStorie: React.FC<{ delay?: number }> = ({ delay = 500 }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, delay);
  const [searchCount, setSearchCount] = React.useState(0);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchCount(prev => prev + 1);
    }
  }, [debouncedSearchTerm]);

  return (
    <Card 
      header={<h3 className="text-lg font-semibold">useDebounce Hook</h3>}
      variant="outlined"
      className="w-96"
    >
      <div className="space-y-4">
        <div>
          <Input
            label="Search (tapez rapidement!)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tapez pour voir le debounce..."
          />
        </div>

        <div className="cs-bg-tertiary p-3 rounded space-y-2">
          <div>
            <p className="text-sm font-medium">Valeur immédiate:</p>
            <p className="text-lg cs-text-primary">"{searchTerm}"</p>
          </div>
          <div>
            <p className="text-sm font-medium">Valeur debouncée ({delay}ms):</p>
            <p className="text-lg cs-text-primary">"{debouncedSearchTerm}"</p>
          </div>
        </div>

        <div className="cs-bg-tertiary p-3 rounded">
          <p className="text-sm cs-text-secondary">
            🔍 Recherches effectuées: <strong>{searchCount}</strong>
          </p>
          <p className="text-xs cs-text-secondary mt-1">
            Sans debounce, il y aurait {searchTerm.length} recherches!
          </p>
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={() => setSearchTerm('React')} 
            variant="outline" 
            size="sm"
          >
            Set "React"
          </Button>
          <Button 
            onClick={() => setSearchTerm('')} 
            variant="ghost" 
            size="sm"
          >
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

const meta: Meta<typeof DebounceStorie> = {
  title: 'CS-Tools/Hooks/useDebounce',
  component: DebounceStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    delay: {
      control: { type: 'number', min: 100, max: 2000, step: 100 },
      description: 'Délai de debounce en millisecondes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DebounceStorie>;

export const Primary: Story = {
  args: {
    delay: 500,
  },
};

export const Fast: Story = {
  args: {
    delay: 200,
  },
};

export const Slow: Story = {
  args: {
    delay: 1000,
  },
};
