import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink 
                    theme={AppLinkTheme.PRIMARY} 
                    to={'/'} 
                    className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.INVERTED} 
                    to={'/about'} 
                    className={cls.about}>
                    {t('О сайте')}
                </AppLink>
            </div>

        </div>
    )
}

export default Navbar