import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { getArticleByCategoryAndId } from '../../helpers/articleHelper';
import type { RootState, Article as ArticleType } from '../../types';

interface ArticleElementProps {
    article: ArticleType;
}

const ArticleElement: React.FC<ArticleElementProps> = ({ article }) => {
    const { title, published_date, author = null, trail_text, description, url, source, sub_source: subSource } = article;
    const mediaFiles = article.media_files?.length ? article.media_files : null;
    const titlePlaceHolderImage = article.headline_placeholder_image;
    const titleImage = mediaFiles ? (mediaFiles[0]?.url ? mediaFiles[0].url : titlePlaceHolderImage) : titlePlaceHolderImage;
    const publicshedDate = published_date ? (DateTime.fromSQL(published_date)).toFormat('LLL dd, yyyy') : null;

    let newMediaContent = mediaFiles && mediaFiles.length > 1 ? mediaFiles.slice(1) : [];

    return (
        <article className="article">
            <h2>{title}</h2>
            <p>
                <small>{publicshedDate}</small><br />
                <small>Author: {author?.name}</small> <br />
                (<small>{`${subSource ? `${subSource.name}/` : ''}${source?.name}`}</small>)
            </p>
            <div className="headline" style={{ background: `url(${titleImage})` }}></div>
            <p className="intro-text"> {trail_text} </p>
            <p>{description}</p>
            {
                newMediaContent?.length ? newMediaContent.map((mediaFile, index) => {
                    const { url, caption } = mediaFile;
                    return (
                        <figure key={index}>
                            <img src={url} alt={caption ? caption : 'Media file'} />
                            <figcaption>{caption}</figcaption>
                        </figure>
                    );
                }) : null
            }
            {
                url ? <p><a href={url} target="_blank" rel="noreferrer">{title}</a></p> : null
            }
        </article>
    );
};

const Article: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const article = useSelector((state: RootState) => {
        return getArticleByCategoryAndId(state.article.articles, category || '', id || '');
    });

    return (
        <main className="main-article" role="main">
            {
                article ? (
                    <ArticleElement article={article} />
                ) : (
                    <div className="artilce-not-found">
                        <p>Article not found</p>
                    </div>
                )
            }
        </main>
    );
};

export default Article;
