import ArticleBlock from './ArticleBlock';
import type { ArticlesMap } from '../../types';

interface ArticleSectionProps {
    articles: ArticlesMap | undefined;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ articles }) => {
    return (
        <>
            {articles && Object.keys(articles)?.length ? Object.keys(articles).map((category, categoryIndex) => {
                const categoryArticles = articles[category];
                return (
                    <div key={categoryIndex}>
                        {categoryArticles?.length ? (
                            <section className={`news-section ${category.toLowerCase()}`}>
                                <h2>{category}</h2>
                                {categoryArticles.map((article, index) => (
                                    <ArticleBlock article={article} articleNumber={index + 1} key={index} />
                                ))}
                            </section>
                        ) : null}
                    </div>
                );
            }) : null}
        </>
    );
};

export default ArticleSection;
