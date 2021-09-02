import './App.css';
import Nav from './Components/Nav'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Components/About';
import Featured from './Components/Featured'
import Geners from './Components/Geners'
import Movies from './Components/Movies';
import Dubbed from './Components/Dubbed'
import Hindi from './Components/Hindi'
import TvSeries from './Components/TvSeries'
import Request from './Components/Request';
import Footer from './Components/Footer';
import Nav1 from './Components/Nav1'
import UploadFile from './UploadFile';

function App() {
  return (

  <Router>
<Nav1/>
 <Switch>
   <Route path='/MoviesApp' component={Movies}></Route>
  <Route path='/movies' component={Movies}></Route>
  <Route path='/about' component={About}></Route>
  <Route path='/featured' component={Featured}></Route>
  <Route path='/geners' component={Geners}></Route>
  <Route path='/hindi' component={Hindi}></Route>
  <Route path='/dubbed' component={Dubbed}></Route>
  <Route path='/tvseries' component={TvSeries}></Route>
  <Route path='/request' component={Request}></Route>
 </Switch> 
 <Footer/>
</Router>   


  );

}

export default App;
