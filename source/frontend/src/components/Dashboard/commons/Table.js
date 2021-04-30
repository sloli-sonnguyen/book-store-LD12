import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
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
  createData(5, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', '9', 312.44),
  createData(6, '16 Mar, 2019', 'Paul McCartney', 'London, UK', '7', 866.99),
  createData(7, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '3', 100.81),
  createData(8, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', '1', 654.39),
  createData(9, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', '20', 212.79),
  createData(10, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', '9', 312.44),
  createData(11, '16 Mar, 2019', 'Paul McCartney', 'London, UK', '7', 866.99),
  createData(12, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '4', 100.81),
  createData(13, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', '1', 654.39),
  createData(14, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', '19', 212.79),
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

  x: {
    paddingLeft: theme.spacing(10),
  },

  row: {
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.08)',
    },
  },
}));

export const RecentOrdersTable = (props) => {
  const classes = useStyles();
  return (
    <>
      <Title> Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.row}>
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

export const OrdersTable = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.row}>
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

// Generate Order Data
function createCustomersData(id, name, phone, email, address, orders, total) {
  return { id, name, phone, email, address, orders, total };
}

const customersData = [
  createCustomersData(0, 'Hoang Son', '09232334442', 'sonnguyen@gmail.com', 'Ha Noi', 10, 300.2),
  createCustomersData(1, 'Duy Anh', '02128883332', 'duyanh@gmail.com', 'Ha Noi', 8, 20.2),
  createCustomersData(
    2,
    'Ariane Klocko',
    '04299733933',
    'minkays@gmail.com',
    'Nam Dinh',
    3,
    1,
    300.2
  ),
  createCustomersData(3, 'Dallas Roob', '232342132323', 'agfvs@gmail.com', 'Ho Chi Minh', 6, 329),
  createCustomersData(
    4,
    'Wade Botsford',
    '12312312324',
    'avgjs@gmail.com',
    'Ho Chi Minh',
    2,
    300.2
  ),
  createCustomersData(5, 'Ky Anh', '213123123232', 'asssscs@gmail.com', 'Da Nang', 0),
  createCustomersData(6, 'Tung Lam', '12312312312', 'Laxcays@gmail.com', 'Ninh Binh', 0),
  createCustomersData(
    7,
    'Braanson Armstrong',
    '232323663232',
    'ayys@gmail.com',
    'Ninh Binh',
    10,
    300.2
  ),
  createCustomersData(8, 'Eulah Blick', '6356534535', 'abbtbts@gmail.com', 'Ha Noi', 9, 90),
  createCustomersData(9, 'Wallace Zemlak', '84654636345', 'acsys@gmail.com', 'Ninh Binh', 9, 90),
  createCustomersData(10, 'Miko', '45236565464', 'ascdxys@gmail.com', 'Cao Bang', 4, 90),
  createCustomersData(11, 'Kaneki', '321563763444', 'abbbb@gmail.com', 'Ha Noi', 9, 90),
  createCustomersData(12, 'Tanaka', '213125465654', 'asddddys@gmail.com', 'Quang Tri', 1, 230.2),
  createCustomersData(13, 'Manh Cuong', '31241353253', 'ayyyy@gmail.com', 'Ha Noi', 9, 100.2),
  createCustomersData(
    14,
    'Jerrell Hermiston',
    '12413434343',
    'oooossss@gmail.com',
    'Ha Noi',
    21,
    500.2
  ),
];

/** ============================CUSTOMERS======================================= */

export const CustomersTable = () => {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const [checkList, setCheckList] = useState([]);

  const handleAllCheckChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setCheckList([...Array(customersData.length).keys()]);
    } else {
      setCheckList([]);
    }
  };

  const handleCheckChange = (number) => {
    const index = checkList.indexOf(number);
    let newCheckList;
    if (index > -1) {
      checkList.splice(index, 1);
      newCheckList = [...checkList];
    } else {
      checkList.push(number);
      newCheckList = [...checkList];
    }
    setCheckList(newCheckList);
  };

  const classes = useStyles();
  return (
    <>
      <Title>Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onChange={handleAllCheckChange}
              />
            </TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell align="right">Total spent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customersData.map((row, index) => (
            <TableRow
              // component={Link}
              // to={`${currentPath}/${row.id}`}
              className={classes.row}
              key={row.id}
            >
              <TableCell>
                <Checkbox
                  color="primary"
                  checked={checkList.includes(index)}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={() => handleCheckChange(index)}
                />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.orders}</TableCell>
              <TableCell align="right" className={classes.boldText}>
                {row.total} $
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>Navigation</div>
    </>
  );
};

export const ReviewsTable = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Reviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.row}>
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
      <div className={classes.seeMore}>Navigation</div>
    </>
  );
};
