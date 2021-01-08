
import React from 'react';
import "./EmailList.css";
import { Checkbox, IconButton} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                
            </div>
            <div className="emailList__sections">
                    <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                    <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                    <Section Icon={LocalOfferIcon} title="Primary" color="green" />
                </div>

             <div className="emailList__list">
                 <EmailRow
                 subject="Training Program"
                 time="10pm"
                mId= "guid-1"
                 content="About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
            />
            <EmailRow
                 subject="Empower your future"
                 time="12pm"
                mId= "guid-2"
                 content="We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
            />
             </div>   
        </div>
    )
}

export default EmailList
