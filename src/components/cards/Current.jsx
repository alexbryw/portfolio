import React from 'react'
import { Container, Typography, Link } from '@material-ui/core'


export default function Current(){
    return(
        <Container style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "3rem 1.5rem 5rem 1.5rem"}}>
            <Typography color={"textPrimary"}>
                Studerar på MedieInstitutet
            </Typography>
            <Typography style={{padding: "0 0 1rem 0"}} /*color={"primary"}*/>
                <Link href="https://medieinstitutet.se/utbildningar/front-end-developer/">
                    Front End Developer
                </Link>
            </Typography>
            <Typography>
                React JavaScript 
            </Typography>
            <Typography>
                TypeScript HTML/CSS 
            </Typography>
            <Typography>
                Node Express C#
            </Typography>
            <Typography>
                Socket.IO MongoDB
            </Typography>
        </Container>
    )
}