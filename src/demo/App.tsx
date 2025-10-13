import React from 'react';
import './App.css';
import { Button, Card, Input, useToggle, useLocalStorage, validatePasswordStrength, isValidEmail } from '../lib';

function App() {
  const toggle = useToggle(false);
  const { value: name, setValue: setName } = useLocalStorage('demoName', '');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🚀 CS-Tools Demo
          </h1>
          <p className="text-lg text-gray-600">
            Playground to test our React components
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Section Boutons */}
          <Card header={<h2 className="text-xl font-semibold">Buttons</h2>} variant="elevated">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">States</h3>
                <div className="flex flex-wrap gap-2">
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button leftIcon="🚀">With icon</Button>
                  <Button rightIcon="🚀">With icon</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Section Inputs */}
          <Card header={<h2 className="text-xl font-semibold">Inputs</h2>} variant="elevated">
            <div className="space-y-4">
              <Input
                label="Full name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                helper="This name will be saved in localStorage"
              />

              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon="📧"
                variant="filled"
                error={email && !isValidEmail(email) ? 'Invalid email address' : ''}
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={password && !validatePasswordStrength(password).isStrong ? 
                  validatePasswordStrength(password).feedback.join(', ') : ''}
                helper={password && validatePasswordStrength(password).isStrong ? 
                  '✅ Strong password!' : 'Must contain: uppercase, lowercase, number, special character (8+ chars)'}
                variant="outline"
              />
            </div>
          </Card>

          {/* Section Hooks */}
          <Card 
            header={<h2 className="text-xl font-semibold">Custom Hooks</h2>} 
            variant="elevated"
            className="md:col-span-2"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-3">useToggle</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">State: {toggle.value ? '✅ Enabled' : '❌ Disabled'}</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={toggle.toggle}>
                      Toggle
                    </Button>
                    <Button size="sm" variant="outline" onClick={toggle.setTrue}>
                      Enable
                    </Button>
                    <Button size="sm" variant="outline" onClick={toggle.setFalse}>
                      Disable
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">useLocalStorage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Saved name: <span className="font-mono">{name || 'None'}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Try reloading the page, the name will be preserved!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Section Cards */}
          <Card 
            header={<h2 className="text-xl font-semibold">Card Variants</h2>}
            variant="outlined"
            className="md:col-span-2"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <Card variant="default" padding="sm">
                <h4 className="font-medium mb-2">Default Card</h4>
                <p className="text-sm text-gray-600">A simple card with border.</p>
              </Card>

              <Card variant="elevated" padding="sm">
                <h4 className="font-medium mb-2">Elevated Card</h4>
                <p className="text-sm text-gray-600">A card with drop shadow.</p>
              </Card>

              <Card variant="outlined" padding="sm">
                <h4 className="font-medium mb-2">Outlined Card</h4>
                <p className="text-sm text-gray-600">A card with thick border.</p>
              </Card>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <Card 
          variant="elevated" 
          className="mt-8 text-center"
          footer={
            <p className="text-sm text-gray-500">
              Built with ❤️ using cs-tools
            </p>
          }
        >
          <h3 className="text-lg font-medium mb-2">Ready to use!</h3>
          <p className="text-gray-600">
            Your React component library is now functional.
            You can extend it with more components, hooks and utilities.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;