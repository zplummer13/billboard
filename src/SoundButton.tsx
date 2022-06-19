import React from "react";
import useSound from "use-sound";

type SoundButtonProps = {
    buttonInfo: {
        alt: string;
        ico: JSX.Element;
        link: any;
    };
};


function SoundButton(props: SoundButtonProps) {
    const [play] = useSound(props.buttonInfo.link, { interrupt: true });

    return (
        <div
            className="bg-sky-100 rounded-lg border-2 border-sky-200 shadow-lg shadow-inner text-center flex items-center justify-center"
            aria-label={props.buttonInfo.alt}
            onClick={() => play()}
        >
            {props.buttonInfo.ico}
        </div>
    );
}

export default SoundButton;
function playLink(link: string): void {


    console.log(link);
}
