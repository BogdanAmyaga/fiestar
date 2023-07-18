import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import {FC} from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
 className?: string;
}


export const LanguageSwitcher:FC<LanguageSwitcherProps> = (props) => {
 const { className } = props; 
 const { t, i18n } = useTranslation();
  
 const toggle = () => {
   i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru' )
 }
 return (
      <Button 
        theme={ThemeButton.CLEAR} 
        onClick={toggle} 
        className={classNames(cls.LanguageSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
     );
}