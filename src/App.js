import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

import '../src/sass/App.css'





function App() {
  const [language, setLanguage] = useState(false);

  const handleLanguage = () => {
    setLanguage(!language)
  }

  return (
    <div className='main_layout'>
      <section className='profile_place'>
        <Profile language={language} />
        </section>
      <Router>
        <section className='header_place' >
          <Header handleLanguage={handleLanguage} language={language} />
        </section>
       
        <Switch>
        <Route path='/' exact>
            <section className='about_place main'>
              <About language={language} />
            </section>
            </Route>
          <Route path='/portfolio'>
            <section className='portfolio_place main'>
             <Portfolio language={language} />
            </section>
          </Route>
        
             <Route path='/resume'>
             <section className='resume_place main'>
              <Resume language={language} />
              </section>
            </Route>
         
        
          </Switch>
        
      </Router>
      <section className='footer_place'>
        <Footer />
        </section>
    </div>
  );
}

export default App;
