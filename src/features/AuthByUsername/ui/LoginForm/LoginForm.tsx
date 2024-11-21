import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import {FC, memo, useCallback} from 'react'
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export interface LoginFormProps {
 className?: string;
}

const LoginForm:FC<LoginFormProps> = memo((props) => {
 const { className } = props; 
 const { t } = useTranslation(); 
 const dispatch = useDispatch();

 const {username, password, isLoading, error} = useSelector(getLoginState)

 const onChangeUsername = useCallback(
   (value: string) => {
     dispatch(loginActions.setUsername(value))
   },
   [dispatch],
 );

 const onChangePassword = useCallback(
   (value: string) => {
     dispatch(loginActions.setPassword(value))
   },
   [dispatch],
 );
 const onLoginClick = useCallback(
   () => {
     // асинхронный action async thunk
     dispatch(loginByUsername({username, password}))
   },
   [dispatch, username, password],
 );

 return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')}/>
        {
          error && <Text text={error} theme={TextTheme.ERROR}/>
        }
        <Input className={cls.input} placeholder={t('Введите логин')} onChange={onChangeUsername} value={username} />
        <Input className={cls.input} placeholder={t('Введите пароль')} onChange={onChangePassword} value={password} />
        <Button className={cls.loginBtn} theme={EButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
            {t('Войти')}
        </Button>
      </div>
     );
})

export default LoginForm;