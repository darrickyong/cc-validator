import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ValidatorForm from "../features/ValidatorForm/components";
import { QueryClient, QueryClientProvider } from "react-query";

const qc = new QueryClient();

test("Renders the form page", () => {
  render(
    <QueryClientProvider client={qc}>
      <ValidatorForm />
    </QueryClientProvider>
  );
  const header = screen.getByText(/Credit Card Validator/i);
  expect(header).toBeInTheDocument();
});

test("Renders the initial input", () => {
  render(
    <QueryClientProvider client={qc}>
      <ValidatorForm />
    </QueryClientProvider>
  );
  const input = screen.getByPlaceholderText(
    "Enter a credit card number to validate"
  );

  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("");
});

test("Input can be modified", () => {
  render(
    <QueryClientProvider client={qc}>
      <ValidatorForm />
    </QueryClientProvider>
  );
  const input = screen.getByPlaceholderText(
    "Enter a credit card number to validate"
  );

  const value = "4417123456789113";

  fireEvent.change(input, {
    target: {
      value,
    },
  });

  expect(input).toHaveValue("4417123456789113");
});
