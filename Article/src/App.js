import React ,{Component} from 'react';
import Header from './common/header/index.js';
import {GlobalStyle} from './style.js';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Routes,HashRouter} from 'react-router-dom';
import store from './store/main.js';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Login from './pages/login/index';
import Write from './pages/write/index';
import {DetailWrap} from './pages/detail/index';




class App extends Component {
  render(){

      return(
        <div>

          <GlobalStyle  />
        
           


                <BrowserRouter>

                    <Routes>

                        <Route path='/' exact element={<div>

                            <Home />
                        </div>
                           } />
                        <Route path='/detail/:id' exact element={
                            <div>

                                <DetailWrap el={Detail} />
                            </div>
                           } />
                        <Route path='/login' exact element={<Login />} />

                        <Route path='/write' exact element={
                            <div>

                                <Write />
                            </div>
                        } />

                        <Route path='*'  element={
                         <div>404</div>
                          
                         } />

                    </Routes>
                   

                </BrowserRouter>


         

        </div>
        

      )


  }

}

export default App;
