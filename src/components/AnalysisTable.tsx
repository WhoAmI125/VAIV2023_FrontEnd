import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    SellStockType,
    HoldingStockType,
    AccountType,
    AccountJSON,
  } from "../types/user_info";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(stock_name: string, buy_date: string, buy_price: number, quantity: number, buy_total_price: number, sell_date: string, sell_price:any, sell_total_price:any, rate: any) {
    return { stock_name, buy_date, buy_price, quantity, buy_total_price, sell_date, sell_price ,sell_total_price, rate};
  }
   
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


type AccountProps = {
    account: string;
};


function AnalysisTable( { account }: AccountProps ){

    const localStore = localStorage.getItem("stock_info");
    const info_all: AccountJSON = localStore && JSON.parse(localStore);
    const account_info = info_all[account];
    const classes = useStyles();

    const sell_stock_arr : Array<SellStockType> = account_info.sell_stock;
    const holding_stock_arr : Array<HoldingStockType> = account_info.holding_stock;



    const rows = sell_stock_arr.map((stock)=>{
        return createData(stock.stockname, stock.buy_date, stock.buy_price, stock.quantity, stock.buy_total_price, stock.sell_date, stock.sell_price, stock.sell_total_price, `${stock.rate}%`);
    })

    const rows_holding = holding_stock_arr.map((stock)=>{
        return createData(stock.stockname, stock.buy_date, stock.buy_price, stock.quantity, stock.buy_total_price, "", "", "", "");
    })

    rows.push(...rows_holding);


    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Stock</StyledTableCell>
                        <StyledTableCell align="right">Buy Date</StyledTableCell>
                        <StyledTableCell align="right">Buy Price</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Buy Total Price</StyledTableCell>
                        <StyledTableCell align="right">Sell Date</StyledTableCell>
                        <StyledTableCell align="right">Sell Price</StyledTableCell>
                        <StyledTableCell align="right">Sell Total Price</StyledTableCell>
                        <StyledTableCell align="right">Rate</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.stock_name}>
                            <StyledTableCell component="th" scope="row">
                                {row.stock_name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.buy_date}</StyledTableCell>
                            <StyledTableCell align="right">{row.buy_price}</StyledTableCell>
                            <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                            <StyledTableCell align="right">{row.buy_total_price}</StyledTableCell>
                            <StyledTableCell align="right">{row.sell_date}</StyledTableCell>
                            <StyledTableCell align="right">{row.sell_price}</StyledTableCell>
                            <StyledTableCell align="right">{row.sell_total_price}</StyledTableCell>
                            <StyledTableCell align="right">{row.rate}</StyledTableCell>
                            
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AnalysisTable;