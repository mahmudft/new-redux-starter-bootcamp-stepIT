import { describe, expect, test } from "vitest";

import Navbar from "../components/Navbar"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../app/store";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "../suits/helper";

test("Test Navbar", async () => {

  const { component } = render(<BrowserRouter>
    <Provider store={store}><Navbar /></Provider></BrowserRouter>);
  screen.debug()
  expect(screen.getByText('Shopping')).toBeInTheDocument();
});

test("Test Input in Navbar", async () => {

  const { component } = render(<BrowserRouter>
    <Provider store={store}><Navbar /></Provider></BrowserRouter>);
  let input = screen.getByPlaceholderText('email')
  expect(input).toBeInTheDocument()
  await userEvent.type(input, 'someemail@gmail.com')
  expect(input).toHaveValue('someemail@gmail.com')
  screen.debug()
});