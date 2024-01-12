import React, { useState } from "react";
import axios from "axios";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(""); // Yeni durum

  const handleImage = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);

    // Seçilen dosyanın adını güncelle
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
    }
  };

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      axios
        .post("http://localhost:8080/images/add", formData)
        .then((response) => {
          console.log("Image uploaded successfully");
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
    setSelectedFileName("");
  };

  return (
    <div className="flex gap-10 items-center justify-center w-11/12 h-16 mx-auto mt-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg text-white">
      <input
        accept="image/*"
        type="file"
        onChange={(i) => handleImage(i)}
        className="hidden"
        id="file-input"
      />
      <label
        htmlFor="file-input"
        className="cursor-pointer bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-all duration-200"
      >
        {selectedFileName ? selectedFileName : "Choose Image"}
      </label>
      <button className="border p-2 rounded-lg" onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
}

export default UploadImage;
