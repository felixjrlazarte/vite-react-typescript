import { render, screen, fireEvent, waitFor,  } from '../utils/test-utils.tsx';
import { userEvent } from "@testing-library/user-event";
import Login from "../components/Login/index.tsx";

describe("Login Component", () => {
  it("should render login component properly", () => {
    render(<Login />);

    const text = screen.getAllByText("Login");
    expect(text).toBeDefined();
  });

  it("should display the labels properly", () => {
    render(<Login />);

    const branchID = screen.findByPlaceholderText("Branch ID");
    const userName = screen.findByPlaceholderText("Username");
    const passWord = screen.findByPlaceholderText("Password");

    expect(branchID).toBeDefined();
    expect(userName).toBeDefined();
    expect(passWord).toBeDefined();
  });

  it("should trigger validations for required fields", async () => {
    render(<Login />);

    const loginButton = screen.getByTestId("login-btn");

    fireEvent.click(loginButton);

    await waitFor(async () => {
      expect(await screen.getByText("branch ID is required.")).toBeDefined();
      expect(await screen.getByText("username is required.")).toBeDefined();
      expect(await screen.getByText("password is required.")).toBeDefined();
    });
  });

  it("should display user not found error", async () => {
    render(<Login />);

    const branchId = await screen.findByPlaceholderText("Branch ID");
    await userEvent.type(branchId, "not found");

    const userName = await screen.findByPlaceholderText("Username");
    await userEvent.type(userName, "not found");

    const passWord = await screen.findByPlaceholderText("Password");
    await userEvent.type(passWord, "not found");

    fireEvent.click(screen.getByTestId("login-btn"));

    await waitFor(async () => {
      expect(await screen.getByText("User not found!!")).toBeDefined();
    });
  });
});