import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width : '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src="foto.jpg" alt="Avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Web & Mobile Developer</h1>
                            <hr/>
                            <p>Android | PHP | JavaScript | Unity</p>
                        </div>
                        <div className="social-link">
                            <a href="https://github.com/mochyusuf" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mocha-yusuf/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://play.google.com/store/apps/developer?id=Mochamad+Yusuf" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-google-play" aria-hidden="true"></i>
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;