import React from "react";
import { Button, ThemeButton } from "./Button";
import { render, screen } from '@testing-library/react';

describe('Button Component', () => {
    test('render correctly', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });  
    test('render with theme CLEAR', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });  
});