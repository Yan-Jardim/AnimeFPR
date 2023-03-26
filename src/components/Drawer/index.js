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
import ListIcon from '@mui/icons-material/List';
import { getCategories } from '../../services/categories';

export default function TemporaryDrawer() {

  const [categories, setCategories] = useState([]);

  useEffect(() => async () => {
    const dataCategories = await getCategories(40);

    if (dataCategories) setCategories(dataCategories);
  }, [])
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: "#F46D1B" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <S.ContentTitle>
              <ListIcon sx={{ fontSize: "30px" }} />
              <S.Title>Categorias</S.Title>
            </S.ContentTitle>
            <ListItemText />
            {categories?.map(category => (
              <Button
                variant="text"
                key={category.id}
                href={`/Categories?category=${category?.attributes?.title}`}
                sx={{ color: '#ffffff', height: "30px" }}>
                {category.attributes.title}
              </Button>
            ))}
          </ListItemButton>
        </ListItem>
      </List>
    </Box >
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