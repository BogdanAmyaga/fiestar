import 'app/styles/index.scss';
import { Story } from '@storybook/react';

// Деократор для сторибука, обертка для компонентов, отвечает за глобальные стили
export const StyleDecorator = (story: () => Story) => story();
