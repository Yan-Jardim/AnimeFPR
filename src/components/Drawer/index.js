import * as React from 'react';
import { useState, useEffect } from 'react'
import * as S from "./styled";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { getCategories } from '../../services/categories';

export default function TemporaryDrawer() {

  const [categories, setCategories] = useState([]);

  useEffect(() => async () => {
    const dataCategories = await getCategories(10);

    if (dataCategories) setCategories(dataCategories);
  }, [])
  const [state, setState] = React.useState({
    left: false,
  });

  const items = [
    { idGames: 1, textGames: 'Games of the Week', },

  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, marginTop: "10px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <ListItemText />
            {categories?.map(category => (
              <a key={category.id} href={`#${category.id}`}>
                <div>{category.attributes.title}</div>
              </a>
            ))}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div >
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {anchor}
            <MenuIcon sx={{ color: "white", width: 32, height: 41 }} />
          </Button>
          <Drawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}