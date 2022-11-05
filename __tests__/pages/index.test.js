import {test, describe, it, expect} from "@jest/globals";
import Home from "@/pages/index";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('loads and displays logo', () => {
    it('renders the logo', () => {
        render(<Home />);

        const logo = screen.getByAltText('logo');

        expect(logo).toBeInTheDocument();
    });
});