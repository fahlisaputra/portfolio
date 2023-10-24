import { Laptop, Smartphone, Smartwatch } from '@/components/icons'
import type { DeviceInfo } from '@/types/spotify'

export const PAIR_DEVICES: Record<string, DeviceInfo> = {
  Computer: {
    icon: <Laptop />,
    model: 'Macbook Pro',
    id: 'fahlisaputra-mac',
  },
  Smartphone: {
    icon: <Smartphone />,
    model: 'iPhone',
    id: 'fahlisaputra-iphone',
  },
  Smartwatch: {
    icon: <Smartwatch />,
    model: 'Apple Watch',
    id: 'fahlisaputra-watch',
  },
}
