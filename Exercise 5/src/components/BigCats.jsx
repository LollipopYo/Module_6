
import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

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
  const [catList, setCatList] = useState(cats);
  const [originalList] = useState(cats); // Store the original list for reset functionality

  // Function to add a new cat
  const addCat = (newCat) => {
    setCatList((prevCats) => [...prevCats, newCat]);
  };

  // Function to delete a cat by id
  const deleteCat = (catId) => {
    setCatList((prevCats) => prevCats.filter((cat) => cat.id !== catId));
  };

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

      {/* AddCatForm to add new cats */}
      <AddCatForm addCat={addCat} />

      {/* Buttons for sorting, reversing, and filtering */}
      <div className="controls">
        <button onClick={sortCats}>Sort Alphabetically</button>
        <button onClick={reverseCats}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera Family</button>
        <button onClick={resetList}>Reset List</button>
      </div>

      {/* Render the list of cats */}
      <ul className="cats-list">
        {catList.map((cat) => (
          <li key={cat.id}>
            <SingleCat cat={cat} />
            <button onClick={() => deleteCat(cat.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
