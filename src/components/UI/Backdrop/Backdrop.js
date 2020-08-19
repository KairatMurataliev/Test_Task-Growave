import React from 'react';
import './Backdrop.css'
import Preloader from "../Preloader/Preloader";

const Backdrop = () => {
    return (
        <div className={'backdrop'}>
            <Preloader/>
        </div>
    );
};

export default Backdrop;
