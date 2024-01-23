import hexRgb from "hex-rgb";
//@ts-expect-error missing types
import luminace from 'color-luminance';

const getTitleColor = (hexColor: string) => {

  const rgb = hexRgb(hexColor);
  const lum = luminace([rgb.red, rgb.green, rgb.blue]);
  return lum;
}

export default getTitleColor;