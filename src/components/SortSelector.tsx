import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icons from '../icons/Icons'
import useGameQueryStore from './store/store'

const SortSelector = () => {
  const SortOrders = [
    { sortKey: '',            label: 'Relevance',       icon: Icons.Relevance     },
    { sortKey: '-added',      label: 'Date Added',      icon: Icons.DateAdded     },
    { sortKey: 'name',        label: 'Name',            icon: Icons.Name          },
    { sortKey: 'released',    label: 'Released Date',   icon: Icons.ReleasedDate  },
    { sortKey: '-metacritic', label: 'Popularity',      icon: Icons.Popularity    },
    { sortKey: '-rating',     label: 'Average Rating',  icon: Icons.AverageRating },
  ]

  const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const currentSortOrder = SortOrders.find(order => order.sortKey === selectedSortOrder)

  const setSelectedSortOrder = useGameQueryStore(s => s.setSelectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icons.ChevronDown/>} >Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {SortOrders.map(({ sortKey, label, icon: Icon}) => 
          (<MenuItem key={sortKey} icon={<Icon />} value={sortKey} onClick={() => setSelectedSortOrder(sortKey)} >{label}</MenuItem>)
        )}
      </MenuList>
    </Menu>
  )
}

export default SortSelector