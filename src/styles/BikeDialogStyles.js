export default {
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
    color: "#fff",
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