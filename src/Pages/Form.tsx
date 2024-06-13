import { FormEvent, useState } from "react";
const Form = () => {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    ZIP: ""
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, email: e.target.value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerson({ ...person, country: e.target.value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerson({ ...person, address: e.target.value });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, city: e.target.value });
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, state: e.target.value });
  };

  const handleZIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, ZIP: e.target.value });
  };

  return (
    <div className="bg-blue-950 text-white p-4 flex justify-center">
      <form action="" onSubmit={handleSubmit}>
        <p className="text-2xl">Personal Information</p>
        <p className="text-xl pb-10">
          Use a permanent address where you can receive mail
        </p>
        <div>
          <div className="bg-cyan- 300 grid grid-cols-[auto_1fr] gap-10">
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

          <div className="grid">
            <label htmlFor="" className="text-xl pb-4 pt-5">
              Email address
            </label>
            <input
              onChange={handleEmailChange}
              value={person.email}
              type="email"
              id="email"
              className="p-2 rounded-md w-2/3 bg-slate-500/90 shadow-sm shadow-white"
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="" className="text-xl pt-4">
              Country
            </label>
            <select
              onChange={handleCountryChange}
              value={person.country}
              id="country"
              name="country"
              className="p-2 absolute top-0 mt-12 rounded-md w-96 bg-slate-500/90 hover:border-none shadow-sm shadow-white"
            >
              <option value="" disabled>
                select an option
              </option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Ethiopia">Ethiopia</option>
            </select>
          </div>
          <div className="flex flex-col relative mt-10 ">
            <label htmlFor="" className="text-xl pt-4">
              Street address
            </label>
            <select
              onChange={handleAddressChange}
              value={person.address}
              id="address"
              name="address"
              className="p-2 absolute top-0 mt-12 rounded-md w-full bg-slate-500/90 hover:border-none shadow-sm shadow-white"
            >
              <option value="" disabled>
                select an option
              </option>
              
              <option value="kombolcha">Kombolcha</option>
              <option value="addis-ababa">Addis Ababa</option>
              <option value="hawassa">Hawassa</option>
              <option value="gondar">Gondar</option>
            </select>
          </div>
          <div>

          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl pt-4">
                City
              </label>
              <input
                onChange={handleCityChange}
                value={person.city}
                type="text"
                id="city"
                name="city"
                className="p-2 rounded-md w-full bg-slate-500/90 hover:border-none shadow-sm shadow-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl pt-4">
                State/Province
              </label>
              <input
                onChange={handleStateChange}
                value={person.state}
                type="text"
                id="state"
                name="state"
                className="p-2 rounded-md w-full bg-slate-500/90 hover:border-none shadow-sm shadow-white"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl pt-4">
              ZIP/Postal Code
            </label>
            <input
              onChange={handleZIPChange}
              value={person.ZIP}
              type="text"
              id="zip"
              name="zip"
              className="p-2 rounded-md w-96 bg-slate-500/90 hover:border-none shadow-sm shadow-white"
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

export default Form;  