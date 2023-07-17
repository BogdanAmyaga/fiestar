import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {FC, useState} from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface SidebarProps {
 className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
 const { className } = props; 
 const [collapsed, setCollapsed] = useState<boolean>(false);
 const onToggle = () => {
    setCollapsed((state) => !state)
 }
 return (
      <div 
        className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
     );
}