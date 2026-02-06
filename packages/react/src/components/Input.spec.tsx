import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './Input.js';

describe('Input', () => {
  it('should render input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should render with default variant', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('cs-input-bg');
  });

  it('should render with filled variant', () => {
    render(<Input variant="filled" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('cs-bg-tertiary');
  });

  it('should render with outline variant', () => {
    render(<Input variant="outline" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-2');
  });

  it('should display error message', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('should display helper text when no error', () => {
    render(<Input helper="Help text" />);
    expect(screen.getByText('Help text')).toBeInTheDocument();
  });

  it('should not display helper text when error exists', () => {
    render(<Input helper="Help text" error="Error message" />);
    expect(screen.queryByText('Help text')).not.toBeInTheDocument();
  });

  it('should render left icon', () => {
    render(<Input leftIcon={<span data-testid="left-icon">🔍</span>} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('should render right icon', () => {
    render(<Input rightIcon={<span data-testid="right-icon">✓</span>} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should accept custom className', () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should handle type attribute', () => {
    const { container } = render(<Input type="password" />);
    const input = container.querySelector('input[type="password"]');
    expect(input).toBeInTheDocument();
  });

  it('should generate unique id if not provided', () => {
    const { container: container1 } = render(<Input label="Field 1" />);
    const { container: container2 } = render(<Input label="Field 2" />);
    
    const input1 = container1.querySelector('input');
    const input2 = container2.querySelector('input');
    
    expect(input1?.id).not.toBe(input2?.id);
  });

  it('should use provided id', () => {
    const { container } = render(<Input id="custom-id" label="Test" />);
    const input = container.querySelector('#custom-id');
    expect(input).toBeInTheDocument();
  });
});
