import React,{Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mochamad Yusuf</h2>
                        <img src="logo.png" alt="Avatar" className="avatar-img"/>
                        <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas sapiente maiores ipsa illo esse dolor delectus perferendis. Exercitationem maiores saepe labore asperiores quo eaque, at voluptatem ab libero! Error?</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}><i className='fa fa-whatsapp' aria-hidden='true'></i>XXXX</ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}><i className='fa fa-phone-square' aria-hidden='true'></i>XXXX</ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}><i className='fa fa-facebook-official' aria-hidden='true'></i>XXXX</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}><i className='fa fa-linkedin-square' aria-hidden='true'></i>XXXX</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;