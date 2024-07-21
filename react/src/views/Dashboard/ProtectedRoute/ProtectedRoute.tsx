import { FC, ReactNode, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';



interface IProtectedRoute {
    children: ReactNode
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
    const cookies = useMemo(() => {
        return new Cookies();
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        const token = cookies.get('token')
        if (!token) return navigate('/login', { replace: true })
    }, [cookies, navigate])

    return <>{children}</>
}

export default ProtectedRoute