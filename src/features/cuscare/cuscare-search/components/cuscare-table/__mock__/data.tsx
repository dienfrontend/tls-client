import { IconProps } from "@radix-ui/react-icons/dist/types";

interface OptionFilterModel {
  value: string,
  label: string,
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}
export const areas: OptionFilterModel[] = [
  {
    label: 'Vùng 1',
    value: '1'
  },
  {
    label: 'Vùng 2',
    value: '2'
  },
  {
    label: 'Vùng 3',
    value: '3'
  },
  {
    label: 'Vùng 4',
    value: '4'
  },
  {
    label: 'Vùng 5',
    value: '5'
  },
  {
    label: 'Vùng 6',
    value: '6'
  },
]

export const campaigns: OptionFilterModel[] = [
  {
    label: 'Chiến dịch A',
    value: 'A'
  },
  {
    label: 'Chiến dịch B',
    value: 'B'
  },
  {
    label: 'Chiến dịch C',
    value: 'C'
  },
  {
    label: 'Chiến dịch D',
    value: 'D'
  },
]

export const localTypes: OptionFilterModel[] = [
  {
    label: 'Camera',
    value: 'A'
  },
  {
    label: 'FPT Play',
    value: 'B'
  },
]

export const staffs: OptionFilterModel[] = [
  {
    label: 'DienNX3',
    value: 'A'
  },
  {
    label: 'HoangVT11',
    value: 'B'
  },
]

export const upgrades: OptionFilterModel[] = [
  {
    label: 'Chưa tư vấn',
    value: 'A'
  },
  {
    label: 'Đồng ý',
    value: 'B'
  },
]

export const statuses: OptionFilterModel[] = [
  {
    label: "Bình thường",
    value: "A",
  },
  {
    label: "Đang nợ cước",
    value: "B",
  },
]