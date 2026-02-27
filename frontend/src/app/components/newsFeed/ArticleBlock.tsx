import { DateTime } from 'luxon';
import { getArticleUiBlockData } from '../../helpers/articleHelper';
import type { Article } from '../../types';

interface ArticleBlockProps {
    article: Article;
    articleNumber: number;
}

const ArticleBlock: React.FC<ArticleBlockProps> = ({ article, articleNumber }) => {
    const { title, url, titleImage, publishedDate, source, subSource } = getArticleUiBlockData(article);
    const publicshedDate = publishedDate ? (DateTime.fromSQL(publishedDate)).toFormat('LLL dd, yyyy') : null;

    return (
        <div className={`story story-${articleNumber}`} key={articleNumber}>
            <a href={url} target="_blank" rel="noreferrer">
                <div className="story-img">
                    <img src={titleImage} alt={title} />
                </div>
                <div className="story-headline">
                    <h3>{title}</h3>
                    <p className="source">{`${subSource ? `${subSource.name}/` : ''}${source?.name}`}</p>
                    <p className="exact-time">{publicshedDate}</p>
                </div>
            </a>
        </div>
    );
};

export default ArticleBlock;
