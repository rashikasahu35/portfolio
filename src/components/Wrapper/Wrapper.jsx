import React from 'react'
import './Wrapper.scss'


const Wrapper = ({ children }) => {
    return <div className="wrapperHOC">{children}</div>;
};

export default Wrapper;
