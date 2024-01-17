import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// Обертка для компонентов сторибука, отвечает за тему
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
