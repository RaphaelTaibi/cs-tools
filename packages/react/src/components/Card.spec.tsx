/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render card with children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('should render with default variant', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstElementChild as HTMLElement | null;
    expect(card).not.toBeNull();
    if (card) {
      expect(card).toHaveClass('cs-bg-primary');
    }
  });

  it('should render with elevated variant', () => {
    const { container } = render(<Card variant="elevated">Content</Card>);
    const card = container.firstElementChild as HTMLElement | null;
    expect(card).not.toBeNull();
    if (card) {
      expect(card).toHaveClass('cs-card-elevated');
    }
  });

  it('should render with outlined variant', () => {
    const { container } = render(<Card variant="outlined">Content</Card>);
    const card = container.firstElementChild as HTMLElement | null;
    expect(card).not.toBeNull();
    if (card) {
      expect(card).toHaveClass('cs-card-outlined');
    }
  });

  it('should render with no padding', () => {
    const { container } = render(<Card padding="none">Content</Card>);
    expect(container.querySelector('.p-3')).toBeNull();
    expect(container.querySelector('.p-6')).toBeNull();
    expect(container.querySelector('.p-8')).toBeNull();
  });

  it('should render with sm padding', () => {
    const { container } = render(<Card padding="sm">Content</Card>);
    const content = container.querySelector('.p-3');
    expect(content).toBeInTheDocument();
  });

  it('should render with md padding (default)', () => {
    const { container } = render(<Card padding="md">Content</Card>);
    const content = container.querySelector('.p-6');
    expect(content).toBeInTheDocument();
  });

  it('should render with lg padding', () => {
    const { container } = render(<Card padding="lg">Content</Card>);
    const content = container.querySelector('.p-8');
    expect(content).toBeInTheDocument();
  });

  it('should render header when provided', () => {
    render(<Card header="Card Header">Content</Card>);
    expect(screen.getByText('Card Header')).toBeInTheDocument();
  });

  it('should render footer when provided', () => {
    render(<Card footer="Card Footer">Content</Card>);
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('should render header and footer together', () => {
    render(
      <Card header="Header" footer="Footer">
        Content
      </Card>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('should accept custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    const card = container.firstElementChild as HTMLElement | null;
    expect(card).not.toBeNull();
    if (card) {
      expect(card).toHaveClass('custom-class');
    }
  });

  it('should accept HTML attributes', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { container } = render(
      <Card data-testid="custom-card">Content</Card>
    );
    expect(screen.getByTestId('custom-card')).toBeInTheDocument();
  });
});
