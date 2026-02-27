import { useSelector } from 'react-redux';
import type { RootState } from '../../types';

const Footer: React.FC = () => {
    const articleCategories = useSelector((state: RootState) => state.articleCategory.articleCategories);

    return (
        <div className="default-footer">
            <div className="footer-links">
                <ul className="main-footer-links">
                    {
                        articleCategories?.length && articleCategories.map((articleCategory, index) => {
                            const { name } = articleCategory;
                            const url = `/category/${name.toLowerCase()}`;
                            return (
                                <li key={index}><a href={url} title={name}>{name}</a></li>
                            );
                        })
                    }
                </ul>

                <ul className="info-links">
                    <li><a href="#about-us" title="About Us">About Us</a></li>
                </ul>

                <ul className="our-address">
                    <li>Our Address:</li>
                    <li>Main Street 123</li>
                    <li>New York, NY 10000</li>
                    <li>111-222-3333</li>
                </ul>
            </div>

            <footer role="contentinfo">
                <p>2025 &copy; by NEWS CHANNEL</p>
                <a className="scroll-top" href="#top"></a>
            </footer>
        </div>
    );
};

export default Footer;
