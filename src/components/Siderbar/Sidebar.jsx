import { Button } from '@material-ui/core';
import SidebarOption from './SidebarOption/SidebarOption'
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
 import React from 'react'
 import InboxIcon from '@material-ui/icons/Inbox';
 import FolderIcon from '@material-ui/icons/Folder';
 import StarIcon from '@material-ui/icons/Star';
 import DeleteIcon from '@material-ui/icons/Delete';
 import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 function Sidebar  ()  {
     return (
         <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={50}/>
            <SidebarOption Icon={StarIcon} title="Inbox" number={45}/>
            <SidebarOption Icon={DeleteIcon} title="Bin" number={4}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={5}/>
            <SidebarOption Icon={FolderIcon} title="Custom Folder" number={12}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" />
        </div>
     );
 }
 
 export default Sidebar
 
