export interface User {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
}

export interface MediaFile {
  url?: string;
  caption?: string;
}

export interface ArticleSource {
  id: number;
  name: string;
}

export interface ArticleCategory {
  id: number;
  name: string;
}

export interface ArticleAuthor {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  category?: ArticleCategory;
  published_date?: string;
  author?: ArticleAuthor;
  trail_text?: string;
  description?: string;
  url?: string;
  source?: ArticleSource;
  sub_source?: ArticleSource;
  media_files?: MediaFile[];
  headline_placeholder_image?: string;
}

export interface ArticlesMap {
  [category: string]: Article[];
}

export interface UserPrefrence {
  source_ids?: number[];
  author_ids?: number[];
  category_ids?: number[];
}

export interface DropdownOption {
  label: string;
  value: number;
}

export interface AuthState {
  token: string | null;
  user: User;
}

export interface ArticleState {
  articles: ArticlesMap;
}

export interface ArticleCategoryState {
  articleCategories: ArticleCategory[];
}

export interface ArticleAuthorState {
  articleAuthors: ArticleAuthor[];
}

export interface ArticleSourceState {
  articleSources: ArticleSource[];
}

export interface UserPrefrenceState {
  userPrefrence: UserPrefrence;
}

export interface RootState {
  auth: AuthState;
  article: ArticleState;
  articleCategory: ArticleCategoryState;
  articleAuthor: ArticleAuthorState;
  articleSource: ArticleSourceState;
  userPrefrence: UserPrefrenceState;
}
