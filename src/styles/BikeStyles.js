import sizes from './sizes';

export default { 
  bike: {
    position: "relative",
    width: "250px", // 300px responsive
    height: "300px", // 350px responsive
    overflow: "hidden",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.2)" , 
    margin: "1rem",
    cursor: "pointer",
    "&:hover $basketContainer": {
      opacity: "1"
    }
  },
  price: {
    position: "absolute",
    top: "20%",
    right: "0",
    fontSize: "2rem",
    letterSpacing: "1px",
    fontWeight: 500,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: ".5rem",
    color: "#FFF"
  },
  imageContainer: {
    width: "300px"

  },
  image: {
    width: "100%",
    height: "100%",
  },
  basketContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: ".5rem 1rem",
    backgroundColor: "#64C29E",
    transition: ".5s",
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    [sizes.down('lg')]: {
      opacity: 1
    },
  },
  basketButton: {
    fontSize: "2rem"
  }, 
}