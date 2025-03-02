import { MdOutlineSoupKitchen } from 'react-icons/md'
import { FaCar } from 'react-icons/fa6'
import { IoMdTv } from 'react-icons/io'
import { TbAirConditioning } from 'react-icons/tb'
import { FaSwimmingPool } from 'react-icons/fa'
import { LiaHotTubSolid } from 'react-icons/lia'
import { LuWashingMachine } from 'react-icons/lu'
import { BsPersonWorkspace } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { CgGym } from 'react-icons/cg'
import { MdOutlineOutdoorGrill } from 'react-icons/md'
import { MdOutlineDeck } from 'react-icons/md'
import { GiCctvCamera } from 'react-icons/gi'
import { MdOutlineCleaningServices } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'

//  Create a map of perk names to their respective icons
export const perkIconMap = {
  wifi: FaWifi,
  parking: FaCar,
  tv: IoMdTv,
  kitchen: MdOutlineSoupKitchen,
  ac: TbAirConditioning,
  pool: FaSwimmingPool,
  tub: LiaHotTubSolid,
  washer: LuWashingMachine,
  workspace: BsPersonWorkspace,
  pet: MdPets,
  gym: CgGym,
  bbq: MdOutlineOutdoorGrill,
  deck: MdOutlineDeck,
  security: GiCctvCamera,
  cleaning: MdOutlineCleaningServices
}

const PerkIcon = ({ name, className }) => {
  const Icon = perkIconMap[name]
  if (!Icon) {
    return null
  }
  return <Icon className={className || 'w-5 h-5'} />
}

export default PerkIcon
