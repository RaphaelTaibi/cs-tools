// Example: Using cs-tools React components

import React, { useState } from 'react';
import { Button, Input, Card, Spinner } from '../src';

export function ComponentsExample() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`Form submitted with email: ${email}`);
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Card padding="large" shadow border>
        <h2>Component Examples</h2>

        <div style={{ marginBottom: '20px' }}>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            helperText="We'll never share your email"
            fullWidth
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Button
            variant="primary"
            size="medium"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>

          <Button
            variant="secondary"
            size="medium"
            onClick={() => {
              setEmail('');
              setError('');
            }}
            disabled={loading}
          >
            Clear
          </Button>

          <Button variant="danger" size="medium" disabled={loading}>
            Delete
          </Button>
        </div>

        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spinner size="medium" color="blue" />
          </div>
        )}
      </Card>

      <div style={{ marginTop: '20px' }}>
        <Card padding="medium" shadow={false} border>
          <h3>Button Sizes</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="medium">
              Medium
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Card padding="small">
          <h3>Spinner Sizes</h3>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Spinner size="small" color="blue" />
            <Spinner size="medium" color="blue" />
            <Spinner size="large" color="blue" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ComponentsExample;
