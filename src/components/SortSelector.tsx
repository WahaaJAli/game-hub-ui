import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icons from '../icons/Icons'

interface SortSelectorProps { 
  selectedSortOrder: string | null
  onSelectSortOrder: (order: string) => void
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: SortSelectorProps) => {
  const SortOrders = [
    { value: '',            label: 'Relevance',       icon: Icons.Relevance     },
    { value: '-added',      label: 'Date Added',      icon: Icons.DateAdded     },
    { value: 'name',        label: 'Name',            icon: Icons.Name          },
    { value: 'released',    label: 'Released Date',   icon: Icons.ReleasedDate  },
    { value: '-metacritic', label: 'Popularity',      icon: Icons.Popularity    },
    { value: '-rating',     label: 'Average Rating',  icon: Icons.AverageRating },
  ]

  const currentSortOrder = SortOrders.find(order => order.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icons.ChevronDown/>} >Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {SortOrders.map(({ value, label, icon: Icon}) => 
          (
            <MenuItem key={value} icon={<Icon/>} onClick={() => onSelectSortOrder(value)} 
              value={value} >{label}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  )
}

export default SortSelector