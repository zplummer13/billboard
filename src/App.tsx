import React, { useState } from "react";
import SoundButton from "./SoundButton";
import Welcome from "./Welcome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import dad from './audio/dad.mp3';
import hardbraking from './audio/hard-braking.mp3';
import lime from './audio/lime.mp3';
import peppers from './audio/peppers.mp3';
import spotify from './audio/spotify.mp3';
import triplethreat from './audio/triple-threat.mp3';
import unique from './audio/unique.mp3';
import wildcat from './audio/wildcat.mp3';
import winning from './audio/winning.mp3';
import working from './audio/working.mp3';

function App() {
    const [welcomeClicked, setWelcomeClicked] = useState(false);

    const iconClassName = "text-blue-900 h-14 lg:h-32"

    const buttonMeta = {
        buttons: [
            {
                alt: "lime",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("martini-glass-citrus")}
                    />
                ),
                link: lime,
            },
            {
                alt: "pepper monologue",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("pepper-hot")}
                    />
                ),
                link: peppers,
            },
            {
                alt: "that's unique",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("face-meh")}
                    />
                ),
                link: unique,
            },
            {
                alt: "winning",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("trophy")}
                    />
                ),
                link: winning,
            },
            {
                alt: "working",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("thumbs-up")}
                    />
                ),
                link: working,
            },
            {
                alt: "wildcat",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("paw")}
                    />
                ),
                link: wildcat,
            },
            {
                alt: "hard braking",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("car-on")}
                    />
                ),
                link: hardbraking,
            },
            {
                alt: "alexa play bills poolside playlist",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("volume-high")}
                    />
                ),
                link: spotify,
            },
            {
                alt: "triple threat",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("clapperboard")}
                    />
                ),
                link: triplethreat,
            },
            {
                alt: "I Dad it",
                ico: (
                    <FontAwesomeIcon
                        className={iconClassName}
                        icon={solid("user-tie")}
                    />
                ),
                link: dad,
            },
        ],
    };
    return (
        <div className="h-screen">
            {welcomeClicked ? (
                <div className="h-screen bg-gradient-to-t from-sky-900 to-blue-900 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-8">
                    {buttonMeta.buttons.map((buttonMeta) => {
                        return <SoundButton buttonInfo={buttonMeta} />;
                    })}
                </div>
            ) : (
                <Welcome setWelcomeClicked={setWelcomeClicked} />
            )}
        </div>
    );
}

export default App;
