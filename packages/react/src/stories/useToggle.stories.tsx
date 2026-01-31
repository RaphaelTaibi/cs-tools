import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import useToggle from '../hooks/useToggle.js';
import Button from '../components/Button.js';
import Card from '../components/Card.js';

const ToggleStorie: React.FC<{ initialValue?: boolean }> = ({ initialValue = false }) => {
  const toggle = useToggle(initialValue);

  return (
    <Card 
      header={<h3 className="text-lg font-semibold">useToggle Hook</h3>}
      variant="outlined"
      className="w-80"
    >
      <div className="space-y-4 text-center">
        <div>
          <div className="text-6xl mb-2">
            {toggle.value ? '✅' : '❌'}
          </div>
          <p className="text-xl font-medium">
            <span className={toggle.value ? 'text-green-600' : 'text-red-600'}>
              {toggle.value ? 'TRUE' : 'FALSE'}
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={toggle.toggle} variant="primary" size="sm">
            Toggle
          </Button>
          <Button onClick={toggle.setTrue} variant="outline" size="sm">
            Set True
          </Button>
          <Button onClick={toggle.setFalse} variant="outline" size="sm">
            Set False
          </Button>
          <Button onClick={() => toggle.setValue(!toggle.value)} variant="ghost" size="sm">
            setValue
          </Button>
        </div>
      </div>
    </Card>
  );
};
const meta: Meta<typeof ToggleStorie> = {
  title: 'CS-Tools/Hooks/useToggle',
  component: ToggleStorie,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      control: 'boolean',
      description: 'Valeur initiale du toggle',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleStorie>;

export const Primary: Story = {
  args: {
    initialValue: false,
  },
};

export const StartTrue: Story = {
  args: {
    initialValue: true,
  },
};
