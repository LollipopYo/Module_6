/* eslint-disable react/prop-types */


const SingleCat = ({ cat }) => {
  return (
    <li className="cat-item" id={`cat-${cat.id}`}>
      <h3>{cat.name}</h3>
      <p>{cat.latinName}</p>
      <img
        src={cat.imageUrl}
        alt={cat.name}
        style={{ width: "100px", height: "100px" }}
      />
    </li>
  );
};

export default SingleCat;
