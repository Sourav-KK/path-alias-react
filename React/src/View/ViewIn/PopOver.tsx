import { useState } from "react";

const PopOver = () => {
  const [toggle, setToggle] = useState(false);
  const togglePops = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button type="button" onClick={togglePops}>
        Pops
      </button>
      {toggle && <h1>Iam summoned</h1>}
    </div>
  );
};

export default PopOver;
