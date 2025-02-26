import { BsBank as Bank } from "react-icons/bs";
import { GiButterfly as Butterfly, GiButterflyFlower as ButterflyFlower } from "react-icons/gi"
import { PiButterflyLight as ButterflyLight } from "react-icons/pi"

import { FaWindows, FaPlaystation, FaXbox, FaAndroid, FaLinux, FaApple } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons/lib";

const Icons: { [key: string]: IconType } = {
  Bank,
  Globe: BsGlobe,
  Butterfly,
  ButterflyFlower,
  ButterflyLight,
  Android: FaAndroid,
  Apple: FaApple,
  Linux: FaLinux,
  Playstation: FaPlaystation,
  Windows: FaWindows,
  Xbox: FaXbox,
  Iphone: MdPhoneIphone,
  Nintendo: SiNintendo,
}

export default Icons