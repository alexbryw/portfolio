import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import { Container, Typography, Link } from '@material-ui/core';

export default function Bottom(){
    return(
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "4rem 1.25rem 2rem 1.25rem"}}>
            <Link href="#" >
                <Typography  style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <MailIcon/>&nbsp; wwwwwwww@wwww.com
                </Typography>
            </Link>
        </Container>
    )
}