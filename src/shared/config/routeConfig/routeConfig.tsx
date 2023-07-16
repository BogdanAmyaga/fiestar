import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from "react-router-dom"

// перечисление роутов
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}
// пути роутов
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about',
}
// конфигурация путей - какой путь и какой элемент нужно отображать
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
}