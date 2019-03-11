import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Resume extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col sm={12} md={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="foto.jpg" alt="Avatar" className="avatar-img" style={{height:'200px'}}/>
                        </div>
                        <h2 style ={{paddingTop:'2em'}}>
                            Mochamad Yusuf
                        </h2>
                        <h4 style={{color:'grey'}}>
                            Web & Mobile Developer
                        </h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5>Address</h5>
                        <p>Jalan Ramajaksa No 312 RT 08/02 Kelurahan Purwawinangun Kecamatan Kuningan</p>
                        <h5>Phone</h5>
                        <p>+62-85221120369</p>
                        <h5>Email</h5>
                        <p>mochyusuf100@gmail.com</p>
                    </Col>
                    <Col className='resume-right-col' sm={12} md={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2013}
                            endYear={2017}
                            schoolName='UNIVERSITAS KUNINGAN'
                            schoolDescription='Teknik Informatika'
                        />
                        
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        
                        <Experience 
                            startYear={2018}
                            endYear={'Present'}
                            jobName='Web & Mobile Developer'
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

                        <Skills 
                            skill='JavaScript'
                            progress={50}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Resume;