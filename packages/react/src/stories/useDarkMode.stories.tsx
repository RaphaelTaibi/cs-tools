import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import useDarkMode from '../hooks/useDarkMode.js';
import Button from '../components/Button.js';
import Card from '../components/Card.js';

const DarkModeStorie: React.FC<{ defaultTheme?: 'light' | 'dark' | 'system' }> = ({
    defaultTheme = 'system'
}) => {
    const darkMode = useDarkMode(defaultTheme);

    return (
        <Card
            header={<h3 className="text-lg font-semibold">useDarkMode Hook</h3>}
            variant="outlined"
            className="w-96"
        >
            <div className="space-y-4">
                <div className="text-center">
                    <div className="text-6xl mb-2">
                        {darkMode.isDark ? '🌙' : '☀️'}
                    </div>
                    <p className="text-xl font-medium">
                        <span className={darkMode.isDark ? 'text-blue-400' : 'text-yellow-600'}>
                            {darkMode.isDark ? 'Dark Mode' : 'Light Mode'}
                        </span>
                    </p>
                </div>

                <div className="cs-bg-tertiary p-3 rounded">
                    <p className="text-sm font-medium mb-2">Theme Effects:</p>
                    <ul className="text-sm cs-text-secondary space-y-1">
                        <li>• Background: {darkMode.isDark ? 'Dark' : 'Light'}</li>
                        <li>• Applique la classe 'dark' sur document</li>
                        <li>• Stocké dans localStorage 'cs-theme'</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Button onClick={darkMode.toggle} variant="primary" size="sm">
                        Toggle
                    </Button>
                    <Button onClick={darkMode.enable} variant="outline" size="sm">
                        Force Dark
                    </Button>
                    <Button onClick={darkMode.disable} variant="outline" size="sm">
                        Force Light
                    </Button>
                    <Button onClick={() => darkMode.setTheme('system')} variant="ghost" size="sm">
                        System
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default {
    title: 'CS-Tools/Hooks/useDarkMode',
    component: DarkModeStorie,
} as Meta<typeof DarkModeStorie>;

export const Primary: StoryObj<typeof DarkModeStorie> = {
    args: {
        defaultTheme: 'system',
    },
};
