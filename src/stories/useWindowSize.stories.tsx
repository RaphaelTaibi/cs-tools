import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import './storybook.css';

import useWindowSize from '../lib/hooks/useWindowSize';
import Card from '../lib/components/Card';

const WindowSizeStorie: React.FC = () => {
  const { width, height } = useWindowSize();

  const getDeviceType = () => {
    if (!width) return { type: '🔄 Loading...', color: 'text-gray-500' };
    if (width < 640) return { type: '📱 Mobile', color: 'text-red-600' };
    if (width < 1024) return { type: '📱 Tablet', color: 'text-yellow-600' };
    return { type: '💻 Desktop', color: 'text-green-600' };
  };

  const device = getDeviceType();

  return (
    <Card 
      header={<h3 className="text-lg font-semibold">useWindowSize Hook</h3>}
      variant="outlined"
      className="w-96"
    >
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl mb-2">📐</div>
          <p className="text-xl font-medium">
            <span className={device.color}>
              {device.type}
            </span>
          </p>
        </div>

        <div className="cs-bg-tertiary p-4 rounded space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold cs-text-primary">{width || '—'}px</p>
              <p className="text-sm cs-text-secondary">Largeur</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold cs-text-primary">{height || '—'}px</p>
              <p className="text-sm cs-text-secondary">Hauteur</p>
            </div>
          </div>
          
          <div className="border-t pt-3">
            <p className="text-sm cs-text-secondary text-center">
              Redimensionnez votre navigateur pour voir les changements!
            </p>
          </div>
        </div>

        <div className="cs-bg-tertiary p-3 rounded">
          <p className="text-sm font-medium mb-2">Breakpoints Tailwind:</p>
          <div className="space-y-1 text-xs cs-text-secondary">
            <p className={width && width >= 640 ? 'text-green-600 font-medium' : ''}>
              • sm: 640px+ {width && width >= 640 ? '✅' : '❌'}
            </p>
            <p className={width && width >= 768 ? 'text-green-600 font-medium' : ''}>
              • md: 768px+ {width && width >= 768 ? '✅' : '❌'}
            </p>
            <p className={width && width >= 1024 ? 'text-green-600 font-medium' : ''}>
              • lg: 1024px+ {width && width >= 1024 ? '✅' : '❌'}
            </p>
            <p className={width && width >= 1280 ? 'text-green-600 font-medium' : ''}>
              • xl: 1280px+ {width && width >= 1280 ? '✅' : '❌'}
            </p>
          </div>
        </div>

        <div className="text-xs cs-text-secondary p-3 cs-bg-tertiary rounded">
          <strong>Use cases:</strong>
          <ul className="mt-1 space-y-1">
            <li>• Responsive design sans CSS media queries</li>
            <li>• Conditional rendering basé sur la taille</li>
            <li>• Analytics de viewport</li>
            <li>• Adaptive loading de contenus</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

const meta: Meta<typeof WindowSizeStorie> = {
  title: 'CS-Tools/Hooks/useWindowSize',
  component: WindowSizeStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WindowSizeStorie>;

export const Primary: Story = {};