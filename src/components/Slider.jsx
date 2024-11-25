import React, { useState, useEffect } from "react";

function Slider({ scrollRef, totalItems }) {
  // console.log(totalItems)
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = Math.floor(scrollRef.current?.clientWidth / 208);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const moveNext = () => {
    const box = scrollRef.current;
    const width = box.clientWidth;
    box.scrollLeft += width;
  };

  const movePrev = () => {
    const box = scrollRef.current;
    const width = box.clientWidth;
    box.scrollLeft -= width;
  };

  useEffect(() => {
    const box = scrollRef.current;

    const updateActiveIndex = () => {
      const width = box.clientWidth;
      const newIndex = Math.ceil(box.scrollLeft / width);
      setActiveIndex(newIndex);
    };

    box.addEventListener("scroll", updateActiveIndex);

    return () => {
      box.removeEventListener("scroll", updateActiveIndex);
    };
  }, [scrollRef]);

  return (
      <div className="w-2/4 md:w-1/4 lg:w-32 flex items-center p-2 rounded-lg bg-black-nav border border-nav-bor justify-around">
        <div className="w-10 h-10 p-2 me-1 border rounded-md bg-fbox border-nav-bor cursor-pointer ">
        <img
          src="https://img.icons8.com/?size=100&id=15815&format=png&color=ffffff"
          onClick={movePrev}
          className="w-6"
          alt="Previous"
        />
        </div>
        <div className="hidden md:flex">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`h-[2px] w-3 mx-1 ${
                activeIndex === index ? "bg-butred" : "bg-slide"
              }`}
            ></span>
          ))}
        </div>
        <div className="w-10 h-10 p-2 border rounded-md bg-fbox border-nav-bor cursor-pointer ">
        <img
          src="https://img.icons8.com/?size=100&id=15816&format=png&color=ffffff"
          onClick={moveNext}
          className="w-6"
          alt="Next"
        />
        </div>
      </div>
  );
}

export default Slider;
