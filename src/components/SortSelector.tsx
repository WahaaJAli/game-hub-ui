import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useContext } from 'react'
import GameQueryContext from './contexts/GameQueryContext'
import Icons from '../icons/Icons'

const SortSelector = () => {
  const { gameQuery, dispatch } = useContext(GameQueryContext)
  const SortOrders = [
    { sortKey: '',            label: 'Relevance',       icon: Icons.Relevance     },
    { sortKey: '-added',      label: 'Date Added',      icon: Icons.DateAdded     },
    { sortKey: 'name',        label: 'Name',            icon: Icons.Name          },
    { sortKey: 'released',    label: 'Released Date',   icon: Icons.ReleasedDate  },
    { sortKey: '-metacritic', label: 'Popularity',      icon: Icons.Popularity    },
    { sortKey: '-rating',     label: 'Average Rating',  icon: Icons.AverageRating },
  ]

  const currentSortOrder = SortOrders.find(order => order.sortKey === gameQuery.sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icons.ChevronDown/>} >Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {SortOrders.map(({ sortKey, label, icon: Icon}) => 
          (
            <MenuItem key={sortKey} icon={<Icon/>} value={sortKey}
              onClick={() => dispatch({ type: 'SORT_ORDER', sortOrder: sortKey})} >{label}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  )
}

export default SortSelector