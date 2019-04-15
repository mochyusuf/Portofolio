import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>
                        {this.props.jobName}
                    </h4>
                    <ul>
                        <li>Add new feature to existing MLM system</li>
                        <li>Upgrade existing MLM system from PHP 5.1 to PHP 7.1</li>
                        <li>Implement responsive UI in website using HTML/CSS and JavaScript</li>
                        <li>Translated client UI wireframes into prototype mobile app in ionic</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;