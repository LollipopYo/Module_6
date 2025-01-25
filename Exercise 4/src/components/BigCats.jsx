import { useState } from "react";
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
  { id: 5, name: "Lion", latinName: "Panthera leo", imageUrl: "/img/lion.jpg" },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    imageUrl: "/img/snow leopard.jpeg",
  },
];

const BigCats = () => {
  // Use state to manage the list of cats and the original list
  const [catList, setCatList] = useState(cats);
  const [originalList] = useState(cats); // Store the original list to reset later

  // Function to sort cats alphabetically by name
  const sortCats = () => {
    const sortedCats = [...catList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatList(sortedCats);
  };

  // Function to reverse the cats list
  const reverseCats = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
  };

  // Function to filter cats by the 'Panthera' family
  const filterPanthera = () => {
    const pantheraCats = catList.filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setCatList(pantheraCats);
  };

  // Function to reset the list to the original list
  const resetList = () => {
    setCatList(originalList);
  };

  return (
    <div className="big-cats-container">
      <h2>Big Cats</h2>

      {/* Buttons to control sorting, filtering, and resetting */}
      <div className="controls">
        <button onClick={sortCats}>Sort Alphabetically</button>
        <button onClick={reverseCats}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera Family</button>
        <button onClick={resetList}>Reset List</button>
      </div>

      {/* Render the list of cats */}
      <ul className="cats-list">
        {catList.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
