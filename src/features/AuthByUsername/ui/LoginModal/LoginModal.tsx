import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { useTranslation } from 'react-i18next';
import {FC, Suspense} from 'react'
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

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
          <Suspense fallback={<Loader/>}>
            <LoginFormAsync />
          </Suspense>
      </Modal>
     );
}