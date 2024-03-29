import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
 className?: string;
}

export const LanguageSwitcher:FC<LanguageSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={EButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
