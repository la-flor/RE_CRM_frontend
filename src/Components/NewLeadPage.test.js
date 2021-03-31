import { render } from '@testing-library/react';
import NewLeadPage from './NewLeadPage';

test('renders NewLeadPage without crashing', () => {
  render(<NewLeadPage />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<NewLeadPage />);
  expect(asFragment()).toMatchSnapshot();
})