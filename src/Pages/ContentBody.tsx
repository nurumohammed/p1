interface props {
  items: string[];
  onClear: () => void;
  onAdd: () => void;
}
const ContentBody = ({ items, onClear, onAdd }: props) => {
  return (
    <div className="flex items-center justify-center gap-">
      <div className="bg-red-200/50 flex  h-80 w-96 text-4xl border-l-4 justify-center text-lime-600 gap-8 ">
        Navbar
        <div className=" bg-red- 600   text-2xl h-40 w-full ">
          {items.map((item, index) => (
            <div key={index} className=" ">
              {item}
            </div>
          ))}
          <div>
            {items.length > 0 ? (
              <button
                className="bg-gray-950/90 hover:*: text-white mt-4  p-1 w-full"
                onClick={onClear}
              >
                Remove
              </button>
            ) : (
              <button
                className="bg-gray-950/90 hover:*: text-white mt-4  p-1 w-full"
                onClick={onAdd}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
