
import SingleCat from "./SingleCat";


const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    imageUrl: "/img/Cheetah.webp",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    imageUrl: "/img/couger.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    imageUrl: "/img/jaguar.jpeg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    imageUrl: "/img/leopard.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    imageUrl: "/img/lion.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    imageUrl: "/img/snow leopard.jpeg",
  },
];

const BigCats = () => {
  return (
    <div className="big-cats-container">
      <h2>Big Cats</h2>
      <ul className="cats-list">
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
