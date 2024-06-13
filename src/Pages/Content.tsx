// import { useState } from "react";
// import ContentBody from "./ContentBody";
// import ContentHeader from "./ContentHeader";

import Form2 from "./fr2";

const Content = () => {
  // const [val, setVal] = useState(["Card1", "Card2", "Card3"]);

  return (
    <div className="grid gap-8 ">
      {/* <div className="grid grid-rows-[auto_1fr] gap-4 ">
        <ContentHeader v={val.length} />
        <ContentBody
          items={val}
          onClear={() => setVal([])}
          onAdd={() => setVal(["Card1", "Card2", "Card3"])}
        />
      </div>
      <div> */}
      {/* <Form /> */}
      <Form2 />
    </div>
  );
};

export default Content;
