import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

import '../src/sass/App.css'




function App() {
  return (
    <div className='main_layout'>
      <section className='profile_place'>
        <Profile />
        </section>
      <Router>
        <section className='header_place' >
          <Header />
        </section>
       
        <Switch>
        <Route path='/' exact>
            <section className='about_place main'>
              <About />
            </section>
            </Route>
          <Route path='/portfolio'>
            <section className='portfolio_place main'>
             <Portfolio />
            </section>
          </Route>
          <section className='resume_place main'>
             <Route path='/resume'>
            <Resume /> 
            </Route>
          </section>
        
          </Switch>
        
      </Router>
      <section className='footer_place'>
        <Footer />
        </section>
    </div>
  );
}

export default App;
