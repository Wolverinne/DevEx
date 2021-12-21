import { Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import WriteArticle from './Pages/WriteArticle';
import RequestArticle from './Pages/RequestArticle';
import Layout from './Components/Layout/Layout';
import Feedback from './Pages/Feedback';
import Faq from './Pages/Faq';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/write-article'>
            <WriteArticle />
          </Route>
          <Route path='/request-article'>
            <RequestArticle />
          </Route>
          <Route path='/feedback'>
            <Feedback />
          </Route>
          
        </Switch>
      </Layout>
    
  );
}

export default App;
