import React, {Component}       from 'react';

import Dialog                   from 'material-ui/Dialog';
import Divider                  from 'material-ui/Divider';
import {deepOrange500}          from 'material-ui/styles/colors';
import FlatButton               from 'material-ui/FlatButton';
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
    container: {
        textAlign: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        margin: 50,
    }
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
                <Paper>
                    <div style={styles.container}>
                        <Dialog
                            open={this.state.open}
                            title="Super Secret Password"
                            actions={standardActions}
                            onRequestClose={this.handleRequestClose}
                        >
                            1-2-3-4-5    
                        </Dialog>
                        <h1>Alex Albino - Sr. Developer</h1>
                        <sub>Web, Hardware, Software, Interactive</sub>
                        <Divider />
                        
                        <p>
                        I am currently working on a rewrite of my portfolio using Python 3, Django, and React. I also write C#, PHP, C, C++, and Java.
                        </p>
                       
                        <p>This website code is available <a href="https://github.com/zrecore/alexventure.com">on my github repository, as the alexventure.com project</a></p>
                        
                    </div>
                    <div style={styles.root}>
                        <GridList
                            cols={2}
                            cellHeight={200}
                            padding={1}
                            style={styles.gridList}
                        >
                        {tilesData.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                actionPosition="left"
                                titlePosition="top"
                                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.3) 90%,rgba(0,0,0,0) 100%)"
                                cols={tile.featured ? 2 : 1}
                                rows={tile.featured ? 2 : 1}
                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                            
                        </GridList>
                        
                    </div>
                    <div style={styles.container}>
                        <h3>Github repositories</h3>
                        <List>
                            <ListItem><RaisedButton label="ZRECore" href="https://github.com/zrecore" /></ListItem>
                            <ListItem><RaisedButton label="Femtoduino" href="https://github.com/femtoduino" /></ListItem>
                            <ListItem><RaisedButton label="Femto.io" href="https://github.com/femtoio" /></ListItem>
                            <ListItem><RaisedButton label="XTAL.io" href="https://github.com/xtalio" /></ListItem>
                        </List>
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default Main;
