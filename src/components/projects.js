import React,{Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Project extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <Row className="project-grid">
                    <Col sm={12} md={6} lg={4}>
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle>Game Labirin</CardTitle>
                            <img src={"portofolio/unity_1.jpg"} style={{color:'black',height:'176px',background: 'url() center / cover'}} />
                            <CardText>
                                Maze game for android with quiz
                            </CardText>
                        </Card>
                    </Col>
                     {/* Project 2 */}
                    <Col sm={12} md={6} lg={4}>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle>Game Congklak</CardTitle>
                            <img src={"portofolio/unity_2.jpg"} style={{color:'black',height:'176px',background: 'url() center / cover'}} />
                            <CardText>
                                Game congklak with board choice ,pvc (player vs computer) and pvp (player vs player) 
                            </CardText>
                        </Card>
                    </Col>

                     {/* Project 3 */}
                    <Col sm={12} md={6} lg={4}>
                        <Card shadow={5} style={{margin:'auto'}}>
                            <CardTitle>Game Tebak Lagu</CardTitle>
                            <img src={"portofolio/unity_3.jpg"} style={{color:'black',height:'500px',background: 'url() center / cover'}} />
                            <CardText>
                                Guess the song lyric game
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            )
        }else if (this.state.activeTab === 1) {
            return(
                <Row className="project-grid">
                    {/* Project 1 */}
                    <Col sm={12} md={6} lg={4}>
                        <Card shadow={5} style={{margin:'auto'}}>
                            <CardTitle>Hotel Kuningan</CardTitle>
                            <img src={"portofolio/android_1.jpg"} style={{color:'black',height:'500px',background: 'url() center / cover'}} />
                            <CardText>
                                App mobile information about hotel in Kuningan
                            </CardText>
                        </Card>
                    </Col>

                     {/* Project 2 */}
                    <Col sm={12} md={6} lg={4}>
                        <Card shadow={5} style={{margin:'auto'}}>
                            <CardTitle>Mimio Express</CardTitle>
                            <img src={"portofolio/android_2.jpg"} style={{color:'black',height:'500px',background: 'url() center / cover'}} />
                            <CardText>
                                Prototipe app food delivery
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            )
        }else if (this.state.activeTab === 2) {
            return(
                <Row className="project-grid">
                    <Col sm={12} md={6} lg={4}>
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle>NVision Member</CardTitle>
                            <img src={"portofolio/website_1.png"} style={{color:'black',height:'176px',background: 'url() center / cover'}} />
                            <CardText>
                                Website for newVision member
                            </CardText>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        {/* Project 2 */}
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle>Admin Hotel Kuningan</CardTitle>
                            <img src={"portofolio/website_2.png"} style={{color:'black',height:'176px',background: 'url() center / cover'}} />
                            <CardText>
                                Admin Panel for android app Hotel Kuningan and Webservice 
                            </CardText>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        {/* Project 3 */}
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle>CodeIgniter Blog</CardTitle>
                            <img src={"portofolio/website_3.png"} style={{color:'black',height:'176px',background: 'url() center / cover'}} />
                            <CardText>
                                Simple blog using CodeIgniter 3
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            )
        }else if (this.state.activeTab === 3) {
            return(
                <Row className="project-grid">
                    {/* Project 1 */}
                    <Col sm={12} md={6} lg={4}>
                        <Card shadow={5} style={{margin:'auto'}}>
                            <CardTitle>Ekonomi Rakyat Peduli</CardTitle>
                            <img src={"portofolio/ionic_1.jpg"} style={{color:'black',height:'500px',background: 'url() center / cover'}} />
                            <CardText>
                                Prototipe MLM (Multi Level Marketing) App in android
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Unity</Tab>
                    <Tab>Android</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Ionic</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>    
        );
    }
}

export default Project;