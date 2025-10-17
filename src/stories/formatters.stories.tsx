import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';


import { 
  formatDate,
  formatCurrency,
  formatNumber,
  formatFileSize,
  formatPercentage,
  capitalizeFirst,
  capitalizeWords,
  slugify,
  truncate
} from '../lib/utils/formatters';
import Card from '../lib/components/Card';
import Input from '../lib/components/Input';

const FormattersStorie: React.FC = () => {
  const [dateInput, setDateInput] = React.useState('2024-12-25');
  const [currencyAmount, setCurrencyAmount] = React.useState(1234.56);
  const [numberInput, setNumberInput] = React.useState(1234567.89);
  const [fileSizeBytes, setFileSizeBytes] = React.useState(1048576);
  const [percentageInput, setPercentageInput] = React.useState(0.7532);
  const [stringInput, setStringInput] = React.useState('hello world from paris!');

  const FormatExample: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
      <span className="text-sm cs-text-secondary">{label}:</span>
      <code className="text-sm cs-text-primary bg-gray-100 px-2 py-1 rounded">{value}</code>
    </div>
  );

  return (
    <div className="grid gap-6 max-w-6xl mx-auto">
      <Card 
        header={<h3 className="text-lg font-semibold">All Formatters Demo & Testing</h3>}
        variant="outlined"
      >
        <div className="space-y-8">
          
          {/* Section 1: Number & Date Formatters */}
          <div>
            <h4 className="text-lg font-semibold mb-4">🔢 Number & Date Formatters</h4>
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Date Formatting */}
              <div className="space-y-3">
                <Input
                  label="Date Formatting"
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                />
                <div className="cs-bg-tertiary p-4 rounded space-y-1">
                  <FormatExample 
                    label="FR (default)" 
                    value={formatDate(new Date(dateInput), 'fr-FR')} 
                  />
                  <FormatExample 
                    label="EN-US" 
                    value={formatDate(new Date(dateInput), 'en-US')} 
                  />
                  <FormatExample 
                    label="Short format" 
                    value={formatDate(new Date(dateInput), 'fr-FR', { dateStyle: 'short' })} 
                  />
                  <FormatExample 
                    label="Full with time" 
                    value={formatDate(new Date(), 'fr-FR', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })} 
                  />
                </div>
              </div>

              {/* Currency Formatting */}
              <div className="space-y-3">
                <Input
                  label="Currency Amount"
                  type="number"
                  step="0.01"
                  value={currencyAmount}
                  onChange={(e) => setCurrencyAmount(parseFloat(e.target.value) || 0)}
                />
                <div className="cs-bg-tertiary p-4 rounded space-y-1">
                  <FormatExample 
                    label="EUR (default)" 
                    value={formatCurrency(currencyAmount, 'EUR', 'fr-FR')} 
                  />
                  <FormatExample 
                    label="USD" 
                    value={formatCurrency(currencyAmount, 'USD', 'en-US')} 
                  />
                  <FormatExample 
                    label="GBP" 
                    value={formatCurrency(currencyAmount, 'GBP', 'en-GB')} 
                  />
                  <FormatExample 
                    label="JPY" 
                    value={formatCurrency(currencyAmount, 'JPY', 'ja-JP')} 
                  />
                </div>
              </div>

              {/* Number Formatting */}
              <div className="space-y-3">
                <Input
                  label="Number Formatting"
                  type="number"
                  step="0.01"
                  value={numberInput}
                  onChange={(e) => setNumberInput(parseFloat(e.target.value) || 0)}
                />
                <div className="cs-bg-tertiary p-4 rounded space-y-1">
                  <FormatExample 
                    label="Default" 
                    value={formatNumber(numberInput)} 
                  />
                  <FormatExample 
                    label="2 decimals" 
                    value={formatNumber(numberInput, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
                  />
                  <FormatExample 
                    label="Percentage style" 
                    value={formatNumber(numberInput / 100, { style: 'percent' })} 
                  />
                  <FormatExample 
                    label="Scientific" 
                    value={formatNumber(numberInput, { notation: 'scientific' })} 
                  />
                </div>
              </div>

              {/* Percentage Formatting */}
              <div className="space-y-3">
                <Input
                  label="Percentage (0-1)"
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={percentageInput}
                  onChange={(e) => setPercentageInput(parseFloat(e.target.value) || 0)}
                />
                <div className="cs-bg-tertiary p-4 rounded space-y-1">
                  <FormatExample 
                    label="formatPercentage()" 
                    value={formatPercentage(percentageInput)} 
                  />
                  <FormatExample 
                    label="1 decimal" 
                    value={formatPercentage(percentageInput, 1)} 
                  />
                  <FormatExample 
                    label="0 decimals" 
                    value={formatPercentage(percentageInput, 0)} 
                  />
                  <FormatExample 
                    label="Raw value" 
                    value={percentageInput.toString()} 
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: File Size */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📁 File Size Formatter</h4>
            <div className="grid gap-6 md:grid-cols-2">
              
              <div className="space-y-3">
                <Input
                  label="File Size (bytes)"
                  type="number"
                  value={fileSizeBytes}
                  onChange={(e) => setFileSizeBytes(parseInt(e.target.value) || 0)}
                />
                <div className="cs-bg-tertiary p-4 rounded space-y-1">
                  <FormatExample 
                    label="formatFileSize()" 
                    value={formatFileSize(fileSizeBytes)} 
                  />
                  <FormatExample 
                    label="Raw bytes" 
                    value={`${fileSizeBytes.toLocaleString()} bytes`} 
                  />
                </div>
              </div>

              <div className="cs-bg-tertiary p-4 rounded">
                <p className="text-sm font-medium mb-2">Test Examples:</p>
                <div className="space-y-1 text-xs">
                  <FormatExample label="1 KB" value={formatFileSize(1024)} />
                  <FormatExample label="1 MB" value={formatFileSize(1024 * 1024)} />
                  <FormatExample label="1 GB" value={formatFileSize(1024 * 1024 * 1024)} />
                  <FormatExample label="500 bytes" value={formatFileSize(500)} />
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: String Formatters */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📝 String Formatters</h4>
            <div className="space-y-4">
              
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="String Input"
                  value={stringInput}
                  onChange={(e) => setStringInput(e.target.value)}
                  placeholder="hello world from paris!"
                />
                
                <div className="cs-bg-tertiary p-4 rounded space-y-1">
                  <FormatExample 
                    label="Original" 
                    value={`"${stringInput}"`} 
                  />
                  <FormatExample 
                    label="capitalizeFirst()" 
                    value={`"${capitalizeFirst(stringInput)}"`} 
                  />
                  <FormatExample 
                    label="capitalizeWords()" 
                    value={`"${capitalizeWords(stringInput)}"`} 
                  />
                  <FormatExample 
                    label="slugify()" 
                    value={`"${slugify(stringInput)}"`} 
                  />
                  <FormatExample 
                    label="truncate(15)" 
                    value={`"${truncate(stringInput, 15)}"`} 
                  />
                  <FormatExample 
                    label="truncate(10, '***')" 
                    value={`"${truncate(stringInput, 10, '***')}"`} 
                  />
                </div>
              </div>

              <div className="cs-bg-tertiary p-4 rounded">
                <p className="text-sm font-medium mb-2">String Formatters Examples:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-medium">capitalizeFirst():</p>
                    <p>• "hello world" → "{capitalizeFirst("hello world")}"</p>
                    <p>• "CAPS TEXT" → "{capitalizeFirst("CAPS TEXT")}"</p>
                  </div>
                  <div>
                    <p className="font-medium">slugify():</p>
                    <p>• "Hello World!" → "{slugify("Hello World!")}"</p>
                    <p>• "Café & Restaurant" → "{slugify("Café & Restaurant")}"</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-6 text-xs cs-text-secondary p-4 cs-bg-tertiary rounded">
          <strong>📚 Complete Formatters Library:</strong>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium text-sm mb-2">Numbers & Dates:</p>
              <p>• <code>formatDate(date, locale, options)</code></p>
              <p>• <code>formatCurrency(amount, currency, locale)</code></p>
              <p>• <code>formatNumber(number, options)</code></p>
              <p>• <code>formatPercentage(value, decimals)</code></p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Files:</p>
              <p>• <code>formatFileSize(bytes)</code></p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Strings:</p>
              <p>• <code>capitalizeFirst(str)</code></p>
              <p>• <code>capitalizeWords(str)</code></p>
              <p>• <code>slugify(str)</code></p>
              <p>• <code>truncate(str, length, suffix)</code></p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const meta: Meta<typeof FormattersStorie> = {
  title: 'CS-Tools/Utils/Formatters',
  component: FormattersStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormattersStorie>;

export const Primary: Story = {};