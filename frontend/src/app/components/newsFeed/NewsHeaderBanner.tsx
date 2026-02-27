import { getArticleUiBlockData } from '../../helpers/articleHelper';
import type { Article } from '../../types';

interface NewsHeaderBannerProps {
    article: Article;
}

const NewsHeaderBanner: React.FC<NewsHeaderBannerProps> = ({ article }) => {
    const { title, url, titleImage } = getArticleUiBlockData(article);

    return (
        <section className="latest-news">
            <div
                className="headline"
                style={{ background: `url(${titleImage})` }}
            >
                <p>Latest News</p>
                <a href={url} target="_blank" rel="noreferrer">
                    <h1>{title}</h1>
                </a>
            </div>
        </section>
    );
};

export default NewsHeaderBanner;
