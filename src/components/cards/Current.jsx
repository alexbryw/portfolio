import React from 'react'
import { Container, Typography } from '@material-ui/core'

export default function Current(){
    return(
        <Container style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <Typography style={{padding: "1rem"}}>
                Studerar på MedieInstitutet Front End Developer.
            </Typography>
        </Container>
    )
}