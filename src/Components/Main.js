import classes from './Main.module.css';
import CompanyList from './Company/CompanyList';
import IntroContent from './IntroContent';
import ArticleList from './Article/ArticleList';

function Main() {
    return (
        <div className={`container-fluid d-flex flex-md-row flex-column ${classes.home_page_container}`}>
        <CompanyList />
        <IntroContent />
        <ArticleList />
        </div>
    )
}

export default Main;

