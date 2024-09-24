import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { useTranslation } from 'react-i18next';
import {FC, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react'

// Omit - конструкция, позволяющая забрать из типа все пропсы, но исключить ненужные
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
 className?: string;
 value?: string;
 onChange?: (value: string) => void;
 placeholder?: string; 
}

export const Input:FC<InputProps> = memo((props) => {

    const ref = useRef<HTMLInputElement>();

 const { className, value, onChange, type, placeholder, autoFocus } = props; 
 const { t } = useTranslation(); 

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }

    useEffect(() => {
        if(autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus])
    

 return (
    <div className={cls.InputWrapper}>
        {placeholder && (
        <div className={cls.placeholder}>
            {placeholder}
        </div>)}
        <input 
            ref={ref}
            type={type} 
            onChange={onChangeHandler}
            value={value} 
            className={classNames(cls.Input, {}, [className])} 
            onFocus={onFocus}
            onBlur={onBlur}
            />
    </div>

    );
})