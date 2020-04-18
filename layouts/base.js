import React from 'react';
import Header from './header';
import Footer from './footer';

const Base = ({ children }) => (
    <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
);

export default Base;
