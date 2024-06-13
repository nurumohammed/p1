import { FormEvent, useState } from "react";

const Form2 = () => {
  const [person, setPerson] = useState({
    fname: "",
    lname: "", 
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, fname: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, lname: e.target.value });
  };

  return (
    <div className="bg-blue-950 text-white p-4 flex justify-center">
      <form action="" onSubmit={handleSubmit}>
        <p className="text-2xl">Personal Information</p>
        <p className="text-xl pb-10">
          Use a permanent address where you can receive mail
        </p>
        <div>
          <div className="bg-cyan-300 grid grid-cols-[auto_1fr] gap-10">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl pb-4">
                First name
              </label>
              <input
                onChange={handleFirstNameChange}
                value={person.fname}
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 rounded-md w-96 bg-slate-500/90 hover:border-none shadow-sm shadow-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl pb-4">
                Last name
              </label>
              <input
                onChange={handleLastNameChange}
                value={person.lname}
                type="text"
                id="LastName"
                name="lastName"
                className="p-2 rounded-md w-96 bg-slate-500/90 shadow-sm shadow-white"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-cyan-300 py-2 px-6 mt-12 rounded-lg text-lg font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
