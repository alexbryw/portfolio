import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard'
import contentList from '../../content/content'
import Navbar from './Navbar';
import WelcomePage from './WelcomePage';
import Current from './Current';

export default function CardHolder() {

    return(
        <div>
            <Navbar />
            <WelcomePage />
            <Current />
            <Container fixed>
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
        </div>
    )
}