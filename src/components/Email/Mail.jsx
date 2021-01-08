import { IconButton } from '@material-ui/core';
import React from 'react';
import "./Mail.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import { useHistory } from 'react-router-dom';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function Mail() {
    const history = useHistory();
    return (
        <div className="mail">

            <div className="mail__tools">
                <div className="mail__toolsLeft">
                <IconButton onClick={() => history.push("/")}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>

                </div>

                
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantOutlinedIcon className="mail__important"/>
                    
                    <p className="mail__time">time</p>

                    
                </div>
                <div className="mail__message">
                        <p>This is a message</p>
                 </div>
            </div>
            
        </div>
    )
}

export default Mail
