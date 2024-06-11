import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBarDashboard from './NavBarDashboard/NavBarDashboard';

const LayoutDashboard: FC = () => {
<<<<<<< Updated upstream
  return (
    <div className="background">
      <nav className="nav">
        <Link className="navBar" to="/dashboard">
          {" "}
          {/* Need to check how NavLink works */}
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
  );
};
=======
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
>>>>>>> Stashed changes

export default LayoutDashboard;

/*|| location.pathname === "/dashboard/categories"*/