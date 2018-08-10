import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="logo.png" alt="Avatar" className="avatar-img" style={{height:'200px'}}/>
                        </div>
                        <h2 style ={{paddingTop:'2em'}}>
                            Mochamad Yusuf
                        </h2>
                        <h4 style={{color:'grey'}}>
                            Programmer
                        </h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, fugit! Earum, aspernatur praesentium. Temporibus dolorum rem eius suscipit beatae provident non sed ipsum eligendi, numquam molestiae perspiciatis vel illum eos!</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5>Address</h5>
                        <p>Lorem ipsum </p>
                        <h5>Phone</h5>
                        <p>XXXXXXX</p>
                        <h5>Email</h5>
                        <p>xxxxx@example.com</p>
                        <h5>Website</h5>
                        <p>example.com</p>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                    <h2>Education</h2>
                    <Education 
                        startYear={2013}
                        endYear={2017}
                        schoolName='UNIVERSITAS KUNINGAN'
                        schoolDescription='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, fugit! Earum, aspernatur praesentium.'
                    />

                    <Education 
                        startYear={2013}
                        endYear={2017}
                        schoolName='UNIVERSITAS KUNINGAN'
                        schoolDescription='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, fugit! Earum, aspernatur praesentium.'
                    />
                    
                    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                    
                    <Experience 
                        startYear={2013}
                        endYear={2017}
                        jobName='XXXX'
                        jobDescription='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, fugit! Earum, aspernatur praesentium.'
                    />

                    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

                    <h2>Skill</h2>

                    <Skills 
                        skill='Unity'
                        progress={70}
                    />
                    <Skills 
                        skill='Android'
                        progress={60}
                    />
                    <Skills 
                        skill='PHP'
                        progress={80}
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;