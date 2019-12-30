import customerPageImage from '../assets/images/customer.jpeg';

export default {
  customer: {
    backgroundImage: `url(${customerPageImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  contactContainer: {
    position: "relative",
    top: "10%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "60%",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  }
}