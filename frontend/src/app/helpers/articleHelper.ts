import type { Article, ArticlesMap } from '../types';

interface ArticleUiBlockData {
  title: string;
  url: string;
  titleImage: string | undefined;
  publishedDate: string | undefined;
  source: Article['source'];
  subSource: Article['sub_source'];
}

/**
 * Get article block ui related data
 */
export const getArticleUiBlockData = (article: Article): ArticleUiBlockData => {
    const { id, title, category, published_date, source, sub_source } = article;
    const categoryName = category?.name?.toLowerCase();
    const url = getArticleUrl(categoryName, id);
    const mediaFiles = article.media_files?.length ? article.media_files : null;
    const titlePlaceHolderImage = article.headline_placeholder_image;
    const titleImage = mediaFiles ? (mediaFiles[0]?.url ? mediaFiles[0].url : titlePlaceHolderImage) : titlePlaceHolderImage;

    return {
        title,
        url,
        titleImage,
        publishedDate: published_date,
        source,
        subSource: sub_source
    };
};

/**
 * Get article uri
 */
export const getArticleUrl = (category: string | undefined, id: number): string => {
    return `/article/${category}/${id}`;
};

/**
 * Get article by matching category and id
 */
export const getArticleByCategoryAndId = (
  articles: ArticlesMap,
  category: string,
  id: string
): Article | null => {
    if (!articles || !Object.keys(articles) || !articles[category]) {
        return null;
    }
    const categoryArticles = articles[category];

    for (let i = 0; i < categoryArticles.length; i++) {
        const article = categoryArticles[i];
        const { id: articleId } = article;
        if (String(id) === String(articleId)) {
            return article;
        }
    }

    return null;
};
