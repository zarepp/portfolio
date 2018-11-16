import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import react from './../images/react.png';
import nodejs from './../images/nodejs.png';
import linux from './../images/linux.png';
import docker from './../images/docker.png';
import gmail from './../images/gmail.png';
import linkedin from './../images/linkedin.png';
import github from './../images/github.png';

const resumeURL = "https://drive.google.com/uc?authuser=0&id=1JUYISK7xhqpSzZI3i9nWJuBGDYwaQKIO&export=download";

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  appBarText: {
    marginLeft: 100,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    marginTop: 70,
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 800,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 30,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const cards = [1, 2, 3, 4];

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar color="#fff" position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.appBarText} variant="h6" color="inherit" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Zharif Othman
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Backend Software Engineer, Full-Stack Developer, Node.js Developer
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button href={resumeURL} variant="outlined" color="primary">
                    <CloudDownloadIcon />
                    &nbsp;&nbsp;Resume PDF
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <Avatar
            alt="Adelle Charles"
            src={react}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Avatar
            alt="Adelle Charles"
            src={nodejs}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Avatar
            alt="Adelle Charles"
            src={linux}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Avatar
            alt="Adelle Charles"
            src={docker}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <div className={classes.root}>
          <Chip
            avatar={<Avatar alt="" src={gmail} />}
            label="zharifothman92@gmail"
            onClick={handleClick}
            className={classes.chip}
          />
          <Chip
            avatar={<Avatar alt="" src={linkedin} />}
            label="LinkedIn"
            onClick={handleClick}
            className={classes.chip}
          />
          <Chip
            avatar={<Avatar alt="" src={github} />}
            label="zarepp"
            onClick={handleClick}
            className={classes.chip}
          />
        </div>
        
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Kuala Lumpur, Malaysia 
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);