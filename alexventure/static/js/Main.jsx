import React, {Component}       from 'react';

import AppBar                   from 'material-ui/AppBar';
import Dialog                   from 'material-ui/Dialog';
import Divider                  from 'material-ui/Divider';
import {deepOrange500}          from 'material-ui/styles/colors';
import FlatButton               from 'material-ui/FlatButton';
import FloatingActionButton     from 'material-ui/FloatingActionButton';
import getMuiTheme              from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile}     from 'material-ui/GridList';
import IconButton               from 'material-ui/IconButton';
import {List, ListItem}         from 'material-ui/List';
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider';
import Paper                    from 'material-ui/Paper';
import RaisedButton             from 'material-ui/RaisedButton';
import StarBorder               from 'material-ui/svg-icons/toggle/star-border';
import TextField                from 'material-ui/TextField';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 605,
        overflowY: 'auto',
        marginBottom: 24,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

const tilesData = [
    {
        img: 'static/media/awesome.png',
        title: 'Awesome - C# Messaging Platform',
        author: 'A. Albino',
        featured: true,
    },
    {
        img: 'static/media/femtoio.png',
        title: 'Femto.io - Wireless IMU and LPS hardware',
        author: 'A. Albino'
    },
    {
        img: 'static/media/xtalio.png',
        title: 'XTAL.io - Commerce data models, multi-platform',
        author: 'A. Albino'
    }
];

class Main extends Component {

    constructor(props, context) {
        super(props, context);

        this.component = this;

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };

    }

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {

        const standardActions = [
            <RaisedButton
                label="OK, Got it"
                primary={true}
                onTouchTap={this.handleRequestClose.bind(this.component)}
            />,
        ];

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>

                    <AppBar id="appbarMain" />
                    <Paper id="paperMain" zDepth={5} rounded={false}>

                        <section id="sectionHeader">
                            
                            <div id="fabuttonContact" className="fabutton">
                                <FloatingActionButton onTouchTap={this.handleOpen.bind(this.component)}>
                                    <img src="/static/media/icon-contact-60x60px.png" id="contactImage" />
                                </FloatingActionButton>
                            </div>

                            <div id="fabuttonLinkedIn" className="fabutton">
                                <FloatingActionButton href="https://linkedin.com/in/alexalbino">
                                    <img src="/static/media/icon-linkedin-60x60px.png" id="linkedInImage" />
                                </FloatingActionButton>
                            </div>                            

                            <div id="fabuttonTwitter" className="fabutton">
                                <FloatingActionButton href="https://twitter.com/zrecommerce">
                                    <img src="/static/media/icon-twitter-60x60px.png" id="twitterImage" />
                                </FloatingActionButton>
                            </div>
                            <div id="fabuttonAuthor">
                                <FloatingActionButton href="/">
                                    <img src="/static/media/alexalbino-160x160px.png" id="authorImage" />
                                </FloatingActionButton>
                            </div>

                            <h1>Alex Albino</h1>
                            <sub>Web, Hardware, Software, Interactive</sub>
                            
                            
                            <p>
                                Seasoned Developer with experience in <em>C#, Python, PHP, Node (es2015/es6, es5, Typescript), and Java.</em>
                            </p>

                            <h2>Tools of the Trade</h2>
                            <p>
                                On the front-end, I leverage the following tools: <em>AngularJS 2, React, Polymer, SASS, Less.</em>
                            </p>
                            <p>
                                My technology stack experience includes <em>.Net Core 1.0, Web API 2, Zend Framework, APIGility, Django, Ionic Framework, Spring.io, Grunt, Gulp, Yeoman, Docker, Vagrant, Entity Framework, MySQL, Mongo, SQLite, UE4, Unity3D, Bluetooth 4.0, ARM, AVR.</em>
                            </p>

                            <h2>For Hire</h2>

                            <p>Need a capabable developer on your team? I am available for work on a W2 basis (remote). My rates are negotiable (unless you are a jerk) and I am happy to help with your development needs.</p>

                            <p>No need for over-the-top SV style perks. As a professional, I get the job done - <em>promptly, properly, and courteously.</em></p>

                            <p> Get in contact with me to schedule an appointment (Hangouts, Skype).</p>
                           
                            <p>Source code for this website is available <a href="https://github.com/zrecore/alexventure.com">on my github repo</a></p>
                            
                        </section>

                        <section id="sectionFooter">&copy; Alex Albino, 2016 - All Rights Reserved - Vallejo, CA</section>
                    </Paper>
                    <Dialog
                        title="Contact Alex!"
                        actions={standardActions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}>
                        <p>I am available Monday through Friday, and generally respond within 24 hours.</p>
                        <p>
                        <em>Tap my e-mail to contact me: </em>
                        <FlatButton href="mailto:webmaster@alexventure.com">webmaster@alexventure.com</FlatButton>
                        </p>
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
