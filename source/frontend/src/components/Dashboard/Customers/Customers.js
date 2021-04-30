import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { CustomersTable } from '../commons/Table';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    marginRight: '10px',
    paddingLeft: '5px',
  },
});

function Orders() {
  const classes = useStyles();

  const handleSelectChange = () => {};
  return (
    <>
      <Grid className={classes.header} item xs={12}>
        <Box className={classes.searchBox} elevation={0}>
          <TextField className={classes.searchInput} placeholder="Search" type="search" />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary">
            <GetAppIcon />
            <Typography>Export</Typography>
          </Button>
        </Box>
      </Grid>
      <CustomersTable />
    </>
  );
}

export default Orders;
