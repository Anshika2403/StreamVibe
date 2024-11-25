import React from "react";

function Heading({
  hsize = "text-xl md:text-2xl",
  psize = "text-sm md:text-sm",
  hclassName = "",
  pclassName = "",
  hcont,
  pcont,
}) {
  return (
    <div className="pb-5">
      <h3 className={`${hsize} text-white font-bold ${hclassName}`}>{hcont}</h3>
      <p className={`${psize} text-pgray ${pclassName} py-2`}>{pcont}</p>
    </div>
  );
}

export default Heading;
