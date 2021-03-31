import { fireEvent, getByPlaceholderText, getByText, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import NewLeadForm from './NewLeadForm';

test('renders NewLeadForm without crashing', () => {
  render(<NewLeadForm />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<NewLeadForm />);
  expect(asFragment()).toMatchSnapshot();
})
