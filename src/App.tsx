import React, { useState } from "react";
import SoundButton from "./SoundButton";
import Welcome from "./Welcome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
function App() {
  const [welcomeClicked, setWelcomeClicked] = useState(false);
  const buttonMeta = {
    buttons: [
      {
        alt: "pepper monologue",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("pepper-hot")}
          />
        ),
        link: "",
      },
      {
        alt: "triple threat",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("clapperboard")}
          />
        ),
        link: "",
      },
      {
        alt: "winning",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("trophy")}
          />
        ),
        link: "",
      },
      {
        alt: "cheaters?",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("glasses")}
          />
        ),
        link: "",
      },
      {
        alt: "wildcat",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("paw")}
          />
        ),
        link: "",
      },
      {
        alt: "john williams music",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("hat-cowboy")}
          />
        ),
        link: "",
      },
      {
        alt: "alexa play bills poolside playlist",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("volume-high")}
          />
        ),
        link: "",
      },
      {
        alt: "slippery nipple?",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("martini-glass-citrus")}
          />
        ),
        link: "",
      },
      {
        alt: "that's unique",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("face-meh")}
          />
        ),
        link: "",
      },
      {
        alt: "I Dad it",
        ico: (
          <FontAwesomeIcon
            style={{
              height: "40%",
              maxHeight: "40%",
              color: "#0D486F",
            }}
            icon={solid("user-tie")}
          />
        ),
        link: "",
      },
    ],
  };
  return (
    <>
      {welcomeClicked ? (
        <div className="h-full p-9 bg-gradient-to-t from-sky-900 to-blue-900 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {buttonMeta.buttons.map((buttonMeta) => {
            return <SoundButton buttonInfo={buttonMeta} />;
          })}
        </div>
      ) : (
        <Welcome setWelcomeClicked={setWelcomeClicked} />
      )}
    </>
  );
}

export default App;
