import classes from './CompanyList.module.css';
import CompanyListItem from './CompanyListItem';

const DUMMY_DATA = [
    {
        id:'1',
        cname:'Amazon',
        image:'//logo.clearbit.com/amazon.com?size=20'
    },
    {
        id:'2',
        cname:'Groww',
        image:'//logo.clearbit.com/groww.in?size=20'

    },
      {
        id:'3',
        cname:'Google',
        image:'//logo.clearbit.com/google.com?size=20'

    },
]
function CompanyList() {
    return (
        <div className={`col-12  col-md-2  order-2 order-md-1 ${classes.company_list}`}>
            <h6>Company List</h6>
            {/* <img src="//logo.clearbit.com/amazon.com?size=25" /> */}
            <ul className={classes.list}>
                {DUMMY_DATA.map(company => (<CompanyListItem 
                key={company.id}
                id={company.id}
                cname={company.cname}
                image={company.image}/>))}
            </ul>
            {/* <ul className={classes.list}>
                {DUMMY_DATA.map((company) =>{
                    return <li key={company.id}>{company.cname}</li>
                })}
            </ul> */} 
        </div>
    )
}

export default CompanyList
