import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
    console.log("header", currentPage)
    return (
        <header>
            <h1>Jose Vidal</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;