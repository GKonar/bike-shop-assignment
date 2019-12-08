import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/styles';
import shopProducts from './shopProducts';

import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const styles = {
  basket: {
    fontSize: "2.5rem",
    transition: ".4s",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#64C29E",
      cursor: "pointer"
    }
  },
  basketOpenButton: {
    width: "60px;",
    height: "60px;",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  itemsNumber: {
    margin: ".2rem",
    color: "#FFF"
  }, 
  basketItem: {
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemImageContainer: {
    width: "50px",
    height: "50px"
  },
  itemImage: {
    width: "100%"
  },
  itemName: {

  }, 
  numOfItems: {

  }
}

class ResponsiveDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen, classes, basketItems } = this.props;
    console.log('In Dialog: ', basketItems);
    return (
      <div>
        <Button className={classes.basketOpenButton} onClick={this.handleClickOpen}>
        <span className={classes.itemsNumber}>{basketItems.length}</span>  
        <ShoppingBasket 
            className={classes.basket}
          />
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Your Basket"}</DialogTitle>
          <Divider />
          <DialogContent>
          {/* For development */}
          <div className={classes.basketItem}>
            <div className={classes.itemImageContainer}>
              <img className={classes.itemImage} src={shopProducts[0].images[1].img} alt="itemImage"/>
            </div>
            <p className={classes.itemName}>
              Vintage Oliva
            </p>
            <span className={classes.numOfItems}> Pcs. 1</span>
          </div>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
