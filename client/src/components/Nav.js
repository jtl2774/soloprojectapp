import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Nav = (props) => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary">
                <a class="navbar-brand"><h3>PolyLang</h3></a>
                <a class='navbar-brand'href="/">Home</a>
                <a class='navbar-brand'href="/addNewLanguage" >Add New Language</a>
            </nav>
        </div>
)}

export default Nav;