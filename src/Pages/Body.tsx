import { useState } from "react";

interface props {
  val: () => void;
  time: Date;
}

const Body = ({ val, time }: props) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    address: {
      phone: "",
      email: "",
    },
  });
  const updatePerson = () => {
    setPerson({
      firstName: "John",
      lastName: "Doe",
      address: {
        phone: "1234567890",
        email: "johndoe@example.com",
      },
    });
  };
  const [tags, setTags] = useState(["nuru", "ahmed", "oumer", "abdelkerim"]);
  const handleAdd = () => {
    setTags([...tags, "mohamed"]);
  };
  const handleRemove = () => {
    setTags(tags.filter((tag) => tag !== "nuru"));
  };
  const handleUpdate = () => {
    setTags(tags.map((tag) => (tag === "oumer" ? "selahudin" : tag)));
  };
  const handlePageRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col   gap-20 mt-2 ">
      <div className="flex bg-blue- 500  justify-between">
        <button
          type="submit"
          className="bg-blue-200 p-2 rounded-md shadow-lg hover:bg-black hover:text-white grid place-content-center"
          onClick={val}
        >
          CLICK HERE TO CONTINUE
        </button>

        <div className="bg-black shadow-lg hover:bg-cyan-950 hover:text-white rounded-lg text-center text-4xl">
          <span className="font-bold text-white">
            {time.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <div className="">
        <div className="text-black italic bg-red- 500 text-center grid grid-cols-2 gap-4">
          <p>First Name:{person.firstName}</p>
          <p>LastName:{person.lastName}</p>
          <p>Phone:{person.address.phone}</p>
          <p>Address:{person.address.email}</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg- yellow-300 flex items-center justify-center ">
            <button
              type="submit"
              onClick={updatePerson}
              className="p-2 bg-blue-400 shadow-lg  pl-4 pr-4 "
            >
              update
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-gray-950  shadow-lg h-96 m-8 ">
            <h1 className="bg-white flex rounded-sm items-center justify-center p-2 text-4xl shadow-2xl m-4 ml-96 mr-96 hover:bg-gray-500/50 ">
              Cards
            </h1>
            <div className="flex bg-yellow-900 justify-between items-center">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className=" bg-blue-100 p-2 pl-4 pr-4 m-2 rounded-lg text-black"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-100 p-4 pl-16 pr-16 m-2 rounded-lg text-black shadow-sm shadow-black"
                onClick={handleAdd}
              >
                Add{" "}
              </button>
              <button
                type="submit"
                className="bg-blue-100 p-4 pl-16 pr-16 m-2 rounded-lg text-black shadow-sm shadow-black"
                onClick={handleRemove}
              >
                Remove
              </button>
              <button
                type="submit"
                className="bg-blue-100 p-4 pl-16 pr-16 m-2 rounded-lg text-black shadow-sm shadow-black"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                type="submit"
                className="bg-blue-100 p-4 pl-16 pr-16 m-2 rounded-lg text-black shadow-sm shadow-black"
                onClick={handlePageRefresh}
              >
                Refresh Page
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-gray-950  shadow-lg h-96 m-8">
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
