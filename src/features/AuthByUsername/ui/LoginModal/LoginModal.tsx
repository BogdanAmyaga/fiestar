import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { useTranslation } from 'react-i18next';
import {FC} from 'react'
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = (props) => {
 const { 
    className, 
    isOpen,
    onClose } = props; 
 const { t } = useTranslation(); 
 return (
      <Modal 
        className={classNames(cls.LoginModal, {}, [className])} 
        onClose={onClose} 
        isOpen={isOpen} 
        lazy>
        <LoginForm />
      </Modal>
     );
}