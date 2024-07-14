import { createContext, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className='App' id={theme}>
         <Header theme={theme} toggleTheme={toggleTheme}/>
         <Main/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
