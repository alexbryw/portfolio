import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Box, Typography, Link } from '@material-ui/core';

export default function Bottom(){
    return(
        <Box bgcolor={"primary.main"} style={{display: "flex",flexDirection: "column" , justifyContent: "center", alignItems: "center", padding: "1rem 1.25rem 2rem 1.25rem", margin: "2rem 0 1rem 0"}}>
            <Link href="mailto:alexbryw@gmail.com" >
                <Typography  style={{display: "flex", color:"white", alignItems: "center", justifyContent: "center", padding: "0.2rem"}}>
                    <MailIcon style={{padding: "0 0.3rem"}}/> alexbryw@gmail.com
                </Typography>
            </Link>
            <Link href="https://github.com/alexbryw">
                <Typography style={{display: "flex", color:"white", alignItems: "center", justifyContent: "center", padding: "0.2rem"}}>
                    <GitHubIcon style={{padding: "0 0.3rem"}}/> github.com/alexbryw
                </Typography>
            </Link>
        </Box>
    )
}