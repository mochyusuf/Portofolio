import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width : '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src="logo.png" alt="Avatar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Lorem, ipsum dolor</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript</p>
                        </div>
                        <div className="social-link">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;