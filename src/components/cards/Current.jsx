import React from 'react'
import { Box, Typography, Link } from '@material-ui/core'

export default function Current(){
    return(
        <Box bgcolor={"primary.main"} style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0.5rem 0", /*background: "white",*/ margin: "2rem 0 4rem 0"}}>
            <Typography style={{color: "white"}}>
                Studerar på MedieInstitutet
            </Typography>
            <Link href="https://medieinstitutet.se/utbildningar/front-end-developer/" style={{margin: "0 0 1rem 0"}}>
                <Typography variant={"button"} style={{color: "#7395AE"}}>
                    Front End Developer
                </Typography>
            </Link>
            <Typography style={{color: "white"}}>
                React JavaScript 
            </Typography>
            <Typography style={{color: "white"}}>
                TypeScript HTML/CSS 
            </Typography>
            <Typography style={{color: "white"}}>
                Node Express C#
            </Typography>
            <Typography style={{color: "white"}}>
                Socket.IO MongoDB
            </Typography>
        </Box>
    )
}
