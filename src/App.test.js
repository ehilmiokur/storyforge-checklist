import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StoryForge title', () => {
  render(<App />);
  const titleElement = screen.getByText(/StoryForge Setup Checklist/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders phase 0 section', () => {
  render(<App />);
  const phaseElement = screen.getByText(/Open Your Accounts/i);
  expect(phaseElement).toBeInTheDocument();
});

test('renders progress bar', () => {
  render(<App />);
  const progressElement = screen.getByText(/steps done/i);
  expect(progressElement).toBeInTheDocument();
});