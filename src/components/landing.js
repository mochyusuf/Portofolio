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
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mochamad-yusuf-5b1466128/" rel="noopener noreferrer" target="_blank">
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