import React from 'react'
import { Container, Typography, Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function WelcomePage(){
    return(
        <Container style={{ height: '12rem', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
            <Typography variant={'h2'} color={"primary"}>
                Portfolio
            </Typography>
            <Typography variant={'h7'} color={"secondary"}>
                Alexander Bryngelsson
            </Typography>
            <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography style={{padding: "1rem"}}>
                    <Link href="#">
                        <GitHubIcon fontSize={'large'}/>
                    </Link>
                </Typography>
                <Typography style={{padding: "1rem"}}>
                    <Link href="#">
                        <LinkedInIcon fontSize={'large'}/>
                    </Link>
                </Typography>
            </Container>
        </Container>
    )
}
 