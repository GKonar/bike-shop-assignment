import sizes from './sizes';

export default {
  contact: {
    backgroundColor: "#fff",
    width: "600px",
    padding: "1rem 2rem",
    borderRadius: "5px",
    zIndex: 50,
    [sizes.down("md")]: {
      padding: ".5rem 1rem",
    },
    [sizes.down("xs")]: {
      padding: ".5rem 1rem",
    },
    [sizes.down("xxs")]: {
      padding: ".3rem",
    },
  },
  contactHeader: {
    color: "#64C29E",
    letterSpacing: "1px",
    [sizes.down("xs")]: {
      fontSize: "1rem"
    },
  },
  paragraph: {
    margin: "1rem 2rem",
    fontWeight: 500,
    [sizes.down("xs")]: {
      margin: ".5rem 1rem",
      fontSize: ".8rem"
    },
  },
  contactForm: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    margin: ".2rem 2rem",
    [sizes.down("sm")]: {
      margin: ".2rem .5rem",
    },
    [sizes.down("xxs")]: {
      margin: ".1rem",
    },
  },
  textArea: {
    margin: ".2rem 2rem",
    [sizes.down("sm")]: {
      margin: ".2rem .5rem",
    },
    [sizes.down("xxs")]: {
      margin: ".1rem",
    },
  },
  submitButton: {
    width: "40%",
    margin: "1rem auto",
    padding: "1rem",
    [sizes.down("sm")]: {
      margin: ".5rem auto",
      padding: ".5rem"
    },
    [sizes.down("xxs")]: {
      margin: ".3rem auto",
      padding: ".3rem"
    },
  }
}