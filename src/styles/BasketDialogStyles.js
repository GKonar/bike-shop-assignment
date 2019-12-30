export default  {
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
    width: "100%",
    minWidth: "500px", 
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
  basketInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  quantity: {
    margin: "0 .3rem"
  }, 
  total: {
    marginLeft: "1.5rem",
    position: "relative",
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: "-1rem",
      left: 0,
      width: '50%',
      height: '2px',
      display: 'block',
      background: 'rgba(0, 0, 0, 0.2)',
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        top: "-1rem",
        left: 0,
        width: '92%',
        height: '2px',
        display: 'block',
        background: 'rgba(0, 0, 0, 0.2)'
    },
  },
  wordTotal: {
    textTransform: "uppercase",
    fontWeight: 400,
    fontSize: ".9rem"
  },
  removeItemButton: {
    minWidth: "40px;",
    minHeight: "40px;",
    borderRadius: "50%",
  },
  noItems: {
    width: "500px"
  },
  shippingInfo: {
    fontSize: ".8rem",
    fontWeight: 700,
    color: "#64C29E", 
    marginLeft: "1.5rem",
  },
  pay: {
    width: "180px",
    position: "absolute",
    bottom: ".5rem",
    left: ".5rem"
  }
}