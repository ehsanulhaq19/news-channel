import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticlesAction } from '../../redux/actions/article';
import ArticleSection from '../../components/newsFeed/ArticleSection';
import NewsHeader from '../../components/newsFeed/NewsHeader';
import type { RootState, Article, ArticlesMap } from '../../types';
import type { AppDispatch } from '../../redux/store';

const NewsFeed: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [recentArticles, setRecentArticles] = useState<Article[]>();
    const [newsFeedArticles, setNewsFeedArticles] = useState<ArticlesMap>();

    const articles = useSelector((state: RootState) => state.article.articles);

    useEffect(() => {
      dispatch(fetchArticlesAction());
    }, [dispatch]);

    useEffect(() => {
      if (Object.keys(articles)) {
        const rArticles: Article[] = [];
        const nfArticles: ArticlesMap = {};
        for (const categoryName in articles) {
          if (categoryName === 'recent') {
            rArticles.push(...articles[categoryName]);
          } else {
            nfArticles[categoryName] = articles[categoryName];
          }
        }

        setRecentArticles(rArticles);
        setNewsFeedArticles(nfArticles);
      }
    }, [articles]);

    return (
        <div id="top" className="home-screen">
            <main className="main" role="main">
              <NewsHeader articles={recentArticles} />
              <ArticleSection articles={newsFeedArticles} />
            </main>
        </div>
    );
};

export default NewsFeed;
