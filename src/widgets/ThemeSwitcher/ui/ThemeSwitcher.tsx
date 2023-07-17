import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {FC} from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
 const { className } = props; 

 const { toggleTheme, theme } = useTheme();

 return (
        <Button
            theme={ThemeButton.CLEAR} 
            className={classNames(cls.ThemeSwitcher, {}, [className])} 
            onClick={toggleTheme}>
                {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
        </Button>
     );
}