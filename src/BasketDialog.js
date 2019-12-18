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

import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const styles = {
  basketHeader: {
    backgroundColor:  "rgba(0, 0, 0, 0.8)",
    color: "#fff"
  },
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
  itemWrapper: {
    display: "flex"
  },
  itemImageContainer: {
    width: "50px",
    height: "50px",
    marginRight: "1rem"
  },
  itemImage: {
    width: "100%"
  },
  itemName: {

  }, 
  numOfItems: {

  }, 
  noItems: {
    width: "400px"
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
          <DialogTitle className={classes.basketHeader} id="responsive-dialog-title">{"Your Basket"}</DialogTitle>
          <Divider />
          <DialogContent>
          {
            basketItems.length > 0 ? (
            basketItems.map((item => {
              // console.log(item); // DEV
              return (
                <div 
                  className={classes.basketItem}
                  key={item.id}>
                  <div className={classes.itemWrapper}>
                    <div className={classes.itemImageContainer}>
                      <img className={classes.itemImage} src={item.images[1].src} alt="itemImage"/>
                    </div>
                    <h4 className={classes.itemName}>
                      {item.name}
                    </h4>
                  </div>
                  <span className={classes.numOfItems}> Pcs. {item.amount}</span>
                </div>
              )
            }))) : (
              <h3 className={classes.noItems}>
                You do not have any items
              </h3>
            )
          }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
