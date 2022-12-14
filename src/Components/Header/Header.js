import React from "react";
import './Header.css';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


function Header() {
    return(
        <header>
            <h1> <ChatBubbleIcon style={{width: "auto", height:"30px"}} /> GOOGLE KEEP</h1>
        </header>
    )
}

export default Header;