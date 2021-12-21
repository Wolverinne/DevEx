import classes from './CompanyListItem.module.css';

function CompanyListItem(props) {
    return (
        <li>
            <div className={`d-inline-flex justify-content-between align-items-center ${classes.card}`}>
                <div className="d-inline-flex justify-content-center align-items-center">
                    <img src={props.image} alt={props.name} className={`px-2 ${classes.company_logo}`} />
                    <p className={classes.logo_text}>{props.cname}</p>
                </div>
                <span>1</span>
            </div>
        </li>
    )
}

export default CompanyListItem;
