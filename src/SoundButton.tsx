import React from "react";

type SoundButtonProps = {
  buttonInfo: {
    alt: string;
    ico: JSX.Element;
    link: string;
  };
};
function SoundButton(props: SoundButtonProps) {
  return (
    <div
      className="bg-sky-100 rounded-lg border-2 border-sky-200 shadow-lg shadow-inner text-center p-2 flex items-center justify-center"
      aria-label={props.buttonInfo.alt}
      onClick={(e) => playLink(props.buttonInfo.link)}
    >
      {props.buttonInfo.ico}
    </div>
  );
}

export default SoundButton;
function playLink(link: string): void {
  console.log(link);
}
