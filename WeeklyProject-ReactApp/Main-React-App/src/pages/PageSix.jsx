const PageSix = () => {
  //voglio renderizzare l'array favorites creato in page one
  //perchè? per poterlo renderizzare devo passarlo da un altro componente
  //che lo possa prendere dallo state

  const favoritesProducts = [];
  return (
    <>
      <div className="pageSix">
        <h1>qui renderizzo i prodotti inseriti tra i preferiti</h1>
        {favoritesProducts.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
};
export default PageSix;
