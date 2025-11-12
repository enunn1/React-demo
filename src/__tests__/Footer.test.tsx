import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {

   it("renders the profile picture", () => {
    render(<Footer />);
    
    // Try to find image with alt text "Ethan Nunn Profile Picture"
    const logo = screen.getByAltText(/Ethan Nunn Profile Picture/i);
    expect(logo).toBeInTheDocument();
  });
});
