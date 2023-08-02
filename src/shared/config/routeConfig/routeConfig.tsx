import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from "react-router-dom"

// перечисление роутов
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}
// пути роутов
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about',
    [AppRoutes.NOT_FOUND] : '/*',
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    },
}