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
import uuid from 'uuid';

import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import styles from './styles/BasketDialogStyles';

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
    const { fullScreen, classes, basketItems, removeFromBasket, basketTotal, basketQuantity } = this.props;
    // console.log('In Dialog: ', basketItems); // DEV
    return (
      <div>
        <Button className={classes.basketOpenButton} onClick={this.handleClickOpen}>
        <span className={classes.itemsNumber}>{ basketQuantity }</span>  
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
              return (
                <div 
                  className={classes.basketItem}
                  key={ uuid() }>
                  <div className={classes.itemWrapper}>
                    <div className={classes.itemImageContainer}>
                      <img className={classes.itemImage} src={item.images[1].src} alt="itemImage"/>
                    </div>
                    <h4 className={classes.itemName}>
                      {item.bikeName}
                    </h4>
                  </div>
                  <div className={classes.basketInfo}>
                    <span className={classes.quantity}>Qty: {item.quantity}</span>
                    <Button className={classes.removeItemButton} onClick={() => removeFromBasket(item.id)}>
                      <RemoveShoppingCart />
                    </Button>
                  </div>
                </div>
              )
            }))) : (
              <h3 className={classes.noItems}>
                You do not have any items
              </h3>
            )
          }
          </DialogContent>
          <Divider />
            <h3 className={classes.total}> Total: {`${basketTotal} $`} </h3>
          <Divider />
          <DialogActions className={classes.basketFooter}>
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
