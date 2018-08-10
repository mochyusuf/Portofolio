import React,{Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Project extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="project-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black',height:'176px',background: 'url(https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-svg-vector.svg) center / cover'}}>Unity Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore vero, aut eaque repellendus recusandae totam eveniet omnis nisi obcaecati nemo, ipsam porro ea sit, alias explicabo numquam maxime fugiat quos.
                        </CardText>
                        <CardActions>
                            <Button colored>lorem</Button>
                            <Button colored>ipsum</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                     {/* Project 2 */}
                     <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black',height:'176px',background: 'url(https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-svg-vector.svg) center / cover'}}>Unity Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore vero, aut eaque repellendus recusandae totam eveniet omnis nisi obcaecati nemo, ipsam porro ea sit, alias explicabo numquam maxime fugiat quos.
                        </CardText>
                        <CardActions>
                            <Button colored>lorem</Button>
                            <Button colored>ipsum</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                     {/* Project 3 */}
                     <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black',height:'176px',background: 'url(https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-svg-vector.svg) center / cover'}}>Unity Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore vero, aut eaque repellendus recusandae totam eveniet omnis nisi obcaecati nemo, ipsam porro ea sit, alias explicabo numquam maxime fugiat quos.
                        </CardText>
                        <CardActions>
                            <Button colored>lorem</Button>
                            <Button colored>ipsum</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 1) {
            return(
                <div>
                    <h1>This is Android</h1>
                </div>
            )
        }else if (this.state.activeTab === 2) {
            return(
                <div>
                    <h1>This is PHP</h1>
                </div>
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