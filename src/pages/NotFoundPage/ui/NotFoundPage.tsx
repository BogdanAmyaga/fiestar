import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import {FC} from 'react'

interface NotFoundPageProps {
 className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = (props) => {
    const { className } = props; 
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>404</div>
    );
}