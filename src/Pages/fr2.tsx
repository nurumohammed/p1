import { FieldValues, useForm } from "react-hook-form";

const Form2 = () => {
  const { register, handleSubmit } = useForm();
  const onsubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="bg-blue-950 text-white p-4 flex justify-center">
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <p className="text-2xl">Personal Information</p>
        <p className="text-xl pb-10">
          Use a permanent address where you can receive mail
        </p>
        <div>
          <div className="bg-cyan- 300 grid grid-cols-[auto_1fr] gap-10">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl pb-4">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                name="name"
                className="p-2 rounded-md w-96 bg-slate-500/90 hover:border-none shadow-sm shadow-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl pb-4">
                Age
              </label>
              <input
                {...register("age")}
                type="number"
                id="age"
                name="age"
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
