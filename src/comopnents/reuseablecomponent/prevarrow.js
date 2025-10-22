import { IoIosArrowBack } from "react-icons/io";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style,         
        display: "block",
        fontSize: "20px",
        color: "#6344C6",
        position: "absolute",
        top: "108%",
        right: "43%",
        transform: "translateY(-50%)",
        cursor: "pointer", 
        zIndex: "22"
    }}
      onClick={onClick}
    >
        <IoIosArrowBack/>
    </div>
  );
}

export default SamplePrevArrow;