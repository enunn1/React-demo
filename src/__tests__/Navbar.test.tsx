import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
   beforeEach(() => {
    render(<Navbar />);
  });

  it("renders the logo", () => {
    // Try to find image with alt text "Logo"
    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("contains the theme toggle button", () => {
    // Try to find toggle button for all screen lengths
    const desktopToggle = screen.getByTestId("desktop-toggle");
    const mobileToggle = screen.getByTestId("mobile-toggle");

    expect(desktopToggle).toBeInTheDocument();
    expect(mobileToggle).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    // Try to find navigation links (e.g. About, Portfolio, etc.)
    const navLinks = screen.queryAllByRole("link");
    console.log(navLinks)

    // Should find four links (3 from navbar, 1 from logo)
    expect(navLinks.length == 4).toBeTruthy();
  });

  it("renders a menu toggle button", () => {
    // Try to find button with label text "Toggle Menu"
    const menuButton = screen.queryByLabelText(/Toggle Menu/i);

    expect(menuButton).toBeTruthy();
  });
});
