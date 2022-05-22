import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import * as Edit from './useredit.style';

export default function UserEditUI(props) {
  return (
    <>
      <Edit.WrapperRow>
        <div>Mother Tongue</div>
        <List
          component='nav'
          aria-label='Mother Tongue'
          sx={{ bgcolor: 'background.paper' }}
        >
          <ListItem
            button
            id='lock-button'
            aria-haspopup='listbox'
            aria-controls='mother-tongue'
            aria-label='select mother tongue'
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
          id='mother-tongue'
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
              // disabled={index === 0}
              selected={index === props.selectedIndex}
              onClick={(event) => props.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Edit.WrapperRow>
      <Edit.WrapperRow>
        <div>New Language</div>
        <List
          component='nav'
          aria-label='new language'
          sx={{ bgcolor: 'background.paper' }}
        >
          <ListItem
            button
            id='lock-button'
            aria-haspopup='listbox'
            aria-controls='new-language'
            aria-label='when device is locked'
            aria-expanded={props.open ? 'true' : undefined}
            onClick={props.handleClickListItem}
          >
            <ListItemText
              primary={props.options[props.selectedNewIndex]}
              // secondary={props.options[props.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id='new-language'
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
              // disabled={index === 0}
              selected={index === props.selectedNewIndex}
              onClick={(event) => props.handleMenuNewItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Edit.WrapperRow>

      <button onClick={props.onClickUpdate}>저장하기</button>
    </>
  );
}
