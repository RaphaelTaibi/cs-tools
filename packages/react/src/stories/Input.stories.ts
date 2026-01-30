import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Input from '../components/Input';

const meta = {
  title: 'CS-Tools/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: 'The variant of the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'url', 'tel'],
      description: 'The type of the input',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helper: {
      control: 'text',
      description: 'Helper text to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email...",
    type: "email",
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username...",
    error: "Username is required",
    value: "",
  },
};

export const WithHelper: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
    helper: "Password must be at least 8 characters long",
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: "Search",
    placeholder: "Search for anything...",
    type: "search",
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: "Website URL",
    placeholder: "https://example.com",
    type: "url",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    leftIcon: "🔍",
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
    rightIcon: "👁️",
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    leftIcon: "📞",
    rightIcon: "✓",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "This field is disabled",
    disabled: true,
    value: "Read-only value",
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age...",
    helper: "Must be 18 or older",
  },
};

export const CompleteForm: Story = {
  args: {
    variant: 'outline',
    label: "Full Name",
    placeholder: "John Doe",
    helper: "Enter your first and last name",
    leftIcon: "👤",
  },
};
