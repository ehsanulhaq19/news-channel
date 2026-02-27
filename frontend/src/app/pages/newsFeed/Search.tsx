import { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { useSelector } from 'react-redux';
import { convertToDropdownArray } from '../../utils/form';
import { getArticlesBySearchCollectionApi } from '../../api/article';
import ArticleBlock from '../../components/newsFeed/ArticleBlock';
import Loader from '../../components/Loader';
import type { RootState, Article, DropdownOption } from '../../types';

const RESET = 0;
const IN_PROGRESS = 1;
const COMPLETED = 2;

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedDate, setSearchDate] = useState('');
    const [articles, setArticles] = useState<Article[]>([]);
    const [selectedSources, setSelectedSources] = useState<MultiValue<DropdownOption>>([]);
    const [selectedCategories, setSelectedCategories] = useState<MultiValue<DropdownOption>>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<MultiValue<DropdownOption>>([]);
    const [searchState, setSearchState] = useState(RESET);

    const articleSources = useSelector((state: RootState) => {
        return convertToDropdownArray(state.articleSource.articleSources);
    });
    const articleAuthors = useSelector((state: RootState) => {
        return convertToDropdownArray(state.articleAuthor.articleAuthors);
    });
    const articleCategories = useSelector((state: RootState) => {
        return convertToDropdownArray(state.articleCategory.articleCategories);
    });

    const sourceChangeHandler = (data: MultiValue<DropdownOption>) => {
        setSelectedSources(data);
    };

    const categoryChangeHandler = (data: MultiValue<DropdownOption>) => {
        setSelectedCategories(data);
    };

    const authorChangeHandler = (data: MultiValue<DropdownOption>) => {
        setSelectedAuthors(data);
    };

    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchDate(e.target.value);
    };

    const submitSearchHandler = async () => {
        setSearchState(IN_PROGRESS);

        const sources = selectedSources.map(option => option.value).join(',');
        const categories = selectedCategories.map(option => option.value).join(',');
        const authors = selectedAuthors.map(option => option.value).join(',');

        getArticlesBySearchCollectionApi({
            search_string: searchText,
            source_ids: sources,
            author_ids: authors,
            category_ids: categories,
            published_date: selectedDate
        }).then(response => {
            const { data } = response;
            setArticles(data?.articles ? data.articles : []);
            setSearchState(COMPLETED);
        }).catch(() => {
            setSearchState(COMPLETED);
        });
    };

    return (
        <div className="search-page">
            <div className="search-form-container">
                <div className="form-group search-field">
                    <label htmlFor="searchText">Search</label>
                    <input className="form-control" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </div>
                <div className="container mx-0 px-0 search-option-container">
                    <div className="row py-2">
                        <div className="col-md-6">
                            <label htmlFor="firstname">Source</label>
                            <Select
                                options={articleSources}
                                isMulti
                                onChange={sourceChangeHandler}
                            />
                        </div>
                        <div className="col-md-6 pt-md-0 pt-3">
                            <label htmlFor="lastname">Category</label>
                            <Select
                                options={articleCategories}
                                isMulti
                                onChange={categoryChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md-6">
                            <label htmlFor="email">Author</label>
                            <Select
                                options={articleAuthors}
                                isMulti
                                onChange={authorChangeHandler}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Date</label>
                            <input type="date" className="form-control" onChange={dateChangeHandler} />
                        </div>
                    </div>
                </div>
                <div className="form-group submit-button">
                    <button className="btn btn-primary" onClick={submitSearchHandler}>Search</button>
                </div>
            </div>
            <div className="articles-section">
                {
                    searchState === IN_PROGRESS ? <Loader /> : (
                        searchState === COMPLETED ? (
                            articles?.length ? articles.map((article, index) => {
                                return <ArticleBlock article={article} articleNumber={index} key={index} />;
                            }) : <div className="not-found-container"><span>Not found</span></div>
                        ) : null
                    )
                }
            </div>
        </div>
    );
};

export default Search;
