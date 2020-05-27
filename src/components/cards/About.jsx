import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default function About(){
    return(
        <Box bgcolor={"primary.main"} style={boxHolderStyle}>
            {/* <Typography style={textStyle}>
            </Typography> */}
            <Typography style={textStyle}>
                Även bekant med Wordpress LAMP stack, Linux Cron, C Arduinio. 
                Jag har läst en utbildning tidigare 'Programutvecklare / konstruktör inom elektronik'
                och är väldigt teknikintresserad, allt från webb, elektronik, raketer till AI.
            </Typography>
            {/* <Typography style={textStyle}>
            </Typography> */}
        </Box>
    )
}

const boxHolderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem 0 1rem 0", 
    padding: "1rem 0"
}

const textStyle = {
    color: "white",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    margin: "0.25rem 1.25rem",
    maxWidth: "32rem"
}