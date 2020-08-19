import React from 'react';
import {NotificationContainer} from 'react-notifications';

const Layout = props => {
    return (
        <div>
            <NotificationContainer/>
            <main style={{marginTop: '20px'}}>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;
