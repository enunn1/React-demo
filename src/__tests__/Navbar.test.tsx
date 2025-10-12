import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
   beforeEach(() => {
    render(<Navbar />);
  });

  it("renders the logo", () => {
    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("contains the theme toggle button", () => {
    const desktopToggle = screen.getByTestId("desktop-toggle");
    const mobileToggle = screen.getByTestId("mobile-toggle");
    expect(desktopToggle).toBeInTheDocument();
    expect(mobileToggle).toBeInTheDocument();
  });
});
