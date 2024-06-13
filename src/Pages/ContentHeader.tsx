interface props {
  v: number;
}
const ContentHeader = ({ v }: props) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-blue-400/50  h-16 w-96 flex  items-center  text-2xl shadow-sm shadow-black rounded-sm  ">
        Cart:{v}
      </div>
    </div>
  );
};

export default ContentHeader;
