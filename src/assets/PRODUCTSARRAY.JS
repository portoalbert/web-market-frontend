import tempPic from "../img/placeholder.png";

const PRODUCTSARRAY = [
  {
    name: "Product",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product1",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product2",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product3",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product4",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
  {
    name: "Product5",
    price: 9.99,
    description: "Placeholder description",
    image: tempPic,
  },
];

const getArray = () => {
  return PRODUCTSARRAY;
};

exports.getArray = getArray;
