import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Home from './Components/Home';
function App() {
    return (
      <div>
        <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header />
        <Home />
        <Main />
        <Footer />
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
      </div>
    );
}
export default App;
