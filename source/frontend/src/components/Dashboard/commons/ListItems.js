import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import CommentIcon from '@material-ui/icons/Comment';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { Link } from 'react-router-dom';

function ListItems() {
  return (
    <div>
      <ListItem button component={Link} to="/admin/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/admin/dashboard/orders">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button component={Link} to="/admin/dashboard/products">
        <ListItemIcon>
          <PhotoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button component={Link} to="/admin/dashboard/customers">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button component={Link} to="/admin/dashboard/reviews">
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItem>
    </div>
  );
}

export default ListItems;
