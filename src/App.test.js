import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('teste1', () => {
  const result = render(<App />);
  const someElement = result.container.querySelector('#teste');
  expect(someElement).toBeInTheDocument();
});
