import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const DetailCarousel = ({ photo }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          // eslint-disable-next-line react/prop-types
          currentSlider === photo.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      <div
        className="w-full h-80 md:h-[450px]  flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear !object-fill"
        style={{ backgroundImage: `url(${photo[currentSlider]})` }}
      >
        {/* text container here */}
        {/* <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div> */}
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {/* {photo.map((photoUrl, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={photoUrl}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 object-contain bg-black/20 ${currentSlider === inx ? "border-2 border-black p-px" : ""
              } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={photoUrl}
          />
        ))} */}
      </div>
    </>
  );
};

export default DetailCarousel;
