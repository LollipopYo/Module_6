/* eslint-disable react/prop-types */

const Greeting = ({ name, children }) => {
  const greetingName = name || "World";
  return (
    <div>{children ? <p>{children}</p> : <p>Hello {greetingName}</p>}</div>
  );
};

export default Greeting;
