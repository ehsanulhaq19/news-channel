import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/navbar/Navbar';
import { fetchArticleCategoriesAction } from '../redux/actions/articleCategory';
import { fetchArticleAuthorsAction } from '../redux/actions/articleAuthor';
import { fetchArticleSourcesAction } from '../redux/actions/articleSource';
import { getUserPrefrenceItemAction } from '../redux/actions/userPrefrence';
import type { RootState } from '../types';
import type { AppDispatch } from '../redux/store';

const UserLayout: React.FC = () => {
    const navigate = useNavigate();
    const authUserToken = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (navigate && !authUserToken) {
            navigate('/login');
        }
    }, [navigate, authUserToken]);

    useEffect(() => {
        if (dispatch && authUserToken) {
            dispatch(fetchArticleCategoriesAction());
            dispatch(fetchArticleAuthorsAction());
            dispatch(fetchArticleSourcesAction());
            dispatch(getUserPrefrenceItemAction());
        }
    }, [dispatch, authUserToken]);

    return (
        <div className="user-layout">
            <div className="content-wrap">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default UserLayout;
