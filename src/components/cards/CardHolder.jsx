import React from 'react'
import MediaCard from './MediaCard'
import contentList from '../../content/content'

export default class CardHolder extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <h3>From Card holder</h3>
                {contentList.map((item, i) => <MediaCard item={item} key={i}/>)}
            </div>
        )
    }
}