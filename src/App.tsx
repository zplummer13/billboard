import React, { useState } from "react";
import SoundButton from "./SoundButton";
import Welcome from "./Welcome";

function App() {
  const [welcomeClicked, setWelcomeClicked] = useState(false);
  return (
    <>
      {welcomeClicked ? (
        <div className="h-screen p-6 bg-gradient-to-t from-blue-900 to-blue-600 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
          <SoundButton></SoundButton>
        </div>
      ) : (
        <Welcome setWelcomeClicked={setWelcomeClicked} />
      )}
    </>
  );
}

export default App;
