import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ShowImage from "./ShowImage";

export default function GalleryView() {
  const [imageList, setImageList] = useState([]);

  const fetchImages = () => {
    axios.get("http://localhost:8080/images/getAll").then((response) => {
      setImageList(response.data);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex flex-wrap mx-2 mt-4">
      {imageList.map((image) => (
        <ShowImage key={image.id} data={image} />
      ))}
    </div>
  );
}
