import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from './components/Spinner/Spinner';
import useTheme from './theme/useTheme';
import { classNames } from './components/helpers/classNames/classNames';


const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
  )
}

export default App