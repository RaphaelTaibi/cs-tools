import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Card from '../lib/components/Card';

const meta = {
  title: 'CS-Tools/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
      description: 'The variant of the card',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The padding of the card',
    },
    header: {
      control: 'text',
      description: 'Header content of the card',
    },
    footer: {
      control: 'text',
      description: 'Footer content of the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a default card with some content to showcase how it looks.",
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: "This is an elevated card with shadow effects.",
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: "This is an outlined card with visible borders.",
  },
};

export const WithHeader: Story = {
  args: {
    header: "Card Header",
    children: "This card has a header section at the top.",
  },
};

export const WithFooter: Story = {
  args: {
    footer: "Card Footer",
    children: "This card has a footer section at the bottom.",
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: "Card Header",
    footer: "Card Footer",
    children: "This card has both header and footer sections.",
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: "This card has small padding.",
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: "This card has large padding.",
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: "This card has no padding.",
  },
};

export const ComplexContent: Story = {
  args: {
    variant: 'elevated',
    header: "🎯 Task Management",
    footer: "Last updated: Today",
    children: `
      <div>
        <h3 style="margin: 0 0 1rem 0; color: var(--cs-text-primary);">Current Tasks</h3>
        <ul style="margin: 0; padding-left: 1.5rem; color: var(--cs-text-secondary);">
          <li>Review pull requests</li>
          <li>Update documentation</li>
          <li>Plan next sprint</li>
        </ul>
      </div>
    `,
  },
};