import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutDashboard: FC = () => {
    return (
        <>
            <nav>
                <Link to="/dashboard">
                    ראשי
                </Link>
                <Link to="/dashboard/categories">
                    קטיגוריות
                </Link>
                <Link to="/dashboard">
                    עמוד תשלום
                </Link>
                <Link to="/dashboard/about">
                    אודות
                </Link>
                <Link to="/dashboard/admins">
                    משתמשים
                </Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayoutDashboard