import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
    console.log("header", currentPage)
    return (
        <header className="container-fluid">
            <div className="row justify-content">
                <h1 className="col-4">Jose Vidal</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
        </header>
    );
}

export default Header;