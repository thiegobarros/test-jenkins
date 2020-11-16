import { render, screen } from '@testing-library/react';
import App from './App';

test('teste1', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn teste/i);
  expect(linkElement).toBeInTheDocument();
});

test('teste2', () => {
  const result = render(<App />);
  const someElement = result.container.querySelector('#teste');
  expect(someElement).toBeInTheDocument();
});
