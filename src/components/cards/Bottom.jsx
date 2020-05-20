import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Container, Typography, Link } from '@material-ui/core';

export default function Bottom(){
    return(
        <Container style={{display: "flex",flexDirection: "column" , justifyContent: "center", alignItems: "center", padding: "4rem 1.25rem 2rem 1.25rem"}}>
            <Link href="mailto:alexbryw@gmail.com" >
                <Typography  style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0.2rem"}}>
                    <MailIcon style={{padding: "0 0.3rem"}}/> alexbryw@gmail.com
                </Typography>
            </Link>
            <Link href="https://github.com/alexbryw">
                <Typography style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0.2rem"}}>
                    <GitHubIcon style={{padding: "0 0.3rem"}}/> github.com/alexbryw
                </Typography>
            </Link>
        </Container>
    )
}