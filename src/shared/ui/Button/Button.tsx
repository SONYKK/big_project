import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    ...other

  } = props
  return (
    <button type='button' className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  )
}
