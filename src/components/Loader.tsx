import giftAnimation from "../assets/lotties/gift-loading.json";
import Lottie from "lottie-react";

export default function Loader(): JSX.Element {
  return (
    <div className="flex items-center justify-center flex-col h-44">
      <Lottie
        animationData={giftAnimation}
        loop={true}
        width={100}
        height={100}
        className="flex-1"
      />
      <span className="font-semibold">
        Chargement de supers idées en cours !
      </span>
    </div>
  );
}
