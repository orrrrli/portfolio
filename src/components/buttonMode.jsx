import {useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


function App() {
  const [header, setHeader] = useState('false');
  const scrollHeader = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'light';
    } else {
      return 'dark';
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }
  , []);

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className= {header ? "sticky top-0 h-20 mx-auto max-w-3xl px-5 mb-5 flex-col gap-10 dark:bg-slate-800 bg-white" :
     "h-20 mx-auto max-w-3xl px-5"}>
    <div className="grid grid-cols-2 gap-4 place-content-between items-center py-5"> 
    <h3 className="text-xl dark:text-slate-300 dark:font-semibold font-semibold">Portfolio</h3> 
      <button
        className=" px-2 py-1.5 rounded justify-self-end
        hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-900"
        onClick={handleChangeTheme}
      >
         {theme === 'light' ? <FaMoon size={25} /> : <FaSun size={25} />}
      </button>
      </div>
    </div>
  );
}

export default App;
