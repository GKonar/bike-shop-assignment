import faqImage from '../assets/images/black_white.jpeg';

import sizes from './sizes';

export default {
  faq: {
    backgroundImage: `url(${faqImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    filter: "brightness(100%)",
    position:"relative",
  },
  faqHeader: {
    color: "#64c29e",
    width: "100%",
    marginLeft: "2rem",
    [sizes.down('md')]: {
      textAlign: "center"
    },
  },
  faqList: {
    width: "60%",
    height: "100%",
    margin: "0 auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",  
    flexWrap: "wrap",
    justifyContent: "center", 
    overflow: "scroll",
    [sizes.down('md')]: {
      width: "95%",
    },
  },
  faqListItem: {
    color: "#fff",
    width: "40%",
    padding: "0 1rem",
    fontSize: ".9rem",
    [sizes.down('md')]: {
      width: "80%",
      minWidth: "250px",
      padding: 0,
    },
  },
  faqListItemHeader: {
    color: "#64c29e"
  },
  faqGoBack: {
    position: "fixed",
    left: "5%",
    top: "5%",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: 400,
    padding: "1rem 2rem",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    transition: ".2s",
    letterSpacing: "1px",
    [sizes.down('md')]: {
      top: "2%"
    },
    "&:hover" : {
      color: "#64c29e"
    },
  }
}