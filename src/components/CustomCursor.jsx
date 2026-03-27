import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const sombra = document.querySelector(".cursor-sombra");
    if (!sombra) return;

    const handleMouseMove = (e) => {
      sombra.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor-sombra"></div>;
};

export default CustomCursor;
