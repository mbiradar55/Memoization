import { useEffect, useRef, useState } from "react";
import { memoizationAdd } from "./memoizationAdd";

function Add() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [count, setCount] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current = memoizationAdd();
  }, []);

  const handleClick = () => {
    const cacheResult = ref.current(first, second);
    setCount(cacheResult);
  };
  return (
    <div>
      <div> Sum is {count}</div>
      <input
        type="text"
        name="first"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type="text"
        name="second"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Add;
