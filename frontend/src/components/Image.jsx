const Image = () => {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((img, i) => (
        <div
          key={i}
          className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
        >
          <img
            className="w-full h-full object-fill"
            src="http://localhost:5173/DIU_PIC.png"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
