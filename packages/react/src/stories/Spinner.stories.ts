import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from '../components/Spinner';

const meta = {
  title: 'CS-Tools/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the spinner',
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'red', 'green', 'purple', 'gray', 'yellow', 'indigo', 'pink'],
      description: 'The color of the spinner',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'blue',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    color: 'blue',
  },
};
export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'blue',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
    color: 'blue',
  },
};
export const Blue: Story = {
  args: {
    size: 'medium',
    color: 'blue',
  },
};
export const Red: Story = {
  args: {
    size: 'medium',
    color: 'red',
  },
};
export const Green: Story = {
  args: {
    size: 'medium',
    color: 'green',
  },
};
export const Purple: Story = {
  args: {
    size: 'medium',
    color: 'purple',
  },
};
export const Gray: Story = {
  args: {
    size: 'medium',
    color: 'gray',
  },
};
export const Yellow: Story = {
  args: {
    size: 'medium',
    color: 'yellow',
  },
};
export const Indigo: Story = {
  args: {
    size: 'medium',
    color: 'indigo',
  },
};
export const Pink: Story = {
  args: {
    size: 'medium',
    color: 'pink',
  },
};
