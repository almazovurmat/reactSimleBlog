import React from 'react';
import {Outlet, Route, Routes, useLocation} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Posts from "./containers/Posts/Posts";

import './assets/css/styles.css';
import './App.css';

import mainPage from './assets/img/home-bg.jpg';
import aboutUs from './assets/img/about-bg.jpg';
import contactPage from './assets/img/contact-bg.jpg';
import AddPost from "./containers/AddPost/AddPost";
import PostEdit from "./containers/Post/PostEdit/PostEdit";
import PostDelete from "./containers/Post/PostDelete/PostDelete";
import About from "./containers/AboutUs/About";
import Contact from "./containers/Contact/Contact";
import PostShow from "./containers/Post/PostShow/PostShow";
import EditContact from "./containers/Contact/EditContact/EditContact";
import EditAboutUs from "./containers/AboutUs/EditAboutUs/EditAboutUs";

const App = () => {
    let image = mainPage;
    let title = 'My Blog';
    const location = useLocation();
    if (location.pathname === '/about-us') {
        title = 'About my blog';
        image = aboutUs;
    }
    if (location.pathname === '/contact') {
        title = 'Contact with me';
        image = contactPage;
    }
    return (
        <main className="mb-4">
            <Navbar/>
            <Header title={title} image={image}/>
            <div className="container px-4 px-lg-5">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="/" element={<Posts />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/post/show/:id" element={<PostShow />} />
                        <Route path="/post/edit/:id" element={<PostEdit />} />
                        <Route path="/post/delete/:id" element={<PostDelete />} />
                    </Route>

                    <Route path="/new-post" element={(
                        <AddPost/>
                    )}/>

                    <Route path="/about-us" element={<Outlet />} >
                        <Route path="/about-us" element={<About />} />
                        <Route path="/about-us/edit/:id" element={<EditAboutUs />} />
                    </Route>

                    <Route path="/contact" element={<Outlet />}>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/contact/edit/:id" element={<EditContact />} />
                    </Route>
                </Routes>
            </div>
            <Footer/>
        </main>
    );
}
export default App;
