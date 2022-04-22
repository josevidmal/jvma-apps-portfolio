import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className="d-flex justify-content-center custom-header">
            <div className="row container-fluid p-0 align-items-center">
                <h1 className="col-12 col-sm-12 col-md-4 px-lg-4">José Vidal</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
        </header>
    );
}

export default Header;