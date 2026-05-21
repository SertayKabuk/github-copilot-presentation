import type { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('@revealjs/react', () => ({
  Code: ({ children }: { children: ReactNode }) => <pre>{children}</pre>,
  Deck: ({ children }: { children: ReactNode }) => <div data-testid="deck">{children}</div>,
  Fragment: ({ children }: { children: ReactNode }) => <>{children}</>,
  Slide: ({ children }: { children: ReactNode }) => <section>{children}</section>,
}));

describe('App', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('renders the deck and lets the user switch languages', () => {
    render(<App />);

    expect(screen.getByTestId('deck')).toBeInTheDocument();
    expect(screen.getByText('GitHub Copilot: Token, Araçlar ve Disiplin')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'EN' }));

    expect(screen.getByText('GitHub Copilot: Tokens, Tools, and Discipline')).toBeInTheDocument();
    expect(window.localStorage.getItem('presentation.lang')).toBe('en');
  });
});
