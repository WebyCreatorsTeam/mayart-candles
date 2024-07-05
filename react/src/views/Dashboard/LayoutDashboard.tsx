import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBarDashboard from './View/NavBarDashboard/NavBarDashboard'

const LayoutDashboard: FC = () => {
    const location = useLocation()

    return (
        <div className={`dashboard 
        ${((location.pathname.includes("/dashboard/candle")) || 
        (location.pathname === "/dashboard/about") || 
        (location.pathname === "/dashboard") || 
        (location.pathname.includes("/dashboard/categories") )) && ("dashboardMargin")}`}>
            <div className='dashboard__window'>
                <NavBarDashboard />
                <main>
                    <Outlet />
                </main>
            </div>
        </div >
    )
}

export default LayoutDashboard;