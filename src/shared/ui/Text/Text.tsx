import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { useTranslation } from 'react-i18next';
import {FC} from 'react'


export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 theme?: TextTheme;
}

export const Text:FC<TextProps> = (props) => {
 const { 
    className, 
    title, 
    text, 
    theme = TextTheme.PRIMARY } = props; 
 const { t } = useTranslation(); 
 return (
      <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
     );
}