import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData =  [

{
    title: "Home",
    icon: <HomeIcon/>,
    link: "/",
    number :  "1"
}
,
{
    title: "Add Doctor",
    icon: <AccountCircleIcon/>,
    link: "/adddoctor",
    number :  "2"
}
,
{
    title: "Schedule Appt.",
    icon: <EventAvailableIcon/>,
    link: "/viewdoctors",
    number :  "3"
}
,
{
    title: "Add Patient",
    icon: <PersonAddIcon/>,
    link: "/account",
    number :  "4"
},
{
    title: "Edit Patient",
    icon: <EditIcon/>,
    link: "/notification",
    number :  "5"
}
,
{
    title: "Generate Bill",
    icon: <DescriptionIcon/>,
    link: "/logout",
    number :  "6"
}
]

