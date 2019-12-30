export default {
  up() {},
  down(size) {
    const sizes = {
      xxs: "350px", // iphone 5/5s/SE
      xs: "576px",
      sm: "768px",
      md: "1050px",
      lg: "1200px",
      xl: "1600px"
    }
    return `@media (max-width: ${sizes[size]})`
  }
}