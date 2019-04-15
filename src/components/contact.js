import React,{Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Row className="contact-grid">
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 6, offset: 3 }}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'15px',fontFamily:'Anton'}}><a href="https://api.whatsapp.com/send?phone=6285221120369"><i className='fab fa-whatsapp' aria-hidden='true'></i>+62-85221120369</a></ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'15px',fontFamily:'Anton'}}><i className='fab fa-github' aria-hidden='true'></i><a href="https://github.com/mochyusuf">https://github.com/mochyusuf</a></ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'15px',fontFamily:'Anton'}}><i className='far fa-envelope' aria-hidden='true'></i><a href="mailto:mochyusuf100@gmail.com">mochyusuf100@gmail.com</a></ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'15px',fontFamily:'Anton'}}><i className='fab fa-linkedin' aria-hidden='true'></i><a href="https://www.linkedin.com/in/mocha-yusuf/">https://www.linkedin.com/in/mocha-yusuf/</a></ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;