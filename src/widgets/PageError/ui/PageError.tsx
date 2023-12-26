import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import {FC} from 'react';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps {
 className?: string;
}

export const PageError:FC<PageErrorProps> = (props) => {
    const { className } = props; 
    const { t } = useTranslation(); 

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={classNames(cls.title, {}, [])}>
                {t('Произошла ошибка')}
            </p>
            <Button onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};