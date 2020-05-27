import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard'
import contentList from '../../content/content'
import Navbar from './Navbar';
import WelcomePage from './WelcomePage';
import Current from './Current';
import Bottom from './Bottom'
import { makeStyles } from '@material-ui/core/styles'
import About from './About';

const useStyles = makeStyles({
    root: {
        background: "#EAE7DC" /*"#E3E2DF"*/
    }
})
export default function CardHolder() {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Navbar />
            <WelcomePage />
            <Current />
            <Container fixed /*className={classes.root}*/>
                <Grid container
                    spacing={3}
                    // justify="space-evenly"
                    // alignItems="center"
                >
                    {contentList.map((item, i) => {
                        return(
                            <Grid item align="center" xs={12} sm={6} md={4} key={i}>
                                <MediaCard item={item} key={i}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <About/>
            <Bottom />
        </div>
    )
}