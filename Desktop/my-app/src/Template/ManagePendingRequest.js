import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles,TableBody,Button} from '@material-ui/core'
import Span from "@material-ui/core/Box"
import { faEdit,faSyncAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: "bold" },
    TableCss:{border:"1px solid #ddd"},
    TableHeadCellCss:{padding:"5px 16px",fontSize:13,fontWeight:"bold"},
    TableHeadCss:{background:'#ebebeb',lineHeight:'6px !important'},
    EditBtn:{background:"#fb6e8a",color:"#fff",boxShadow:"none",minWidth:30,padding:"5px 5px",marginLeft:"4px"},
    TableCellFraudCss:{background:"#ffc0cb57",color:"#d2691ef0",fontSize:13,padding:"6px 16px"},
    TableCellFraudCssActive:{color:"#008000bd",background:"#74f97440",fontSize:13,padding:"6px 16px"},
    TableCellCss:{fontSize:13,padding:"6px 16px"},
    AddNoteBtn:{background:"#088408",color:"#fff",padding:"5px 8px",fontSize:13,height:"25px",boxShadow:"none",marginLeft:4},
    DwonloaadBtn:{borderRadius:30,fontSize:11,padding:"7px 10px"},


    [theme.breakpoints.only('sm')]: {
        TableCss: { minWidth: "1250px" }
    },
    [theme.breakpoints.only('xs')]: {
        TableCss: { minWidth: "1250px" }
    },
})
const ManagePendingRequest = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
            <Span display="flex" justifyContent="space-between">
            <Typography variant="subtitle2 " className={classes.Title}>Users With Ovrude invoices</Typography>
                   <Button variant="outlined" color="primary" className={classes.DwonloaadBtn}>Download Pendings</Button> 
                </Span>
                <Span mt={1} mb={3.7}>
                    <Divider />
                </Span>
                <TableContainer component={Paper}>
                <Table className={classes.TableCss}>
                    <TableHead className={classes.TableHeadCss}>
                        <TableRow>
                            <TableCell classes={{head:classes.TableHeadCellCss}} width="30%">Email</TableCell>
                            <TableCell classes={{head:classes.TableHeadCellCss}} width="20%">Phone Number</TableCell>
                            <TableCell classes={{head:classes.TableHeadCellCss}} width="20%">Friendly Name</TableCell>
                            <TableCell classes={{head:classes.TableHeadCellCss}} width="15%">Fraud Code</TableCell>
                            <TableCell classes={{head:classes.TableHeadCellCss}} width="15%">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>info@stoneowloutdoors.com</TableCell>
                            <TableCell className={classes.TableCellCss}>4355005525</TableCell>
                            <TableCell className={classes.TableCellCss}>2880</TableCell>
                            <TableCell className={classes.TableCellFraudCss}>5 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>eric@stoneowloutdoors.com</TableCell>
                            <TableCell className={classes.TableCellCss}>8188052220</TableCell>
                            <TableCell className={classes.TableCellCss}>2748</TableCell>
                            <TableCell className={classes.TableCellFraudCssActive}>4 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>sethorne@.com</TableCell>
                            <TableCell className={classes.TableCellCss}>40741054840</TableCell>
                            <TableCell className={classes.TableCellCss}>2556</TableCell>
                            <TableCell className={classes.TableCellFraudCss}>5 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>parris.elis@gmail.com</TableCell>
                            <TableCell className={classes.TableCellCss}>8188052220</TableCell>
                            <TableCell className={classes.TableCellCss}>2748</TableCell>
                            <TableCell className={classes.TableCellFraudCssActive}>4 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>futurefocusmd@gmail.com</TableCell>
                            <TableCell className={classes.TableCellCss}>40741054840</TableCell>
                            <TableCell className={classes.TableCellCss}>2556</TableCell>
                            <TableCell className={classes.TableCellFraudCss}>5 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>michel@trukology.com</TableCell>
                            <TableCell className={classes.TableCellCss}>40741054840</TableCell>
                            <TableCell className={classes.TableCellCss}>2556</TableCell>
                            <TableCell className={classes.TableCellFraudCss}>5 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.TableCellCss}>sonjaab1119@gmail.com</TableCell>
                            <TableCell className={classes.TableCellCss}>8188052220</TableCell>
                            <TableCell className={classes.TableCellCss}>2748</TableCell>
                            <TableCell className={classes.TableCellFraudCssActive}>4 (Valid)</TableCell>
                            <TableCell className={classes.TableCellCss}>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faEdit}/></Button>
                                <Button variant="contained" className={classes.EditBtn}><FontAwesomeIcon icon={faSyncAlt}/></Button>
                                 <Button variant="contained" className={classes.AddNoteBtn}>Add Note</Button>   
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Span>
           
        </React.Fragment>
    )
}

export default withStyles(styles)(ManagePendingRequest);
