import React from 'react';
import Chat from './Chat';
import './Imessages.css';
import Sidebar from './Sidebar';

function Imessages() {
    return (
        <div className='message'>
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Imessages
