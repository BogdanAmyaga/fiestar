import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useLocation } from 'react-router-dom';
import cls from './PageError.module.scss';

interface PageErrorProps {
 className?: string;
}

export const PageError:FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
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
