import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
 className?: string;
 children?: ReactNode;
}

export const Modal:FC<ModalProps> = (props) => {
    const { className, children } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
