import { useState, useEffect } from 'react';
import Select, { MultiValue } from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { convertToDropdownArray } from '../../utils/form';
import { postUserPrefrenceItemAction } from '../../redux/actions/userPrefrence';
import messages from '../../constants/messages.json';
import type { RootState, DropdownOption } from '../../types';
import type { AppDispatch } from '../../redux/store';
import type { AxiosError } from 'axios';

const Setting: React.FC = () => {
    const [selectedSources, setSelectedSources] = useState<MultiValue<DropdownOption>>([]);
    const [selectedCategories, setSelectedCategories] = useState<MultiValue<DropdownOption>>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<MultiValue<DropdownOption>>([]);

    const [isSources, setIsSources] = useState(false);
    const [isCategories, setIsCategories] = useState(false);
    const [isAuthors, setIsAuthors] = useState(false);

    const userPrefrenceMessages = messages.messages.userPrefrence;

    const dispatch = useDispatch<AppDispatch>();

    const articleSources = useSelector((state: RootState) => {
        return convertToDropdownArray(state.articleSource.articleSources);
    });
    const articleAuthors = useSelector((state: RootState) => {
        return convertToDropdownArray(state.articleAuthor.articleAuthors);
    });
    const articleCategories = useSelector((state: RootState) => {
        return convertToDropdownArray(state.articleCategory.articleCategories);
    });
    const userPrefrence = useSelector((state: RootState) => state.userPrefrence.userPrefrence);

    const submitUserPrefrenceHandler = async () => {
        const source_ids = selectedSources.map(source => source.value);
        const category_ids = selectedCategories.map(category => category.value);
        const author_ids = selectedAuthors.map(author => author.value);

        dispatch(
            postUserPrefrenceItemAction({
                source_ids,
                category_ids,
                author_ids
            })
        ).then(() => {
            alert(userPrefrenceMessages.createSuccess);
        }).catch((e: AxiosError<{ message?: string }>) => {
            const message = e?.response?.data?.message || userPrefrenceMessages.createError;
            alert(message);
        });
    };

    const sourceChangeHandler = (data: MultiValue<DropdownOption>) => {
        setSelectedSources(data);
    };

    const categoryChangeHandler = (data: MultiValue<DropdownOption>) => {
        setSelectedCategories(data);
    };

    const authorChangeHandler = (data: MultiValue<DropdownOption>) => {
        setSelectedAuthors(data);
    };

    const getDefaultValue = (ids: number[] | undefined, options: DropdownOption[]): DropdownOption[] => {
        if (ids && options) {
            return options.filter(option => ids.includes(option.value));
        }
        return [];
    };

    useEffect(() => {
        if (!isSources && !selectedSources.length && userPrefrence?.source_ids && articleSources.length) {
            setSelectedSources(
                getDefaultValue(userPrefrence?.source_ids, articleSources)
            );
            setIsSources(true);
        }
    }, [userPrefrence?.source_ids, articleSources]);

    useEffect(() => {
        if (!isAuthors && !selectedAuthors.length && userPrefrence?.author_ids && articleAuthors.length) {
            setSelectedAuthors(
                getDefaultValue(userPrefrence?.author_ids, articleAuthors)
            );
            setIsAuthors(true);
        }
    }, [userPrefrence?.author_ids, articleAuthors]);

    useEffect(() => {
        if (!isCategories && !selectedCategories.length && userPrefrence?.category_ids && articleCategories.length) {
            setSelectedCategories(
                getDefaultValue(userPrefrence?.category_ids, articleCategories)
            );
            setIsCategories(true);
        }
    }, [userPrefrence?.category_ids, articleCategories]);

    return (
        <div className="setting-page">
            <div className="wrapper bg-white mt-sm-5">
                <h4 className="pb-4 border-bottom">User Prefrences</h4>
                <div className="py-2">
                    <div className="row py-2">
                        <div className="col-md-6">
                            <label htmlFor="firstname">Source</label>
                            <Select
                                options={articleSources}
                                isMulti
                                onChange={sourceChangeHandler}
                                value={selectedSources}
                            />
                        </div>
                        <div className="col-md-6 pt-md-0 pt-3">
                            <label htmlFor="lastname">Category</label>
                            <Select
                                options={articleCategories}
                                isMulti
                                onChange={categoryChangeHandler}
                                value={selectedCategories}
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
                                value={selectedAuthors}
                            />
                        </div>
                    </div>

                    <div className="py-3 pb-4 border-bottom">
                        <button className="btn btn-primary mr-3" onClick={submitUserPrefrenceHandler}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
