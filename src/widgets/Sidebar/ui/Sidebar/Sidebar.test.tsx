import React from "react";
import { Sidebar } from "./Sidebar";
import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar Component', () => {
    test('render correctly', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });  
    test('render with toggle collapsed', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });  
   
});