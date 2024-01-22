import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, EButtonSize, EButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: EButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
};
export const BackroundTheme = Template.bind({});
BackroundTheme.args = {
    children: 'Text',
    theme: EButtonTheme.BACKGROUND,
};
export const BackroundInvertedTheme = Template.bind({});
BackroundTheme.args = {
    children: 'Text',
    theme: EButtonTheme.BACKGROUND_INVERTED,
};

export const SizeMWithSquare = Template.bind({});
SizeMWithSquare.args = {
    children: '+',
    square: true,
    size: EButtonSize.M,
};
export const SizeLWithSquare = Template.bind({});
SizeLWithSquare.args = {
    children: '+',
    square: true,
    size: EButtonSize.L,
};
export const SizeXLWithSquare = Template.bind({});
SizeXLWithSquare.args = {
    children: '+',
    square: true,
    size: EButtonSize.XL,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
