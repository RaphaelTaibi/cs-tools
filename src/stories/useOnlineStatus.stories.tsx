import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import './storybook.css';

import useOnlineStatus from '../lib/hooks/useOnlineStatus';
import Card from '../lib/components/Card';

const OnlineStatusStorie: React.FC = () => {
  const isOnline = useOnlineStatus();

  return (
    <Card 
      header={<h3 className="text-lg font-semibold">useOnlineStatus Hook</h3>}
      variant="outlined"
      className="w-96"
    >
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-6xl mb-2">
            {isOnline ? '🟢' : '🔴'}
          </div>
          <p className="text-xl font-medium">
            <span className={isOnline ? 'text-green-600' : 'text-red-600'}>
              {isOnline ? 'EN LIGNE' : 'HORS LIGNE'}
            </span>
          </p>
        </div>

        <div className="cs-bg-tertiary p-3 rounded">
          <p className="text-sm font-medium mb-2">État de la connexion:</p>
          <div className="space-y-1 text-sm cs-text-secondary">
            <p>• Navigator.onLine: <strong>{isOnline ? 'true' : 'false'}</strong></p>
            <p>• Dernière mise à jour: <strong>{new Date().toLocaleTimeString()}</strong></p>
          </div>
        </div>

        <div className="cs-bg-tertiary p-3 rounded">
          <p className="text-sm font-medium mb-2">🧪 Comment tester:</p>
          <div className="space-y-1 text-xs cs-text-secondary">
            <p>1. Ouvrez DevTools (F12)</p>
            <p>2. Allez dans l'onglet "Network"</p>
            <p>3. Cochez "Offline" ou sélectionnez "No internet"</p>
            <p>4. Observez le changement d'état!</p>
          </div>
        </div>

        <div className="text-xs cs-text-secondary p-3 cs-bg-tertiary rounded">
          <strong>Use cases:</strong>
          <ul className="mt-1 space-y-1">
            <li>• PWA: Queue d'actions en attente de connexion</li>
            <li>• Chat: Statut utilisateur en ligne/hors ligne</li>
            <li>• Sync: Différer uploads jusqu'au retour online</li>
            <li>• UX: Afficher bannière "Pas de connexion"</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

const meta: Meta<typeof OnlineStatusStorie> = {
  title: 'CS-Tools/Hooks/useOnlineStatus',
  component: OnlineStatusStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OnlineStatusStorie>;

export const Primary: Story = {};