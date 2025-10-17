import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import useLocalStorage from "../lib/hooks/useLocalStorage";
import Button from "../lib/components/Button";
import Card from "../lib/components/Card";
import Input from "../lib/components/Input";

const LocalStorageStorie: React.FC<{ storageKey: string; initialValue?: string }> = ({
    storageKey = "stories-key",
    initialValue = "Hello World",
}) => {
    const localStorage = useLocalStorage(storageKey, initialValue);
    const [inputValue, setInputValue] = React.useState(localStorage.value);
    const handleSave = () => {
        localStorage.setValue(inputValue);
    };
    const handleClear = () => {
        localStorage.removeValue();
        setInputValue(initialValue);
    };

     return (
    <Card 
      header={<h3 className="text-lg font-semibold">useLocalStorage Hook</h3>}
      variant="outlined"
      className="w-96"
    >
      <div className="space-y-4">
        <div className="cs-bg-tertiary p-3 rounded">
          <p className="text-sm font-medium">Stored Value:</p>
          <p className="text-lg cs-text-primary break-all">
            "{localStorage.value}"
          </p>
          <p className="text-xs cs-text-secondary mt-1">
            Key: {storageKey}
          </p>
        </div>

        <div className="space-y-2">
          <Input
            label="New Value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter new value..."
          />
          
          <div className="flex gap-2">
            <Button onClick={handleSave} variant="primary" size="sm">
              Save
            </Button>
            <Button onClick={handleClear} variant="outline" size="sm">
              Clear
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const meta: Meta<typeof LocalStorageStorie> = {
  title: 'CS-Tools/Hooks/useLocalStorage',
  component: LocalStorageStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    storageKey: {
      control: 'text',
      description: 'Clé du localStorage',
    },
    initialValue: {
      control: 'text',
      description: 'Valeur initiale',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LocalStorageStorie>;

export const Primary: Story = {
  args: {
    storageKey: 'storybook-demo',
    initialValue: 'Hello Storybook!',
  },
};

export const TodoList: Story = {
  args: {
    storageKey: 'my-todos',
    initialValue: '["Faire les courses", "Coder"]',
  },
};

export const UserName: Story = {
  args: {
    storageKey: 'username',
    initialValue: 'John Doe',
  },
};