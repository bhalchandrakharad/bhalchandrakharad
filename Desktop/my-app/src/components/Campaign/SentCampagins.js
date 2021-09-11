import React, { useState } from 'react'
import { Divider, Typography, withStyles, Grid, Link,Icon, TableContainer, Paper, Table, TableHead, TableRow, TableCell, Button, TableBody} from '@material-ui/core'
import Span from "@material-ui/core/Box"
import HelpIcon from '@material-ui/icons/Help';
import { faAddressCard, faEdit, faTrashAlt, faPlus,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@material-ui/core/Tooltip';




const styles = (theme) => ({
    Title: { fontSize: "20px", fontWeight: "bold" },
    helpIcon: { color: "#fa6e86", padding: "0px", fontSize: "20px", marginLeft: "5px" },
    iconBtn: { padding: "8px 15px", color: "#fa6e86", borderColor: "#fa6e86", borderRadius: "20px", fontSize: "12px" },
    topContent: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    TableCell:{border:"1px solid #ddd"},
    tableHeadcell:{padding:"5px 16px"},
    tableHeadCss:{background:"#ddd",fontWeight:"bold"},
    tableCellCss:{padding:"5px 16px",fontSize:"13px"},
    ResendBtn:{background:"#fb6e8a",padding:"5px 8px",fontSize:"11px",color:"#fff",background:"#fa6e86"},
    trashBtn:{background:"#fb6e8a",padding:"7px 11px",color:"#fff",background:"#fa6e86",marginLeft:"3px",minWidth:"30px"},
    status:{background:"#10c810e8",padding:"7px 10px",borderRadius:"5px",color:"#fff",fontSize:"11px"},
    tableCellLinkCss:{padding:"5px 16px",fontSize:"13px",lineHeight:"6px !important",color:"#fb6e8a"},
    [theme.breakpoints.only("md")]: {
        topContent: { display: "grid" },
        iconBtn: { marginTop: "5px" }
    },
    [theme.breakpoints.only("sm")]: {
        topContent: { display: "grid" },
        iconBtn: { marginTop: "5px" }
    },
    [theme.breakpoints.only("xs")]: {
        topContent: { display: "grid" },
        iconBtn: { marginTop: "5px" }

    },
});
const SentCampagins = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2} >
                <div className={classes.topContent}>
                    <div>
                        <Typography className={classes.Title}>Sent Capmaign</Typography>
                        <Typography variant="caption">
                            applicable to bit.ly's new API for past campaign links. We highly recommend you usyour own link shortener as bitly may
                            as problematic if your website is reported to them.<br /> Betwext is not responsible for your link reputation with bitly.
                        </Typography>
                    </div>
                    <div>
                        <Button variant="outlined" classes={{ outlined: classes.iconBtn }}>Track All Short Links <HelpIcon className={classes.helpIcon} /></Button>
                    </div>
                </div>
                <Span mt={1} mb={2}>
                    <Divider />
                </Span>
                <Span my={2}>
                <TableContainer component={Paper}>
                    <Table className={classes.TableCell}>
                        <TableHead className={classes.tableHeadCss}>
                            <TableRow>
                                <TableCell classes={{head:classes.tableHeadcell}}>Campaign</TableCell>
                                <TableCell classes={{head:classes.tableHeadcell}}>Message Body</TableCell>
                                <TableCell classes={{head:classes.tableHeadcell}}>Send Time</TableCell>
                                <TableCell classes={{head:classes.tableHeadcell}}>Recipients</TableCell>
                                <TableCell classes={{head:classes.tableHeadcell}}>Status</TableCell>
                                <TableCell classes={{head:classes.tableHeadcell}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                    </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes.tableCellLinkCss}}>Scheduled For Log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>This testing log</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>12:23 AM August 18 2020</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>1</TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}><span className={classes.status}>SENT</span></TableCell>
                                <TableCell classes={{root:classes.tableCellCss}}>
                                    <Button variant="contained" className={classes.ResendBtn}>Resend</Button>
                                    <Button variant="contained" className={classes.trashBtn}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Span>
                
                {/* <Tooltip title="Add" arrow>
                    <Button><FontAwesomeIcon icon={faPaperPlane} className={classes.InputIconsContact} /></Button>
                </Tooltip>
              <Button >
              <Link href="https://pro.betwext.com/auth/referral_register/2/twitter/" >Edit</Link>
              </Button> */}
              {/* <Button className={classes.DeleteBtn}component={Link} to={`/campaigns/resend/${group.grp_id}`}></Button> */}
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(SentCampagins);
