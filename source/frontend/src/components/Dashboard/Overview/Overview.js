import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { SaleLineChart, CategoryChart } from '../commons/Chart';
import { OrdersTable } from '../commons/Table';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    marginTop: '50px',
  },
  fixedHeight: {
    height: 400,
  },
}));

export default function Overview() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid container spacing={3}>
        {/* Line chart */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <SaleLineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper>
            <OrdersTable />
          </Paper>
        </Grid>
        {/* Pie Chart */}
        <Grid item xs={12} lg={4}>
          <Paper className={fixedHeightPaper}>
            <CategoryChart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
