import classes from './ArticleList.module.css';
import ArticleListItem from './ArticleListItem';

const ARTICLE_DATA =[
    {
        id:'1',
        title:'Google Interiew Experience',
        content:'I recentle got a Summer Software Internsip offer with Google...',
        author:'by Vaibhav',
        date:'1/2/2021'
    },
    {
        id:'2',
        title:'Facebook Interiew Experience',
        content:'I recentle got a Summer Software Internsip offer with Facebook...',
        author:'by Tanmay',
        date:'4/2/2021'
    },
    {
        id:'3',
        title:'Uber Interiew Experience',
        content:'I recentle got a Summer Software Internsip offer with Uber...',
        author:'by Rohit',
        date:'5/2/2021'
    },
    {
        id:'4',
        title:'Microsoft Interiew Experience with Microsoft',
        content:'I recentle got a Summer Software Internsip offer...',
        author:'by Samay',
        date:'6/2/2021'
    },

]

function ArticleList() {
    return (
        <div className={`col-12 col-md-3 pt-xs-5 pt-sm-3 pt-md-0 d-xs-none d-md-block d-lg-block order-3 order-md-2 ${classes.articlelist}`}>
            <h6>Recent Articles</h6>
            <ul className={classes.list}>
                {ARTICLE_DATA.map(article =><ArticleListItem 
                key={article.id}
                id={article.id}
                title={article.title}
                content={article.content}
                author={article.author}
                date={article.date}
                />)}
            </ul>
        </div>
    )
}

export default ArticleList
