import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './styles/WorkStyles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Work extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.work }>
        <Dialog
          open={ this.state.open }
          TransitionComponent={Transition}
          keepMounted
          onClose={ this.handleClose }
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Hello stranger 💚"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {/* eslint-disable-next-line */ }
              This route is currently in progress. Enjoy rest of the shop. <span>🤩</span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to='/'>
              <Button onClick={ this.handleClose } color="primary">
                Cool
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Work);