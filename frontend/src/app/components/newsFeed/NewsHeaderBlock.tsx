import { getArticleUiBlockData } from '../../helpers/articleHelper';
import type { Article } from '../../types';

interface NewsHeaderBlockProps {
    article: Article;
    articleNumber: number;
}

const NewsHeaderBlock: React.FC<NewsHeaderBlockProps> = ({ article, articleNumber }) => {
    const { title, url, titleImage } = getArticleUiBlockData(article);

    return (
        <div
            className={`headline headline-${articleNumber}`}
            style={{ background: `url(${titleImage})` }}
        >
            <a href={url} target="_blank" rel="noreferrer">
                <h1>{title}</h1>
            </a>
        </div>
    );
};

export default NewsHeaderBlock;
