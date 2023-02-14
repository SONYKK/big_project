import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
  return (
    <Link to={to} {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
}
