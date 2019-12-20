import welcomePageImage from '../assets/images/welcome-page.png';

export default {
    root: {
      backgroundImage: `url(${welcomePageImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "100vh",
    },
    welcomeContainer: {
      height: "calc(100% - 15vh)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    welcomeText: {
      width: "60%",
      padding: "2rem",
      paddingBottom: "3rem",
      marginBottom: "6rem",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: "#FFF",
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "1.6",
      borderRadius: "5px"
    },
    header: {
      textAlign: "center"
    },
    link: {
      textDecoration: "none"
    },
    button: {
      padding: ".8rem 2.5rem",
      backgroundColor:  "rgba(0, 0, 0, 0.8)",
      color: "#64c29e",
      letterSpacing: "1px",
      borderRadius: "0px",
      "&:hover": {
        backgroundColor:  "rgba(0, 0, 0, 0.8)",
      }
    }
}