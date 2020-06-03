import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default function About(){
    return(
        <Box bgcolor={"primary.main"} style={boxHolderStyle}>
            {/* <Typography style={textStyle}>
            </Typography> */}
            <Typography style={textStyle}>
                Jag läser just nu till Front End Developer på Medieinstitutet i Göteborg. 
                HTML/CSS/JavaScript/TypeScript även frameworks som React på front end och Node/Express/MongoDB med REST API i backend. 
                Mina kodprojekt från GitHub finns nedan.
            </Typography>
            <Typography style={textStyle}>
                Även bekant med C#.Net och Wordpress LAMP stack, Linux Cron. 
                Jag har tidigare läst utbildningen 'Programutvecklare / konstruktör inom elektronik'
                och är väldigt teknikintresserad, allt från webb, elektronik, raketer till ny energiteknik och AI.
            </Typography>
        </Box>
    )
}

const boxHolderStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem 0 3rem 0", 
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