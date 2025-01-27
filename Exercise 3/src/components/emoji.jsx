
import { useState } from "react";

const Emoji = () => {
 
  const [isHappy, setIsHappy] = useState(true);

 
  const toggleMood = () => {
    setIsHappy((prevState) => !prevState);
  };

  return (
    <div>
 
      <div style={{ fontSize: "50px" }}>{isHappy ? "😊" : "😞"}</div>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
