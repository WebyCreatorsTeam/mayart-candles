import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBarDashboard from './NavBarDashboard/NavBarDashboard';

const LayoutDashboard: FC = () => {
    const location = useLocation();

    return (
        <div className={location.pathname === "/dashboard"  ? 'bodyDashboard' : "authDashboard"}>
            <div className="background">
                <NavBarDashboard/>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default LayoutDashboard;

/*|| location.pathname === "/dashboard/categories"*/