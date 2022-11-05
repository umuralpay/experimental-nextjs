import {test, describe, it, expect} from "@jest/globals";
import Home from "@/pages/index";
import { render,screen,act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { server } from '../../__mocks__/server.js';

beforeEach(async () => {
    
   await act(async () => {
        render(<Home />);
    });
});

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

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
    it('allows user to log in', async () => {
        // Render components, perform requests, receive mocked responses.
        const div = screen.getByTestId("selam");
        expect(div.innerHTML).toBe("umuralpay")
    })
});