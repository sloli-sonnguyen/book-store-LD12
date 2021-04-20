import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, quantityItem, total) {
  return { id, date, name, shipTo, quantityItem, total };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', '9', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', '7', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '3', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', '1', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', '19', 212.79),
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', '9', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', '7', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '3', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', '1', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', '20', 212.79),
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', '9', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', '7', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '4', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', '1', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', '19', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  },

  boldText: {
    fontWeight: 'bold',
  },
}));

export const OrdersTable = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Nb Items</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.quantityItem}</TableCell>
              <TableCell align="right" className={classes.boldText}>
                {row.total} $
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Button onClick={preventDefault} variant="contained" color="primary">
          See more orders
        </Button>
      </div>
    </>
  );
};
