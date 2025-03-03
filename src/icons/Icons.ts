import { BsBank as Bank } from "react-icons/bs";
import { BsGlobe as Globe, BsChevronDown as ChevronDown } from 'react-icons/bs'
import { FaAndroid as Android, FaApple as Apple, FaLinux as Linux, FaPlaystation as Playstation, FaWindows as Windows, FaXbox as Xbox } from 'react-icons/fa'
import { GiButterfly as Butterfly, GiButterflyFlower as ButterflyFlower } from "react-icons/gi"
import { IconType } from "react-icons/lib";
import { MdPhoneIphone as Iphone } from 'react-icons/md'
import { PiButterflyLight as ButterflyLight } from "react-icons/pi"
import { SiNintendo as Nintendo } from 'react-icons/si'

const Icons: { [key: string]: IconType } = {
  Android,
  Apple,
  Bank,
  Butterfly,
  ButterflyFlower,
  ButterflyLight,
  ChevronDown,
  Globe,
  Iphone,
  Linux,
  Nintendo,
  Playstation,
  Windows,
  Xbox,
}

export default Icons