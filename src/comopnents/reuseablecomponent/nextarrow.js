import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
        style={{ ...style,         
            display: "block",
            fontSize: "20px",
            color: "#6344C6",
            position: "absolute",
            top: "108%",
            left: "43%",
            transform: "translateY(-50%)",
            cursor: "pointer", 
            zIndex: "22"
        }}
      onClick={onClick}
    >
        <IoIosArrowForward />
    </div>
  );
}

export default SampleNextArrow