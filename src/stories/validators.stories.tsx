import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import './storybook.css';

import { 
  isValidEmail, 
  isValidPhoneNumber, 
  validatePasswordStrength,
  isValidUrl,
  isValidCreditCard,
  isValidIBAN,
  isValidPostalCode,
  isRequired,
  hasMinLength,
  hasMaxLength,
  type PasswordStrength 
} from '../lib/utils/validators';
import Card from '../lib/components/Card';
import Input from '../lib/components/Input';
import Button from '../lib/components/Button';

const ValidatorsStorie: React.FC = () => {
  // États pour tous les champs
  const [email, setEmail] = React.useState('test@example.com');
  const [phone, setPhone] = React.useState('+33123456789');
  const [password, setPassword] = React.useState('MyPassword123!');
  const [url, setUrl] = React.useState('https://example.com');
  const [creditCard, setCreditCard] = React.useState('4111111111111111');
  const [iban, setIban] = React.useState('FR1420041010050500013M02606');
  const [postalCode, setPostalCode] = React.useState('75001');
  const [requiredField, setRequiredField] = React.useState('');
  const [lengthField, setLengthField] = React.useState('Hello');

  // Résultats de validation
  const emailValid = isValidEmail(email);
  const phoneValid = isValidPhoneNumber(phone, 'FR');
  const passwordStrength: PasswordStrength = validatePasswordStrength(password);
  const urlValid = isValidUrl(url);
  const cardValid = isValidCreditCard(creditCard);
  const ibanValid = isValidIBAN(iban);
  const postalValid = isValidPostalCode(postalCode);
  const requiredValid = isRequired(requiredField);
  const minLengthValid = hasMinLength(lengthField, 3);
  const maxLengthValid = hasMaxLength(lengthField, 10);

  const ValidationResult: React.FC<{ isValid: boolean; label: string; details?: string }> = ({ isValid, label, details }) => (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm">{label}</span>
        {details && <p className="text-xs cs-text-secondary">{details}</p>}
      </div>
      <span className={`text-sm font-medium ${isValid ? 'text-green-600' : 'text-red-600'}`}>
        {isValid ? '✅ Valid' : '❌ Invalid'}
      </span>
    </div>
  );

  const TestExample: React.FC<{ title: string; examples: string[]; validator: (value: string) => boolean }> = ({ title, examples, validator }) => (
    <div className="cs-bg-tertiary p-3 rounded space-y-2">
      <h5 className="text-sm font-medium">{title} - Test Examples:</h5>
      <div className="space-y-1">
        {examples.map((example, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <code className="cs-text-primary">{example}</code>
            <span className={validator(example) ? 'text-green-600' : 'text-red-600'}>
              {validator(example) ? '✅' : '❌'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid gap-6 max-w-6xl mx-auto">
      <Card 
        header={<h3 className="text-lg font-semibold">All Validators Demo & Testing</h3>}
        variant="outlined"
      >
        <div className="space-y-8">
          
          {/* Section 1: Format Validators */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📧 Format Validators</h4>
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Email */}
              <div className="space-y-3">
                <Input
                  label="Email Validation"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test@example.com"
                />
                <ValidationResult isValid={emailValid} label="isValidEmail()" />
                <TestExample 
                  title="Email"
                  examples={['user@domain.com', 'invalid-email', 'test@.com', 'good@test.fr']}
                  validator={isValidEmail}
                />
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <Input
                  label="Phone Validation (French)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+33123456789"
                />
                <ValidationResult isValid={phoneValid} label="isValidPhoneNumber(FR)" />
                <TestExample 
                  title="Phone (FR)"
                  examples={['+33123456789', '0123456789', '+33987654321', '123456']}
                  validator={(p) => isValidPhoneNumber(p, 'FR')}
                />
              </div>

              {/* URL */}
              <div className="space-y-3">
                <Input
                  label="URL Validation"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                />
                <ValidationResult isValid={urlValid} label="isValidUrl()" />
                <TestExample 
                  title="URL"
                  examples={['https://google.com', 'http://test.fr', 'ftp://files.com', 'invalid-url']}
                  validator={isValidUrl}
                />
              </div>

              {/* Postal Code */}
              <div className="space-y-3">
                <Input
                  label="Postal Code (French)"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="75001"
                />
                <ValidationResult isValid={postalValid} label="isValidPostalCode()" />
                <TestExample 
                  title="Postal Code"
                  examples={['75001', '13000', '99999', '1234', '750a1']}
                  validator={isValidPostalCode}
                />
              </div>

            </div>
          </div>

          {/* Section 2: Financial Validators */}
          <div>
            <h4 className="text-lg font-semibold mb-4">💳 Financial Validators</h4>
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Credit Card */}
              <div className="space-y-3">
                <Input
                  label="Credit Card (Luhn Algorithm)"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                  placeholder="4111111111111111"
                />
                <ValidationResult isValid={cardValid} label="isValidCreditCard()" details="Uses Luhn algorithm" />
                <TestExample 
                  title="Credit Card"
                  examples={['4111111111111111', '5555555555554444', '1234567890', '4111111111111112']}
                  validator={isValidCreditCard}
                />
              </div>

              {/* IBAN */}
              <div className="space-y-3">
                <Input
                  label="IBAN Validation"
                  value={iban}
                  onChange={(e) => setIban(e.target.value)}
                  placeholder="FR1420041010050500013M02606"
                />
                <ValidationResult isValid={ibanValid} label="isValidIBAN()" />
                <TestExample 
                  title="IBAN"
                  examples={['FR1420041010050500013M02606', 'DE89370400440532013000', 'INVALID', 'GB33BUKB20201555555555']}
                  validator={isValidIBAN}
                />
              </div>

            </div>
          </div>

          {/* Section 3: Generic Validators */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📏 Generic Validators</h4>
            <div className="grid gap-6 md:grid-cols-3">
              
              {/* Required */}
              <div className="space-y-3">
                <Input
                  label="Required Field"
                  value={requiredField}
                  onChange={(e) => setRequiredField(e.target.value)}
                  placeholder="Enter something..."
                />
                <ValidationResult isValid={requiredValid} label="isRequired()" />
                <TestExample 
                  title="Required"
                  examples={['Hello', '', ' ', 'A']}
                  validator={(v) => isRequired(v)}
                />
              </div>

              {/* Length Validators */}
              <div className="space-y-3">
                <Input
                  label="Length Validation (3-10 chars)"
                  value={lengthField}
                  onChange={(e) => setLengthField(e.target.value)}
                  placeholder="Hello"
                />
                <div className="cs-bg-tertiary p-3 rounded space-y-1">
                  <ValidationResult isValid={minLengthValid} label="hasMinLength(3)" />
                  <ValidationResult isValid={maxLengthValid} label="hasMaxLength(10)" />
                </div>
                <TestExample 
                  title="Min Length (3)"
                  examples={['Hi', 'Hello', 'A', 'Good']}
                  validator={(v) => hasMinLength(v, 3)}
                />
              </div>

              {/* Password Strength */}
              <div className="space-y-3">
                <Input
                  label="Password Strength"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="MyPassword123!"
                />
                <div className="cs-bg-tertiary p-3 rounded space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Score: {passwordStrength.score}/5</span>
                    <span className={`text-sm ${passwordStrength.isStrong ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordStrength.isStrong ? '🔒 Strong' : '🔓 Weak'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        passwordStrength.score >= 3 ? 'bg-green-500' : 
                        passwordStrength.score >= 2 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                    />
                  </div>
                  {passwordStrength.feedback.length > 0 && (
                    <div className="text-xs cs-text-secondary space-y-1">
                      {passwordStrength.feedback.map((feedback, i) => (
                        <p key={i}>• {feedback}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Quick Test Buttons */}
          <div>
            <h4 className="text-lg font-semibold mb-4">🚀 Quick Tests</h4>
            <div className="flex gap-3 flex-wrap">
              <Button onClick={() => setEmail('valid@test.com')} variant="primary" size="sm">
                Valid Email
              </Button>
              <Button onClick={() => setEmail('invalid-email')} variant="outline" size="sm">
                Invalid Email
              </Button>
              <Button onClick={() => setPhone('+33987654321')} variant="primary" size="sm">
                Valid Phone
              </Button>
              <Button onClick={() => setPhone('123')} variant="outline" size="sm">
                Invalid Phone
              </Button>
              <Button onClick={() => setCreditCard('4111111111111111')} variant="primary" size="sm">
                Valid Card
              </Button>
              <Button onClick={() => setCreditCard('1234567890')} variant="outline" size="sm">
                Invalid Card
              </Button>
              <Button onClick={() => setPassword('SuperSecure123!')} variant="primary" size="sm">
                Strong Password
              </Button>
              <Button onClick={() => setPassword('weak')} variant="outline" size="sm">
                Weak Password
              </Button>
            </div>
          </div>

        </div>

        <div className="mt-6 text-xs cs-text-secondary p-4 cs-bg-tertiary rounded">
          <strong>📚 Complete Validators Library:</strong>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium text-sm mb-2">Format Validation:</p>
              <p>• <code>isValidEmail(email)</code></p>
              <p>• <code>isValidPhoneNumber(phone, country)</code></p>
              <p>• <code>isValidUrl(url)</code></p>
              <p>• <code>isValidPostalCode(code)</code></p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Financial:</p>
              <p>• <code>isValidCreditCard(number)</code></p>
              <p>• <code>isValidIBAN(iban)</code></p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Generic:</p>
              <p>• <code>isRequired(value)</code></p>
              <p>• <code>hasMinLength(str, min)</code></p>
              <p>• <code>hasMaxLength(str, max)</code></p>
              <p>• <code>validatePasswordStrength(pwd)</code></p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const meta: Meta<typeof ValidatorsStorie> = {
  title: 'CS-Tools/Utils/Validators',
  component: ValidatorsStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ValidatorsStorie>;

export const Primary: Story = {};