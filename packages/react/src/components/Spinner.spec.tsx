import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner.js';

describe('Spinner', () => {
  it('should render spinner', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should have loading aria-label', () => {
    render(<Spinner />);
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });

  it('should render with small size', () => {
    const { container } = render(<Spinner size="small" />);
    const spinner = container.querySelector('.w-4');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with medium size (default)', () => {
    const { container } = render(<Spinner size="medium" />);
    const spinner = container.querySelector('.w-8');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with large size', () => {
    const { container } = render(<Spinner size="large" />);
    const spinner = container.querySelector('.w-12');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with blue color (default)', () => {
    const { container } = render(<Spinner color="blue" />);
    const spinner = container.querySelector('.border-blue-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with red color', () => {
    const { container } = render(<Spinner color="red" />);
    const spinner = container.querySelector('.border-red-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with green color', () => {
    const { container } = render(<Spinner color="green" />);
    const spinner = container.querySelector('.border-green-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with purple color', () => {
    const { container } = render(<Spinner color="purple" />);
    const spinner = container.querySelector('.border-purple-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with gray color', () => {
    const { container } = render(<Spinner color="gray" />);
    const spinner = container.querySelector('.border-gray-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with yellow color', () => {
    const { container } = render(<Spinner color="yellow" />);
    const spinner = container.querySelector('.border-yellow-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with indigo color', () => {
    const { container } = render(<Spinner color="indigo" />);
    const spinner = container.querySelector('.border-indigo-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with pink color', () => {
    const { container } = render(<Spinner color="pink" />);
    const spinner = container.querySelector('.border-pink-600');
    expect(spinner).toBeInTheDocument();
  });

  it('should accept custom className', () => {
    const { container } = render(<Spinner className="custom-class" />);
    const spinner = container.querySelector('.custom-class');
    expect(spinner).toBeInTheDocument();
  });

  it('should have spinning animation', () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should have sr-only text for accessibility', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
