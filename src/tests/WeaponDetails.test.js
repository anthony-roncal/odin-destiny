import { React } from "react";
import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import WeaponDetails from "../components/WeaponDetails";

describe("Weapon Details", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<WeaponDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays tooltip on perk hover", async () => {
    render(<WeaponDetails />);
    const user = userEvent.setup();
    const perk = screen.getByTestId('perk1');
    
    await user.hover(perk);
    let tooltipName = screen.queryByText('Volatile Launch');
    let tooltipSlot = screen.getByText('Basic Launcher Barrel');
    expect(perk).toBeInTheDocument();
    expect(tooltipName).toBeInTheDocument();
    expect(tooltipSlot).toBeInTheDocument();
  });
});
