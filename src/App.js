import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";

let App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <div className='background'>
                    <div id='stars'></div>
                </div>
                <div className="portfolio">
                    <Header/>
                    <div id='stars2'></div>
                    <div className="content">
                        <Route exact path='/portfolio' render={() => <Main/>}/>
                        <Route path='/skills' render={() => <Skills/>}/>
                        <Route path='/projects' render={() => <Projects/>}/>
                        <Route path='/contacts' render={() => <Contacts/>}/>
                        <div id='stars3'></div>
                    </div>
                    {/*<Slogan/>*/}
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
