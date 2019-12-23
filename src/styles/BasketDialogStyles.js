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
  basketInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  quantity: {

  }, 
  total: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1.5rem"
  },
  removeItemButton: {
    minWidth: "40px;",
    minHeight: "40px;",
    borderRadius: "50%",
  },
  noItems: {
    width: "400px"
  },
}