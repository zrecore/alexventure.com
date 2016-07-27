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

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
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
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar id="appbarMain" />
                    <Paper id="paperMain" zDepth={5} rounded={false}>

                        <section id="sectionHeader">
                            <div id="fabuttonAuthor">
                                <FloatingActionButton>
                                    <img src="/static/media/alexalbino-160x160px.png" id="authorImage" />
                                </FloatingActionButton>
                            </div>
                            <h1>Alex Albino</h1>
                            <sub>Web, Hardware, Software, Interactive</sub>
                            
                            
                            <p>
                            I am currently working on a rewrite of my portfolio using Python 3, Django, and React. I also write C#, PHP, C, C++, and Java.
                            </p>
                           
                            <p>This website code is available <a href="https://github.com/zrecore/alexventure.com">on my github repository, as the alexventure.com project</a></p>
                            
                        </section>
                        
                        <section id="sectionFooter">
                            <h3>Github repositories</h3>
                            <List>
                                <ListItem><RaisedButton label="ZRECore" href="https://github.com/zrecore" /></ListItem>
                                <ListItem><RaisedButton label="Femtoduino" href="https://github.com/femtoduino" /></ListItem>
                                <ListItem><RaisedButton label="Femto.io" href="https://github.com/femtoio" /></ListItem>
                                <ListItem><RaisedButton label="XTAL.io" href="https://github.com/xtalio" /></ListItem>
                            </List>
                        </section>
                    </Paper>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
