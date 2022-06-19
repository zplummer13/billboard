import Dog from "./dog.png";
type WelcomeProps = {
  setWelcomeClicked: Function;
};
const Welcome = (props: WelcomeProps) => {
  return (
    <div className="h-screen flex flex-wrap flex-col justify-evenly bg-gradient-to-t from-sky-900 to-blue-900 font-Roboto ">
      <img
        className="h-2/5 max-w-lg top-5 mx-auto"
        src={Dog}
        alt="Douglas Dog Logo"
      />
      <div className="text-4xl font-bold text-center leading-normal tracking-wide mt-0 mb-2 text-sky-50 font-BungeeShade z-10">
        Welcome to BillBoard!
      </div>

      <div className="px-6 text-gray-100 font-bold z-10 text-center">
        Happy Father's Day to a man who always has something to say.
      </div>
      <button
        className="rounded-full bg-amber-400 p-2 px-6 w-2/5 text-blue-900 font-bold animate-bounce self-center z-10"
        onClick={(e) => props.setWelcomeClicked(true)}
      >
        Hell Yeah
      </button>
    </div>
  );
};
export default Welcome;
