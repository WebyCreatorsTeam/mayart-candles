import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBarDashboard from './NavBarDashboard/NavBarDashboard';

const LayoutDashboard: FC = () => {
    return (
        <div className="dashboard"
        >
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