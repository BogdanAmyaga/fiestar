import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
