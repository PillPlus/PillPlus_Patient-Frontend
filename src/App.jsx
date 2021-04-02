import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { LoginPage, HomePage, LocationPage} from './pages'


const App = () => {
  return (
  
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/location" component={LocationPage} />
        <Route/>
        <Route/>
        <Route/>
        
        {/* others routes*/}


        <Redirect to="/location" />
      </Switch>
    </Router>
      
  
    
  
 
  );
};

//<div className="flex w-full h-screen justify-center items-center text-6xl font-bold">PillPlus+ [Patient]</div>

export default App;
