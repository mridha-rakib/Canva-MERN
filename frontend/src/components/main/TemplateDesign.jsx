const TemplateDesign = () => {
  return (
    <>
      {[1, 2, 3, 4].map((d, i) => (
        <div
          key={i}
          className="group  w-full rounded-md overflow-hidden bg-[#ffffff12]"
        >
          <img
            className="w-full h-full rounded-md"
            src="../../../Daffodil_University.png"
            alt=""
          />
        </div>
      ))}
    </>
  );
};

export default TemplateDesign;
