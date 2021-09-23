import { Typography, withStyles, Button, Divider, Paper, Grid, ButtonGroup, TextareaAutosize, FormControl, TextField } from '@material-ui/core'
import React from 'react'
import Span from "@material-ui/core/Box"
import { faSyncAlt, faEdit, faAngleDoubleLeft, faAngleDoubleRight, faPaperPlane, faComments, faTags, faUsers, faUserGraduate, faBan } from '@fortawesome/free-solid-svg-icons';
import NotesBackground from "../../assets/NotePaper.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: "bold" },
    MoreText: { fontSize: 17, fontWeight: "normal", color: "#4a4a4a" },
    EditBtns: { minWidth: 30, background: "#fb6e89", padding: "5px 0px", color: "#fff", fontSize: 16, margin: "8px 2px" },
    BiZIcon: { fontSize: "14px", color: "#fb6e89", cursor: "pointer", marginRight: "3px" },
    BizTitle: { fontSize: 15 },
    UserDetails: { fontSize: 18, color: "#fb6e89", marginBottom: "-5px" },
    BoxCss: { background: "#fb6e891a", border: "1px solid #ddd" },
    IconContainer: { width: 90, height: 90, background: "#fb6e89", color: "#fff", fontSize: 35, display: "flex", justifyContent: "center", borderRadius: "4px 0px 0px 4px", alignItems: "center" },
    SubscribeMessage: { fontSize: 14, marginTop: 12, marginLeft: 12, marginBottom: 9 },
    SubscribeSubhead: { fontSize: 22, marginLeft: 12 },
    OnButton: { marginLeft: "3px", background: "#4cae4c !important", fontSize: 12, color: "#fff", padding: "2px 4px", boxShadow: "none", "&:hover": { boxShadow: "none" } },
    offBtn: { border: "1px solid #4cae4c", fontSize: 12, color: "#4cae4c", padding: "2px 4px", boxShadow: "none", "&:hover": { boxShadow: "none" } },
    UpdateBtn: { background: "#4cae4c", boxShadow: "none", fontSize: 11, color: "#fff", borderRadius: 0, marginRight: "3px", padding: "2px 5px", minWidth: 30, "&:hover": { background: "#4cae4c", boxShadow: "none" }, },
    NotificationSection: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12.2px", borderBottom: "1px solid #ddd" },
    NumbersLitit: { width: 44, background: "#337ab7", color: "#fff", marginRight: 10, height: 29, width: 44, fontSize: 19, padding: "0px 6px", cursor: "pointer", textAlign: "center" },
    NumbersActive: { width: 44, background: "#4cae4c", color: "#fff", marginRight: 10, height: 29, width: 44, fontSize: 19, padding: "0px 6px", cursor: "pointer", textAlign: "center" },
    NumbersDelete: { width: 44, background: "#d9534f  ", color: "#fff", marginRight: 10, height: 29, width: 44, fontSize: 19, padding: "0px 6px", cursor: "pointer", textAlign: "center" },
    NumbersTotal: { width: 44, background: "#f0ad4e ", color: "#fff", marginRight: 10, height: 29, width: 44, fontSize: 19, padding: "0px 6px", cursor: "pointer", textAlign: "center" },
    TextAreaCss: { padding: "12.2px" },
    NotesTextField: {
        padding: '4px 10px', backgroundImage: `url(${NotesBackground})`, backgroundRepeat: 'no-repeat', lineHeight: '26px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: 14, color: '#262626', border: '1px solid #b7b7b7', height: '176px !important'
    },
    textField : { fontSize : 12, color: '#2b2b2b',padding:'7px 13px', width:166, background:'#fff','&::placeholder':{color:'#000', fontWeight:500}},
    cssLabel: {
        color:'#908f8f',
        transform:"translate(8px, 7px) scale(1)",
        fontSize: 13,
    },
    LableShrink:{fontSize:15, transform:'translate(17px, -4px) scale(0.75) !important', color:'#232323'},
    NumberTextField:{
        padding:'4px 10px', fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif', fontSize:14, color:'#262626', 
        border:'1px solid #b7b7b7', height:'78px !important', background:'#ffd5dd'
    },
    FlagTextField:{
        padding:'4px 10px', backgroundImage: `url(${NotesBackground})`, backgroundRepeat:'no-repeat', lineHeight:'26px', 
        fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif', fontSize:14, color:'#262626', border:'1px solid #b7b7b7', height:'97px !important'
    },
    [theme.breakpoints.only("xs")]: {
        ResponsiveView: { display: "grid" }
    },
})
const UserDashboard = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2} >
                <Span display="flex" justifyContent="space-between" className={classes.ResponsiveView}>
                    <Typography className={classes.Title}>
                        User Dashboard Overview <span className={classes.MoreText}>Last Updated On: 2:35 AM April 23 2021</span>
                    </Typography>
                    <div>
                        <Button variant="contained" className={classes.EditBtns}>
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="contained" className={classes.EditBtns}>
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </Button>
                        <Button variant="contained" className={classes.EditBtns}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </Button>
                        <Button variant="contained" className={classes.EditBtns}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </Button>
                    </div>
                </Span>
                <Span mt={.09} mb={3.9}><Divider /></Span>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={12} md={5} lg={4}>
                        <Span className={classes.BoxCss}>
                            <Span display="flex" justifyContent="space-between" p={1.4} className={classes.ResponsiveView}>
                                <div>
                                    <Typography variant="subtitle2" className={classes.BizTitle}>kipinfo@warrentoncapitalfunding.com</Typography>
                                    <Typography variant="subtitle2" className={classes.BizTitle}>5408784942</Typography>
                                </div>
                                <div>
                                    <Span display="flex" alignItems="center" >
                                        <FontAwesomeIcon icon={faSyncAlt} className={classes.BiZIcon} />
                                        <Typography variant="subtitle2" className={classes.BiZIcon}>Biz Profile</Typography>
                                    </Span>
                                </div>
                            </Span>
                            <Divider />
                            <Span p={1.4}>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>$50.41</Typography>
                                                <Typography variant="caption">Account Balance</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>0</Typography>
                                                <Typography variant="caption"> Pending Invoices</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>PRO($99)</Typography>
                                                <Typography variant="caption">Account Type</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>0</Typography>
                                                <Typography variant="caption">Active Bundle</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>8</Typography>
                                                <Typography variant="caption">Failed Transactions</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>Active</Typography>
                                                <Typography variant="caption">Banned Status</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>Active</Typography>
                                                <Typography variant="caption">Mob Verification Status</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>Yes</Typography>
                                                <Typography variant="caption">Credit Card on File</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>2018-01-30</Typography>
                                                <Typography variant="caption">Account Signup Date</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Paper variant="outlined">
                                            <Span p={1.4} align="center">
                                                <Typography className={classes.UserDetails}>2021-05-02</Typography>
                                                <Typography variant="caption">Next Bill Date</Typography>
                                            </Span>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Span>
                        </Span>
                        <Span mt={2} border="1px solid #ddd" bgcolor="#fb6e891a">
                            <Span borderBottom="1px solid #ddd" p={1.4} >
                                <Typography variant="subtitle2" className={classes.BizTitle}>Credit Card UserDetails</Typography>
                            </Span>
                            <Span p={1.4}>
                                <Grid container direction="row" spacing={1}>
                                <Grid item xs={5} sm={4} md={4} lg={4}>
                                        <Typography variant='body2'>Name on card :</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>Card type :</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>Card Expires :</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>CC Number :</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>Phone No :</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>Address :</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>City :</Typography>
                                    </Grid>
                                    <Grid item xs={7} sm={8} md={8} lg={8}>
                                        <Typography variant='body2'>Joseph Meuse</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>Visa</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>10/2023</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>XXXX9875</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>540-878-4942</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>183 Keith St Suite 3</Typography>
                                        <Span mt={1}/>
                                        <Typography variant='body2'>Warrenton</Typography>
                                    </Grid>
                                </Grid>
                            </Span>
                        </Span>
                    </Grid>
                    {/* RightSection */}
                    <Grid item xs={12} sm={12} md={7} lg={8}>
                        <Span  bgcolor='#ffeff1' border='1px solid #ddd' mb={2}>
                            <Span  p={1.4}  display="flex" alignItems="center" justifyContent="space-between">
                            <Typography variant="subtitle2" className={classes.BizTitle}>Message and Subscribers</Typography>
                                <div>
                                <FontAwesomeIcon icon={faSyncAlt} className={classes.BiZIcon} />
                                </div>
                            </Span>
                        </Span>
                        {/* Subscribers-section */}
                        <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <Paper variant="outlined">
                                    <Span display="flex">
                                        <div className={classes.IconContainer}>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.SubscribeMessage}>Sent Message</Typography>
                                            <Typography variant="subtitle2" className={classes.SubscribeSubhead}>195857</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <Paper variant="outlined">
                                    <Span display="flex">
                                        <div className={classes.IconContainer}>
                                            <FontAwesomeIcon icon={faComments} />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.SubscribeMessage}>Total Replies</Typography>
                                            <Typography variant="subtitle2" className={classes.SubscribeSubhead}>5809</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <Paper variant="outlined">
                                    <Span display="flex">
                                        <div className={classes.IconContainer}>
                                            <FontAwesomeIcon icon={faTags} />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.SubscribeMessage}>Active Keywords</Typography>
                                            <Typography variant="subtitle2" className={classes.SubscribeSubhead}>0</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <Paper variant="outlined">
                                    <Span display="flex">
                                        <div className={classes.IconContainer}>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.SubscribeMessage}>Total Subscribers</Typography>
                                            <Typography variant="subtitle2" className={classes.SubscribeSubhead}>87782</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <Paper variant="outlined">
                                    <Span display="flex">
                                        <div className={classes.IconContainer}>
                                            <FontAwesomeIcon icon={faUserGraduate} />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.SubscribeMessage}>Active Subscribers</Typography>
                                            <Typography variant="subtitle2" className={classes.SubscribeSubhead}>84416</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <Paper variant="outlined">
                                    <Span display="flex">
                                        <div className={classes.IconContainer}>
                                            <FontAwesomeIcon icon={faBan} />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.SubscribeMessage}>Unsubscribers</Typography>
                                            <Typography variant="subtitle2" className={classes.SubscribeSubhead}>3366</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                        </Grid>
                        {/* *********** */}
                
                        <Span mt={1} />
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Span border="1px solid #ddd" bgcolor="#fb6e891a">
                                    <div className={classes.NotificationSection}>
                                        <Span display="flex" alignItems="center">
                                            <Typography variant="subtitle2">Notification :</Typography>
                                            <ButtonGroup>
                                                <Button variant="contained" size="small" className={classes.OnButton}>On</Button>
                                                <Button className={classes.offBtn}>Off</Button>
                                            </ButtonGroup>
                                        </Span>
                                        <Span display="flex" alignItems="center">
                                            <Button variant="contained" className={classes.UpdateBtn}>Update</Button>
                                            <FontAwesomeIcon icon={faSyncAlt} className={classes.BiZIcon} />
                                        </Span>
                                    </div>
                                    <Span p={1.4}>
                                        <Span display="flex" alignItems="center" borderBottom="1px solid #ddd">
                                            <div className={classes.NumbersLitit}>10</div>
                                            <Typography variant="body2">Numbers Limit</Typography>
                                        </Span>
                                        <Span mt={1} />
                                        <Span display="flex" alignItems="center" borderBottom="1px solid #ddd">
                                            <div className={classes.NumbersActive}>10</div>
                                            <Typography variant="body2" >Active Numbers</Typography>
                                        </Span>
                                        <Span mt={1} />
                                        <Span display="flex" alignItems="center" borderBottom="1px solid #ddd">
                                            <div className={classes.NumbersDelete}>148</div>
                                            <Typography variant="body2" >Deleted Numbers</Typography>
                                        </Span>
                                        <Span mt={1} />
                                        <Span display="flex" alignItems="center" borderBottom="1px solid #ddd">
                                            <div className={classes.NumbersTotal}>6107</div>
                                            <Typography variant="body2" >Total Message Violations</Typography>
                                        </Span>
                                        <Span mt={1} />
                                        <Span display="flex" alignItems="center" borderBottom="1px solid #ddd">
                                            <div className={classes.NumbersDelete}>134</div>
                                            <Typography variant="body2" >
                                                Total Numbers Violated
                                            </Typography>
                                        </Span>
                                        <Span mb={1} />
                                    </Span>
                                </Span>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Span border="1px solid #ddd" bgcolor="#FFEFF1" >
                                    <Span display="flex" alignItems="center" justifyContent="space-between" p={1.4} borderBottom="1px solid #ddd">
                                        <Typography variant="subtitle2" className={classes.BizTitle}>Notes</Typography>
                                        <Span display="flex" alignItems="center">
                                            <Button variant="contained" className={classes.UpdateBtn}>Update</Button>
                                            <FontAwesomeIcon icon={faSyncAlt} className={classes.BiZIcon} />
                                        </Span>
                                    </Span>
                                    <div className={classes.TextAreaCss}>
                                        <FormControl fullWidth>
                                            <TextareaAutosize
                                                rowsMin={33}
                                                rowsMax={33}
                                                aria-label="maximum height"
                                                className={classes.NotesTextField}
                                            />
                                        </FormControl>
                                    </div>
                                    <Span mb={1} />
                                </Span>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Span border="1px solid #ddd" bgcolor="#FFEFF1">
                                <Span display="flex" alignItems="center" justifyContent="space-between" p={1.4} borderBottom="1px solid #ddd">
                                <div>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="to_number"
                                                    label="To Number"
                                                    placeholder="Enter Clients Number"
                                                    type="text"
                                                    variant="outlined"
                                                    InputProps={{ classes: {input: classes.textField,},}} 
                                                    InputLabelProps={{classes:{outlined:classes.cssLabel,shrink:classes.LableShrink}}}
                                                />
                                            </FormControl> 
                                        </div>
                                        <Span display="flex" alignItems="center">
                                            <Button variant="contained" className={classes.UpdateBtn}>Send</Button>
                                            <FontAwesomeIcon icon={faSyncAlt} className={classes.BiZIcon} />
                                        </Span>
                                    </Span>
                                    <Span p={1.4}>
                                        <FormControl fullWidth>
                                            <TextareaAutosize
                                                rowsMin={6}
                                                rowsMax={6}
                                                placeholder='Message Body'
                                                aria-label="maximum height"
                                                className={classes.NumberTextField}
                                            />
                                        </FormControl>
                                    </Span>
                                </Span>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Span bgcolor='#ffeff1' border='1px solid #ddd'>
                                    <Span borderBottom='1px solid #ddd' p={1.4} display='flex' alignItems='center' justifyContent='space-between'>
                                        <Span display='flex' alignItems='center'>
                                            <Typography variant='subtitle2' className={classes.EmailNumberText}>Flag Status:</Typography>
                                            <div>
                                            <ButtonGroup>
                                                <Button variant="contained" size="small" className={classes.OnButton}>On</Button>
                                                <Button className={classes.offBtn}>Off</Button>
                                            </ButtonGroup>
                                            </div>
                                        </Span>
                                        <Span>
                                            <Button className={classes.UpdateBtn}>Update</Button>
                                            <FontAwesomeIcon icon={faSyncAlt} className={classes.BiZIcon} />
                                        </Span>
                                    </Span>
                                    <Span p={1.4}>
                                        <FormControl fullWidth>
                                            <TextareaAutosize
                                                rowsMin={6}
                                                rowsMax={6}
                                                aria-label="maximum height"
                                                className={classes.FlagTextField}
                                            />
                                        </FormControl>
                                    </Span>
                                </Span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(UserDashboard)
