import React, { useState } from 'react'
import Span from "@material-ui/core/Box";
import {
    withStyles, Typography, Divider, Button, Table, TableHead, TableRow, TableBody, TableCell, TableContainer, Paper, Hidden, Card, CardHeader, CardContent, Avatar, Collapse, Grid, IconButton
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faEdit, faUsers } from '@fortawesome/free-solid-svg-icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: 'bold' },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#2b2b2b', fontWeight: 500 } },
    TableHeadCss: { background: '#ebebeb', lineHeight: '6px !important' },
    TableCss: { border: '1px solid #e0e0e0' },
    TableCellHead: { lineHeight: '6px !important', fontSize: 12, color: '#585757', fontWeight: 'bold', padding: '17px 10px' },
    TableCellCss: { padding: '0px 10px', fontSize: 13, color: '#585757' },
    TableCellCssFraud: { padding: '0px 10px', fontSize: 13, background: '#dff0d8', color: '#468847' },
    ActionButns: { background: '#fb6e8a', boxShadow: 'none', color: '#fff', minWidth: 31, padding: '5px 0px', fontSize: 16, margin: '8px 2px', '&:hover': { boxShadow: 'none', background: '#fb6e8a' } },
    ApproveBtn: { background: '#468847', color: '#fff', fontSize: 11, margin: '0px 4px 0px 3px', padding: '4px 10px', boxShadow: 'none', '&:hover': { boxShadow: 'none', background: '#468847' } },
    RemoveBtn: { background: '#da4f49', color: '#fff', fontSize: 11, padding: '4px 10px', boxShadow: 'none', '&:hover': { boxShadow: 'none', background: '#da4f49' } },
    DashboardIconCss: { fontSize: 17 },
    ActiveText: { color: '#468847', fontSize: 13 },

    [theme.breakpoints.only('md')]: {
        TableCellHead: { lineHeight: '15px !important', padding: '5px 15px' },
        ResponsiveView: { marginBottom: 7 },
    },

    [theme.breakpoints.only('sm')]: {
        ResponsiveView: { marginBottom: 7 },
        TableCellHead: { lineHeight: '15px !important', padding: '5px 15px' },
    },
    [theme.breakpoints.only('xs')]: {
        TableCellHead: { lineHeight: '15px !important', padding: '5px 15px' },
        TableCss:{minWidth:1200}
    },
  
})


const BundleRequest = (props) => {
    const { classes } = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => { setExpanded(!expanded) };
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="caption" className={classes.Title}>Users with Bundle Requests</Typography>
                <Span mb={3.7} mt={1}><Divider /></Span>
                    <TableContainer component={Paper}>
                        <Table className={classes.TableCss}>
                            <TableHead className={classes.TableHeadCss}>
                                <TableRow>
                                    <TableCell classes={{ head: classes.TableCellHead }} width='27%'>Email</TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width='11%'>Friendly</TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width='11%'>Current Bundle</TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width='17%'>Requested Bundle</TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width='15%'>Fraud Code</TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>wwillis24@aol.com</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>1201</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>None</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>3/15 Numbers</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssFraud }}>4 (Valid)</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Span className={classes.ResponsiveView}>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faSyncAlt} />
                                            </Button>
                                            <Button variant='contained' className={classes.ApproveBtn}>Approve</Button>
                                            <Button variant='contained' className={classes.RemoveBtn}>Remove</Button>
                                        </Span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>sammiespub@gmail.com</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>1005</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>20 Numbers</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>3/15 Numbers</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssFraud }}>4 (Valid)</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Span className={classes.ResponsiveView}>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faSyncAlt} />
                                            </Button>
                                            <Button variant='contained' className={classes.ApproveBtn}>Approve</Button>
                                            <Button variant='contained' className={classes.RemoveBtn}>Remove</Button>
                                        </Span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>joe@baxcoinc.com</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>2923</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>None</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>3/15 Numbers</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssFraud }}>4 (Valid)</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Span className={classes.ResponsiveView}>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faSyncAlt} />
                                            </Button>
                                            <Button variant='contained' className={classes.ApproveBtn}>Approve</Button>
                                            <Button variant='contained' className={classes.RemoveBtn}>Remove</Button>
                                        </Span>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(BundleRequest);
