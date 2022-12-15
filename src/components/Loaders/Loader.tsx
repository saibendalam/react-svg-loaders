import React from "react";
import AudioLoader from "./audio";
import BallTriangle from "./ballTriangle";
import Bars from "./bars";
import Circles from "./circles";
import Grid from "./grid";
import Hearts from "./hearts";
import Oval from "./oval";
import Puff from "./puff";
import Rings from "./rings";
import SpinningCircles from "./spinningsCircles";
import TailSpin from "./tailSpin";
import ThreeDots from "./threeDots";
interface IconSize {
  size?: number;
  color?: string;
  name?: string;
  height?: number;
  width?: number;
}

function Loader({
  name = "bars",
  height = 45,
  width = 45,
  color = "yellow",
}: IconSize) {
  switch (name.toLowerCase()) {
    case "bars":
      return <Bars color={color} height={height} width={width} />;
    case "audio":
      return <AudioLoader color={color} height={height} width={width} />;
    case "balltriangle":
      return <BallTriangle color={color} height={height} width={width} />;
    case "circles":
      return <Circles color={color} height={height} width={width} />;
    case "grid":
      return <Grid color={color} height={height} width={width} />;
    case "hearts":
      return <Hearts color={color} height={height} width={width} />;
    case "oval":
      return <Oval color={color} height={height} width={width} />;
    case "puff":
      return <Puff color={color} height={height} width={width} />;
    case "rings":
      return <Rings color={color} height={height} width={width} />;
    case "spinningcircle":
      return <SpinningCircles color={color} height={height} width={width} />;
    case "tailspin":
      return <TailSpin color={color} height={height} width={width} />;
    case "threedots":
      return <ThreeDots color={color} height={height} width={width} />;
    default:
      return <Hearts color={"yellow"} height={14} width={26} />;
  }
}

export default Loader;
