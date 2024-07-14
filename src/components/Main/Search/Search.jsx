import React from 'react'
import style from '../Main.module.css';
import SearchBar from '@mkyy/mui-search-bar';

export default function Search({handleSearch, setTextValue, textValue}) {
  return (
    <SearchBar 
      className={style.searchBar}
      placeholder="....."
      autoFocus
      value={textValue}
      onChange={newValue => setTextValue(newValue)}
      onRequestSearch={() => handleSearch(textValue)}
      classes={{input: style.customFont}}
      onKeyUp={(event) => { onChange(event) }}
      onPaste={(event) => { onChange(event) }}
     /> 
  )
}
