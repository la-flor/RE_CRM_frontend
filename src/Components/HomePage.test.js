import { render } from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage without crashing', () => {
  render(<HomePage />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
})