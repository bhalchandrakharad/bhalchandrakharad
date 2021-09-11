import { Typography, withStyles, Grid, TableCell, Divider,Snackbar, Paper, TableContainer, Table, TableHead, TableRow, TableBody, Button, IconButton } from '@material-ui/core';
import React from 'react'
import Span from "@material-ui/core/Box"
import { Pagination } from '@material-ui/lab';
const styles = (theme) => ({
    Title: { fontSize: "20px", fontWeight: "bold" },
    TableHeading: { marginTop: "10px" },
    TableCss: { border: "1px solid #ddd" },
    successStatus: { background: "#5ce45ce8", padding: "6px 10px", color: "#fff", fontSize: "13px", borderRadius: "8px" },
    TablCellHead: { padding: "5px 16px", fontSize: "13px", fontWeight: 'bold' },
    TableCellCss: { padding: "13px 16px", fontSize: 13 },
    tableHeadCss: { background: "#dddddd9e" },
    TableCellNumberCss: { color: "#fa6e86" },
    FailedStatus: { background: "#d43c31", padding: "6px 23px", color: "#fff", fontSize: "13px", borderRadius: "8px" },
    [theme.breakpoints.only('md')]: {
        TableCss: { minWidth: "550px" }
    },
});
const Customers = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography className={classes.Title}>Billing Overview</Typography>
                <Typography variant="subtitle2">account: mark@betwext.com</Typography>
                <Span mt={1} mb={2}><Divider /></Span>
                <Typography variant="body1">Billing History</Typography>
                <Typography variant="subtitle2">Looking for more details on an invoice? Feel free to contact us at any time.</Typography>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography className={classes.TableHeading}>Invoices</Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.TableCss}>
                                <TableHead className={classes.tableHeadCss}>
                                    <TableRow>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Invoice Number</TableCell>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Ammount</TableCell>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Date</TableCell>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#38392</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>10:00 PM June 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#32792</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>10:00 PM June 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#22453</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>10:00 PM June 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#2392</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>09:00 AM March 7 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.FailedStatus}>Failed</span></TableCell>
                                    </TableRow>
                                    <TableRow selected hover>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#3</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>05:23 AM August 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#1</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$1.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>07:57 PM Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography className={classes.TableHeading}>Monthly Subscription & Other Deductions</Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.TableCss}>
                                <TableHead className={classes.tableHeadCss}>
                                    <TableRow>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Invoice Number</TableCell>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Ammount</TableCell>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Date</TableCell>
                                        <TableCell classes={{ head: classes.TablCellHead }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#1</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$14.99</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>10:38 PM June 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#32792</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>10:00 PM June 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#22453</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>10:00 PM June 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#2392</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>09:00 AM March 7 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.FailedStatus}>Failed</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#3</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$20.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>05:23 AM August 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellNumberCss }}>#1</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>$1.00</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }} l>07:57 PM Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}><span className={classes.successStatus}>successful</span></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                </Span>
            
        </React.Fragment>
    )
}
export default withStyles(styles)(Customers);

