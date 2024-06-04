import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../views/Dashboard/style/global.module.scss";

const LayoutDashboard: FC = () => {
    return (
        <div className="background">
            <nav className='nav'>
                <Link className="navBar" to="/dashboard"> {/* Need to check how NavLink works */}
                    ראשי
                </Link>
                <Link className="navBar" to="/dashboard/categories">
                    קטיגוריות
                </Link>
                <Link className="navBar" to="/dashboard">
                    עמוד תשלום
                </Link>
                <Link className="navBar" to="/dashboard">
                    אודות
                </Link>
                <Link className="navBar" to="/dashboard/admins">
                    משתמשים
                </Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutDashboard;
