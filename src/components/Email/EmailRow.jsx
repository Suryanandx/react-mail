import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
function EmailRow({subject, content, mId, time,}) {

    const history = useHistory();
    return (
        <div onClick={()=> history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>                    
                </IconButton>                    
            </div>
        <div className="emailRow__message">
            <h4 className="emailRow__subject">
            {subject}
            </h4>

        <span className="emailRow__content">
            {content}
        </span>

        <p className="emailRow__time">
            {time}
        </p>

       </div>
        
        </div>
    )
}

export default EmailRow
