import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import * as Edit from './useredit.style';

export default function UserEditUI(props) {
  return (
    <div>
      <List
        component='nav'
        aria-label='????'
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id='lock-button'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={props.open ? 'true' : undefined}
          onClick={props.handleClickListItem}
        >
          <ListItemText
            primary={props.options[props.selectedIndex]}
            // secondary={props.options[props.selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {props.options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === props.selectedIndex}
            onClick={(event) => props.handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <button onClick={props.onClickUpdate}>저장하기</button>
    </div>
  );
}
