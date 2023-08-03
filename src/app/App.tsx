import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import Spinner from 'shared/ui/Spinner/Spinner';

const App = () => {

    const {theme} = useTheme();

    // тестовый для работы с ошибкой
    // useEffect(() => {
    //     if(Math.random() < 0.5)
    
    //         throw new Error();
    // }, []);
    

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Spinner />}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;