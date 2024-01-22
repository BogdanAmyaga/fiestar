import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Декортатор для сторибука, обертка для компонентов, отвечает за роуты
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
