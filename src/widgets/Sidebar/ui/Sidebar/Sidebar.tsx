import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {FC, useState} from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
 className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { className } = props; 
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const { t } = useTranslation();
    
    const onToggle = () => {
        setCollapsed((state) => !state);
    };
    return (
        <div 
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>{t('Переключить')}</Button>
            <div className={cls.switchers}>
                <LanguageSwitcher />
                <ThemeSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};