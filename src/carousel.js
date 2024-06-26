import React, { useState, useRef } from "react";

const Carousel = ({ projects }) => {
  const [currentP, setCurrentP] = useState(0);
  const containerRef = useRef(null);

  const prevP = () => {
    setCurrentP((prevP) => {
      const newIndex = prevP === 0 ? projects.length - 1 : prevP - 1;
      return newIndex;
    });
  };

  const nextP = () => {
    setCurrentP((prevP) => {
      const newIndex = prevP === projects.length - 1 ? 0 : prevP + 1;
      return newIndex;
    });
  };

  // Directly manipulate the transform property using JavaScript
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
      containerRef.current.style.transform = `translateX(-${currentP * 100}%)`;
    }
  }, [currentP]);

  React.useEffect(() => {
    const interval = setInterval(nextP, 5000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-full  mx-auto mt-2">
      <div className="overflow-hidden">
        <div className="flex" ref={containerRef}>
          {projects.map((project, index) => (
            <div className="min-w-full" key={index}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full h-96 rounded-lg md:h-auto md:w-48"
                  src={project.src}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow"
        onClick={prevP}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow"
        onClick={nextP}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
