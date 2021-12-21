import classes from './ArticleListItem.module.css';



function ArticleListItem(props) {
    return (
        <li>
            <div className={`mb-3 ${classes.card}`}>
                <div>
                    <h6 className={`mb-0 ${classes.title}`}> {props.title}</h6>
                    <p className={classes.content}>{props.content}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className={classes.author}>{props.author}</p>
                    </div>
                    <div >
                        <p className={classes.date}>{props.date}</p>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default ArticleListItem

