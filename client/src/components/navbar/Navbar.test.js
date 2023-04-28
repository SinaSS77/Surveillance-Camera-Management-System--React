import React from "react";
import axios from "axios";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock("axios", () => ({
  post: jest.fn(),
}));

test("should call handleLogout when Logout button is clicked", async () => {
  const handleLogout = jest.fn();
  const { getByText } = render(
    <Navbar email="a" history={{ push: jest.fn() }} />
  );
  const logoutButton = getByText("Logout");
  fireEvent.click(logoutButton);
  await waitFor(() => expect(handleLogout).toHaveBeenCalledTimes(1));
});