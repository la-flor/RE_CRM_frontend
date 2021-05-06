import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import NewLeadForm from './NewLeadForm';

test('renders NewLeadForm without crashing', () => {
  render(<NewLeadForm />);
});

test('it matches snapshot', () => {
  const { asFragment } = render(<NewLeadForm />);
  expect(asFragment()).toMatchSnapshot();
})

it("calls the onSubmit function when clicked", async () => {
  const mockSubmitOfferToAPI = jest.fn();
  const { getByTestId } = render(<NewLeadForm submitOfferToAPI={mockSubmitOfferToAPI} />);

  const submitBtn = getByTestId("NewLeadForm-submit-btn");

  await act(async () => {
    fireEvent.click(submitBtn);
  })

  expect(mockSubmitOfferToAPI).toHaveBeenCalled();
})


it("allows submission of all data", async () => {
  const mockSubmitOfferToAPI = jest.fn();
  const { getByTestId } = render(<NewLeadForm submitOfferToAPI={mockSubmitOfferToAPI} />);

  const firstInput = getByTestId("first");
  const lastInput = getByTestId("last");
  const emailInput = getByTestId("email");
  const phoneInput = getByTestId("phone");
  const addressInput = getByTestId("street");
  const cityInput = getByTestId("city");
  const stateInput = getByTestId("state_region");
  const zipcodeInput = getByTestId("zipcode");

  expect(firstInput).toBeInTheDocument();
  expect(lastInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();
  expect(cityInput).toBeInTheDocument();
  expect(stateInput).toBeInTheDocument();
  expect(zipcodeInput).toBeInTheDocument();

  await act(async () => {
    fireEvent.change(firstInput, { target: { value: "firstName" } });
    fireEvent.change(lastInput, { target: { value: "lastName" } });
    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(phoneInput, { target: { value: "2813308004" } });
    fireEvent.change(addressInput, { target: { value: "123 Testing Lane" } });
    fireEvent.change(cityInput, { target: { value: "Testingville" } });
    fireEvent.change(stateInput, { target: { value: "California" } });
    fireEvent.change(zipcodeInput, { target: { value: "90210" } });
  })

  expect(firstInput.value).toBe("firstName");
  expect(lastInput.value).toBe("lastName");
  expect(emailInput.value).toBe("test@email.com");
  expect(phoneInput.value).toBe("2813308004");
  expect(addressInput.value).toBe("123 Testing Lane");
  expect(cityInput.value).toBe("Testingville");
  expect(stateInput.value).toBe("California");
  expect(zipcodeInput.value).toBe("90210");

  const submitBtn = getByTestId("NewLeadForm-submit-btn");

  await act(async () => {
    fireEvent.click(submitBtn);
  })

  expect(mockSubmitOfferToAPI).toHaveBeenCalled();

  const successAlert = getByTestId("successAlert");
  expect(successAlert).toHaveTextContent("Updated successfully.")
});