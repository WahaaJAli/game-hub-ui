import { BsBank as Bank, BsGlobe as Globe, BsChevronDown as ChevronDown } from 'react-icons/bs'
import { FaAndroid as Android, FaApple as Apple, FaLinux as Linux, FaPlaystation as Playstation, FaWindows as Windows, FaXbox as Xbox } from 'react-icons/fa'
import { FaNeos as NeoGeo } from 'react-icons/fa6'
import { GiButterfly as Butterfly, GiButterflyFlower as ButterflyFlower } from 'react-icons/gi'
import { IconType } from 'react-icons/lib'
import { IoGameController as GameController } from 'react-icons/io5'
import { MdPhoneIphone as Iphone } from 'react-icons/md'
import { PiButterflyLight as ButterflyLight } from 'react-icons/pi'
import { SiAtari as Atari, SiCommodore as Commodore, SiNintendo3Ds as Nintendo3D, SiNintendo as Nintendo, SiNeovim as Neovim, SiSega as Sega } from 'react-icons/si'

const Icons: { [key: string]: IconType } = {
  Android, Apple, Atari, Bank, Butterfly, ButterflyFlower, ButterflyLight, ChevronDown, Commodore, GameController, 
  Globe, Iphone, Linux, Neovim, NeoGeo, Nintendo, Nintendo3D, Playstation, Sega, Windows, Xbox
}

export default Icons