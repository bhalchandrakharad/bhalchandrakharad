import { Typography, withStyles, Divider, TableContainer,Button,Snackbar , Table, TableHead, Paper,TableRow, TableCell, TableBody, IconButton, Icon } from '@material-ui/core';
import Span from "@material-ui/core/Box"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
const styles = (theme) => ({
    Title: { fontSize: 20, },
    subTitle: { color: "#fb6e8a" },
    TableHeadCss:{background:"#ebebeb"},
    ShortingIcon:{padding:0,},
    TableCss:{border:"1px solid #ddd"},
    TableCellHeadCss:{color: "#fb6e8a",padding:"5px 16px",fontSize:"13px"},
    EditBtn:{background:"#fb6e8a !important",color:"#fff",minWidth:"30px"},
    TableCell:{padding:"6px 16px",fontSize:"13px",color:"#8f8c8c"},
    TableCellCampaign:{padding:"6px 16px",fontSize:"13px",color:"#fb6e8a"},
    ActionCell:{color:"#000"}
});
const TableCampaign = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            
            <Span px={4} mt={2}>
             <Span bgcolor="#000" borderRadius="4px" color="#fff" py={1} borderLeft="4px solid #fb6e" mb={3 }>
                 <Typography variant="subtitle2" style={{marginLeft:"7px"}}>Want improve Perfomance? Move to a toll-free number! Learn More Here betwext.com/mobile marketing/toll-free/or/email/support@b</Typography>
             </Span>
                <Typography variant="subtitle2" className={classes.Title}>Scheduled Campaigns</Typography>
                <Typography variant="caption">To View Indlvldually Scheduled Message go to <span className={classes.subTitle}>IM Responses</span></Typography>
                <Span mt={1} mb={3}><Divider /></Span>

                <TableContainer component={Paper}>
                    <Table className={classes.TableCss}>
                        <TableHead className={classes.TableHeadCss}>
                            <TableRow>
                                <TableCell classes={{head:classes.TableCellHeadCss}}> CAMPAIGN <IconButton color="primary" className={classes.ShortingIcon}><Icon>unfold_more</Icon></IconButton></TableCell>
                                <TableCell classes={{head:classes.TableCellHeadCss}}>CREATED ON<IconButton color="primary" className={classes.ShortingIcon}><Icon>unfold_more</Icon></IconButton></TableCell>
                                <TableCell classes={{head:classes.TableCellHeadCss}}>SCHEDULED ON<IconButton color="primary" className={classes.ShortingIcon}><Icon>expand_less</Icon></IconButton></TableCell>
                                <TableCell classes={{head:classes.TableCellHeadCss}}><span className={classes.ActionCell}>RECIPIENTS</span></TableCell>
                                <TableCell classes={{head:classes.TableCellHeadCss}}><span className={classes.ActionCell}>ACTION</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>Test</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>6 16 AM Apr 30 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:00 PM Dec 1969</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>0</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>Mark</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>4 12 AM Jul 28 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:00 PM Dec 1969</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>1</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>Drip 5</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>4 12 AM Jul 28 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:00 PM Dec 1969</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>1</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>4:35 Am</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>4 31 AM May 28 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:00 PM Dec 1969</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>1</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>Test</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>11 52 AM Jul 28 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:00 PM Dec 1969</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>1</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>Test</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>1 22 AM Jul 28 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:00 PM Dec 1969</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>1</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.TableCellCampaign}}>Scheduled 2</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>4 12 AM Jul 28 2021</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>5:37 PM Jan 2020</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>0</TableCell>
                                <TableCell classes={{root:classes.TableCell}}>
                                    <Button className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(TableCampaign);
