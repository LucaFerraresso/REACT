//chiamata fetch pagina-one,richiedo  all products
const getProductsList = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("error", error);
  }
};

export default getProductsList;
