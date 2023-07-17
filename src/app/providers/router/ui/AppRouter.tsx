import Spinner from 'shared/ui/Spinner/Spinner'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
        <Routes>
            {
                Object.values(routeConfig).map(({element, path}) => (
                    <Route 
                        key={path} 
                        element={element} 
                        path={path} />
                ))
            }
        </Routes>
    </Suspense>
  )
}

export default AppRouter