import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss';
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button data-testid='sidebar-toggle' onClick={() => {
        setCollapsed(prev => !prev)
      }}>Set collapsed</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher className='svg'/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
