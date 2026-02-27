import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../types';

const AuthLayout: React.FC = () => {
    const navigate = useNavigate();
    const authUserToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (navigate && authUserToken) {
            navigate('/news-feed');
        }
    }, [navigate, authUserToken]);

    return (
        <div className="auth-screen screen">
            <div className="content-left"></div>
            <div className="content-right">
                <div className="logo">
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
