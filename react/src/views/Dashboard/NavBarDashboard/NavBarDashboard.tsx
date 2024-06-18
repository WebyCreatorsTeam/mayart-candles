import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive'

const dashboardLinks = [
    { url: "/dashboard", title: "ראשי" },
    { url: "/dashboard/categories", title: "קטגוריות" },
    { url: "/dashboard/payment", title: "עמוד תשלום" },
    { url: "/dashboard/about", title: "אודות" },
    { url: "/dashboard/admins", title: "משתמשים" },
]

const NavBarDashboard:FC = () => {
    const desktop = useMediaQuery({ query: '(min-width: 768px)' })
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='navigation-bar'>
            {!desktop && (
                <button onClick={() => {
                    setToggleMenu(!toggleMenu)
                }}>
                    {toggleMenu ? <CloseIcon fontSize="large" /> : <MenuIcon />}
                </button>
            )}
            {(toggleMenu || desktop) && (
                <div className='navigation-bar__all-links' dir='rtl'>
                    {dashboardLinks.map((li, idx) => (
                        <NavLink
                            onClick={() => {
                                !desktop && setToggleMenu(false)
                            }}
                            key={idx}
                            className={({ isActive }) =>
                                isActive ? "navigation-bar__link active" : "navigation-bar__link"
                            } to={li.url} end>
                            {li.title}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBarDashboard