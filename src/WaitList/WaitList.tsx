import React from "react";
import ImageWithOverlay from "../components/ImageWithOverlay";
import studentWithBook from "../assets/cover/student-with-laptop.png";

export default function WaitList() {
  return (
    <div>
      <div></div>
      <ImageWithOverlay source={studentWithBook} altText="Student studying hard" />
    </div>
  );
}
