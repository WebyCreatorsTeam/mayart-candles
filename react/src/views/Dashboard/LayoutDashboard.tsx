import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutDashboard: FC = () => {
    return (
        <>
            <nav>
                <Link to="/dashboard"> {/* Need to check how NavLink works*/}
                    ראשי
                </Link>
                <Link to="/dashboard">
                    קטיגוריות
                </Link>
                <Link to="/dashboard">
                    עמוד תשלום
                </Link>
                <Link to="/dashboard">
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