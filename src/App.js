import React from "react";
import './App.css';
import {Switch,Route} from "react-router-dom";

import Header from "./components/header/header/header.component";
import Footer from "./components/footer/footer.component";
import Homepage from "./pages/homepage/homepage.component";
import Academics from "./pages/academics/academics.component";
import Contact from "./pages/contact/contact.component";
import About from "./pages/about/about.component";
// import Gallery from "./pages/gallery/gallery.component";
import preSchool from "./pages/preSchool/preSchool.component";
import primarySchool from "./pages/primarySchool/primarySchool.component";
import JHS from "./pages/JHS/JHS.component";
import Administration from "./pages/administration/administration.component";
import TeachingStaff from "./pages/teachingStaff/teachingStaff.component";
import NonTeachingStaff from "./pages/nonTeachingStaff/nonTeachingStaff.component";



function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/academics' component={Academics}/>
            {/* <Route exact path='/gallery' component={Gallery}/> */}
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/preSchool' component={preSchool}/>
            <Route exact path='/primarySchool' component={primarySchool}/>
            <Route exact path='/JHS' component={JHS}/>
            <Route exact path='/administration' component={Administration}/>
            <Route exact path='/teachingStaff' component={TeachingStaff}/>
            <Route exact path='/nonTeachingStaff' component={NonTeachingStaff}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
