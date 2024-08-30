import { useState } from "react";
import logo1 from "../image/144p.jpg";
import logo2 from "../image/360p.jpg";
import logo3 from "../image/720p.jpg";
import logo4 from "../image/1280p.jpg";
import logo5 from "../image/logo5.jpg";
import "./home.css";
const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [image, setImage] = useState(logo3);

  // Hàm xử lý sự kiện thay đổi giá trị select
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    switch (event.target.value) {
      case "option1":
        setImage(logo1);
        break;
      case "option2":
        setImage(logo2);
        break;
      case "option3":
        setImage(logo3);
        break;
      case "option4":
        setImage(logo4);
        break;
      case "option5":
        setImage(logo5);
        break;
    }
  };

  console.log(selectedOption);
  console.log(logo1);
  return (
    <div class="container">
      <h3>Hiển thị thế giới</h3>
      <label for="custom-select">Chọn một tùy chọn:</label>
      <select
        id="custom-select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="option1">144p</option>
        <option value="option2">360p</option>
        <option value="option3">720p</option>
        <option value="option4">1280p</option>
        <option value="option5">4k pixel</option>
      </select>

      <div className="wrap-image">
        <img src={image}></img>
      </div>

      {selectedOption == "option5" && (
        <div style={{ marginTop: "12px" }}>
          <h3 className="text">Thế giới của anh là em </h3>
        </div>
      )}
    </div>
  );
};

export default HomePage;
