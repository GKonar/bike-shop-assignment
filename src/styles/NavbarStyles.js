export default {
  navContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100"
  },
  nav: {
    position: "relative",
    left: "10px",
    fontFamily: 'Roboto',
    margin: "0 auto",
    width: "60%",
    height: "15vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& a": {
      fontSize: "1rem",
      fontWeight: "500",
      letterSpacing: "1px",
      textDecoration: "none",
      color: "#FFF",
      textTransform: "uppercase",
      transition: ".4s",
      "&:hover": {
        color: "#64C29E" // move to constans
      }
    }
  },
  basketContainer: {
    position: "absolute",
    right: "-15%"
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
  // mobileNavStyles
  mobileNav: {
    display: "flex",  
    paddingLeft: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    marginBottom: "3rem"
  }, 
  mobileNavMenu: {
    "& a": {
      fontSize: "1rem",
      fontWeight: "500",
      letterSpacing: "1px",
      textDecoration: "none",
      color: "black",
      textTransform: "uppercase",
    }
  },
  mobileNavItem: {
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      color: "#64C29E", // move to constans
      backgroundColor: "transparent"
    }
  },
  mobileNavIcon: {
    color: "#fff",
    fontSize: "2.5rem"
  }
}