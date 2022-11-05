import {test, describe, it, expect} from "@jest/globals";
import Home from "@/pages/index";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

beforeEach(() => {
    render(<Home />);
});

describe('loads and displays logo', () => {
    it('renders the logo', () => {

        const logo = screen.getByAltText('logo');

        expect(logo).toBeInTheDocument();
    });

    it('button is present', () => {
        const button = screen.getByText('Click me');

        expect(button).toBeInTheDocument();
    });

    it('should increase the value when button is clicked', async () => {

        const button = screen.getByText('Click me');
        const textVal = screen.getByTitle('num');

        expect(textVal.innerHTML).toBe("0");
        await userEvent.click(button);

        expect(textVal.innerHTML).toBe("1");
    });
});