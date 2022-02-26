import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import { withStyles } from "@mui/styles";
// import styled from 'styled-components'

interface Column {
  id: 'nodes' | 'date' | 'reward';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'nodes', label: 'Standalone Nodes', minWidth: 220 },
  { id: 'date', label: 'Creation Date', minWidth: 100 },
  { id: 'reward', label: 'Rewards', minWidth: 100, align: 'right' },
];

interface Data {
  nodes: string;
  date: string;
  reward: string;
}

function createData(
  nodes: string,
  date: string,
  reward: string,
): Data {
  return { nodes, date, reward };
}

const rows = [
  createData('My Node15', '02-26-12', '12.24SMN'),
  createData('My Node14', '02-25-12', '23.94SMN'),
  createData('My Node13', '02-24-12', '132.46SMN'),
  createData('My Node12', '02-23-12', '1.2SMN'),
  createData('My Node11', '02-22-12', '12.344SMN'),
  createData('My Node10', '02-21-12', '5.21SMN'),
  createData('My Node9', '02-20-12', '2.04SMN'),
  createData('My Node8', '02-16-12', '142.43SMN'),
  createData('My Node7', '02-6-12', '172.46SMN'),
  createData('My Node6', '01-26-12', '212.41SMN'),
  createData('My Node5', '01-25-12', '1122.2SMN'),
  createData('My Node4', '01-24-12', '0.224SMN'),
  createData('My Node3', '01-23-12', '0.004SMN'),
  createData('My Node2', '01-22-12', '111.3SMN'),
  createData('My Node1', '01-21-12', '234.456SMN')
];

// const StyledPaper = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white
//   },
//   body: {
//     fontSize: 12
//   }
// }))(Paper);
// // const StyledPaper = styled(Paper)`
//   background: '#000000';
// `
// const useStyles = makeStyles({
//   active: {
//     color: "yellow",
//     backgroundColor: "yellow",
//   },
// });
export default function NodesList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const classes = useStyles();
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', background: '#2b2b2b'}}>
      <TableContainer sx={{ height: 440 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ background: '#2b2b2b' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }} sx={{ background: '#2b2b2b', color:'#faa21a', fontSize:'16px' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.reward} sx={{ color: 'white' }}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ color: 'white' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: '#faa21a' }}
      />
    </Paper>
  );
}
