import React from 'react'
import { Switch } from '@mui/material'
import { Brightness2Outlined, WbSunnyOutlined } from '@mui/icons-material'
import style from './Header.module.css'

export default function Header({theme, toggleTheme}) {
  return (
    <header className={style.header}>
        <h1 className={style.title}>GitHub Users</h1>
        <div className={style.toggleTheme}>
          <label>{theme === 'light' ? <WbSunnyOutlined fontSize='medium'/> : <Brightness2Outlined/>}</label>
          <Switch onChange={toggleTheme} checked = {theme === 'dark'}/>
        </div>
    </header>
  )
}
