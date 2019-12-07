
import oliva1 from './assets/images/bike_1.png'
import oliva2 from './assets/images/bike_1a.png'
// import boriosa1 from './assets/images/bike_2.png'
// import boriosa2 from './assets/images/bike_2a.png'
// import hulot1 from './assets/images/bike_3.png'
// import hulot2 from './assets/images/bike_3a.png'
// import bagio1 from './assets/images/bike_4.png'
// import bagio2 from './assets/images/bike_4a.png'
// import ceviche1 from './assets/images/bike_5.png'
// import ceviche2 from './assets/images/bike_5a.png'
// import praga1 from './assets/images/bike_6.jpeg'
// import praga2 from './assets/images/bike_6a.png'
import uuid from 'uuid'


export default [
  {
    bikeName: "Vintage Oliva",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti blanditiis eius labore ad placeat atque. Magni reprehenderit iusto nesciunt porro rem. Veritatis beatae nobis cumque dolor velit, aut amet",
    price: "999$",
    year: 1988,
    images: [
      {
        img: oliva1,
        id: uuid()
      },
      {
        img: oliva2,
        id: uuid()
      } 
    ]    
  },
  {
    bikeName: "La Boriosa",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti blanditiis eius labore ad placeat atque. Magni reprehenderit iusto nesciunt porro rem. Veritatis beatae nobis cumque dolor velit, aut amet",
    price: "1009$",
    year: 1960,
    images: [
      {
        img: oliva1,
        id: uuid()
      },
      {
        img: oliva2,
        id: uuid()
      } 
    ]   
  },
  {
    bikeName: "M. Hulot",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti blanditiis eius labore ad placeat atque. Magni reprehenderit iusto nesciunt porro rem. Veritatis beatae nobis cumque dolor velit, aut amet",
    price: "1299$",
    year: 1972,
    images: [
      {
        img: oliva1,
        id: uuid()
      },
      {
        img: oliva2,
        id: uuid()
      } 
    ]   
  },
  {
    bikeName: "Pelagio Bagio",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti blanditiis eius labore ad placeat atque. Magni reprehenderit iusto nesciunt porro rem. Veritatis beatae nobis cumque dolor velit, aut amet",
    price: "799$",
    year: 1986,
    images: [
      {
        img: oliva1,
        id: uuid()
      },
      {
        img: oliva2,
        id: uuid()
      } 
    ]   
  },
  {
    bikeName: "Dragio Ceviche",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti blanditiis eius labore ad placeat atque. Magni reprehenderit iusto nesciunt porro rem. Veritatis beatae nobis cumque dolor velit, aut amet",
    price: "899$",
    year: 1975,
    images: [
      {
        img: oliva1,
        id: uuid()
      },
      {
        img: oliva2,
        id: uuid()
      } 
    ]   
  },
  {
    bikeName: "Romet Praga",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti blanditiis eius labore ad placeat atque. Magni reprehenderit iusto nesciunt porro rem. Veritatis beatae nobis cumque dolor velit, aut amet",
    price: "1699$",
    year: 1953,
    images: [
      {
        img: oliva1,
        id: uuid()
      },
      {
        img: oliva2,
        id: uuid()
      } 
    ]   
  }
]