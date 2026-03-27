const DollarCard = ({
  name,
  buyPrice,
  sellPrice,
  buyVariation,
  sellVariation,
  isHighlighted = false,
}) => {
  const getVariationClass = (variation) => {
    if (variation > 0) return "text-green-500";
    if (variation < 0) return "text-red-500";
    return "";
  };

  if (isHighlighted) {
    return (
      <div className="overflow-auto rounded-xl border border-slate-800 min-h-[120px]">
        <div className="flex flex-col justify-center items-center gap-1 mt-5">
          <p className="text-2xl mb-3">{name}</p>
          <div className="flex justify-around w-full">
            <p className="text-lg font-medium text-[#CEA855]">COMPRA</p>
            <p className="text-lg font-medium text-[#CEA855]">VENTA</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xl">{buyPrice ? `$${buyPrice}` : "-"}</p>
            <p className="text-xl">{sellPrice ? `$${sellPrice}` : "-"}</p>
          </div>
          <div className="flex justify-around w-full mb-2">
            <p className={`text-xs ${getVariationClass(buyVariation)}`}>
              {buyVariation !== null ? `${buyVariation}%` : "-"}
            </p>
            <p className={`text-xs ${getVariationClass(sellVariation)}`}>
              {sellVariation !== null ? `${sellVariation}%` : "-"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-auto rounded-xl border border-slate-800">
      <div className="flex justify-between m-3 items-center">
        <div>
          <p className="text-xl">{name}</p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#CEA855] text-[10px]">COMPRA</p>
            <p>{buyPrice ? `$${buyPrice}` : "-"}</p>
            <p className={`text-[12px] ${getVariationClass(buyVariation)}`}>
              {buyVariation !== null ? `${buyVariation}%` : "-"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#CEA855] text-[10px]">VENTA</p>
            <p>{sellPrice ? `$${sellPrice}` : "-"}</p>
            <p className={`text-[12px] ${getVariationClass(sellVariation)}`}>
              {sellVariation !== null ? `${sellVariation}%` : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollarCard;
