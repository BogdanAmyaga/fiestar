import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';


const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </Suspense>
    </div>
  )
}

export default App