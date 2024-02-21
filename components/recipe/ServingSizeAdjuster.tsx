const ServingSizeAdjuster = ({ servingSize, setServingSize }) => {
  return (
    <div className="rounded-[10px] bg-black flex items-center justify-between py-2.5 px-5 text-[20px] text-white">
      <button onClick={() => setServingSize(Math.max(1, servingSize - 1))}>
        -
      </button>
      <span>{servingSize}</span>
      <button onClick={() => setServingSize(servingSize + 1)}>+</button>
    </div>
  );
};

export default ServingSizeAdjuster;
