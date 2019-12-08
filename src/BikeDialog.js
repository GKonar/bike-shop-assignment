import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    zIndex: 100,
    backgroundColor:  "rgba(0, 0, 0, 0.8)",
    color: "#fff"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: "1.5rem",
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit,
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor:  "rgba(0, 0, 0, 0.8)"
  },
}))(MuiDialogActions);

const styles = {
  dialogButton: {
    position: "absolute",
    zIndex: "1000",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#64c29e",
    letterSpacing: "1px",
    borderRadius: "0px",
    opacity: ".8",
    transition: ".3s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      opacity: 1
    }
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: "200px",
    maxHeight: "200px",
    margin: "1rem",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    transition: ".2s",
    "&:hover": {
      cursor: "pointer"
    }
  },
  imageModal: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 101,
    "& img": {
      opacity: 0,
      width: "100%",
      transition: ".5s"
    }
  },
  addToCartIcon: {
    fontSize: "2rem",
    color: "#000",
    transition: ".3s",
    zIndex: 102,
    "&:hover": {
      color: "#64c29e",
      transform: "scale(1.2)"
    }
  },
  button: {
    color: "transparent",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}

class BikeDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      zoomImage: false,
      currentImage: '',
    }

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.closeImage = this.closeImage.bind(this);
  }

  handleClickOpen(e) {
    e.stopPropagation();
    this.setState({ openDialog: true });
  };

  handleClose(e) {
    e.stopPropagation();
    this.setState({ openDialog: false });
  };

  openImage(id) {
    const currentImage = this.props.images.find(img => img.id === id);
    this.setState({
      zoomImage: true,
      currentImage: currentImage.img
    })
  }

  closeImage() {
    this.setState({
      zoomImage: false,
    })
    setTimeout(() => {
      this.setState({currentImage: ''})
    }, 500);
  }

  render() {
    const { classes, name, description, images, price, year } = this.props;
    const { currentImage, openDialog, zoomImage } = this.state;
  
    return (
      <div>
        <Button 
          variant="outlined" 
          onClick={this.handleClickOpen}
          className={classes.dialogButton}>
          More
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={ openDialog }
          // open={ true } // DEV
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            { name }
          </DialogTitle>
          <DialogContent className={ classes.dialogContent}>
            <div className={classes.imagesContainer}>
              {
                images.map(img => {
                  return (
                    <div
                      key={img.id} 
                      className={classes.imageContainer}>
                      <img 
                        className={classes.image} 
                        src={img.img}
                        alt="bike" 
                        onClick={() => this.openImage(img.id)}
                      />
                      <span className={classes.imageModal} >
                        <img 
                          style={{ opacity: zoomImage ? '1' : '0'}}
                          src={currentImage} 
                          alt="modalImage"
                          onClick={this.closeImage}
                          />
                      </span>
                    </div>
                  )
                })
              }
            </div>
            <h3 className={classes.name}>{ name }, first unit: { year } </h3>
            <Typography gutterBottom> 
              { description }
            </Typography>
            <h3 className={classes.price}>Price: { price }</h3>
          </DialogContent>
          <DialogActions>
            <Button 
              className={classes.button} 
              onClick={(e) => this.props.addToBasket(e, name, price, images)} 
              color="primary">
              <AddShoppingCart className={classes.addToCartIcon}/>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(BikeDialog);
