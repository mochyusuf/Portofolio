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
                        <li>Menerjemahkan wireframe UI Client ke prototipe mobile app menggunakan ionic </li>
                        <li>Implementasi responsive UI di website menggunakan HTML/CSS dan javascript</li>
                        <li>Uprade sistem MLM dari PHP 5.1 ke PHP 7.1</li>
                        <li>Menambah fitur ke sistem MLM</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;