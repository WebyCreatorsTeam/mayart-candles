import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

interface IProtectedRoute {
    children: ReactNode
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token')

        if (!token) return navigate('/login', { replace: true })
    }, [navigate])

    return <>{children}</>
}

export default ProtectedRoute