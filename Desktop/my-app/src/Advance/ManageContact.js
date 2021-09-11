import React from "react";
import Span from "@material-ui/core/Box";
import { Typography, withStyles, Divider, FormControl, IconButton, Tooltip, Icon, Table, TableCell, Paper, Grid, TextField, MenuItem, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Checkbox, TableContainer, TableHead, TableRow, TableBody } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserGraduate, faBan, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = (theme) => ({
    ContactTitle: { fontSize: 20, fontWeight: "bold" },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '10px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    InputWidth: { width: 200 },
    textFieldFolder: { fontSize: 12, color: '#2b2b2b', padding: '8px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    SearchButton: { borderRadius: "30px", fontSize: 11, },
    ActiveList: { color: "#fb6e8a", borderRadius: 30, background: "#fb6e8a38 !important", },
    SimpleList: { color: "#000", borderRadius: 30, background: "#fff" },
    IconUser: { width: "90px", padding: "0px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fb6e8a", fontSize: "35px", color: "#fff", borderRadius: "3px 0px 0px 3px" },
    TotlaSubscribers: { fontSize: 16, marginLeft: "12px", marginTop: "12px", marginBottom: "9px" },
    TotalNumbers: { marginLeft: 12, fontSize: 16, marginTop: 20, },
    SubmitBtn: { border: '1px solid #fb6e8a', color: '#fb6e8a', fontSize: 11, padding: '8px 20px', borderRadius: 30 },
    ToolTipTitle: { fontSize: 13, background: '#000', textAlign: 'center' },
    ToolTipIcon: { fontSize: 20 },
    SelectSecBtn: { border: '1px solid #fb6e8a', color: '#fb6e8a', fontSize: 11, padding: '8px 10px', borderRadius: 30 },
    SelectSecBtnUnsub: { border: '1px solid #fb6e8a', color: '#fb6e8a', fontSize: 11, padding: '8px 10px', marginLeft: 5, marginRight: 5, borderRadius: 30 },
    InputWidthSub: { width: 200, margin: '0px 5px' },
    CheckboxCss: { padding: "0px" },
    TableCss: { border: "1px solid #ddd" },
    TableHeadCss: { background: '#ebebeb', lineHeight: '6px !important' },
    TableCellHeadCss: { padding: "10px 16px", lineHeight: "6px !important", fontSize: "13px", color: "#fb6e8a", fontWeight: "bold" },
    ActionButns: { background: '#fb6e8a', color: '#fff', minWidth: 30, padding: '4px 0px', fontSize: 16, margin: '0px 2px', boxShadow: 'none' },
    TableCellCss: { padding: '12px 15px', fontSize: 13, color: '#585757' },
    TableCellLinkCss: { fontSize: 13, padding: "0px 15px", color: "#fb6e8a", cursor: "pointer" },

    // paginationCss
    PaginationContainer: { padding: '0px 0px 0px 8px', display: 'flex', alignItems: 'center', width: 'fit-content', borderRadius: 37 },
    divider: { height: 28, margin: 2 },
    iconButton: { padding: 10, color: '#101010' },
    PageNumber: { padding: '7px 11px', fontSize: 15, color: '#101010' },
    PaginationDirection: { fontSize: 15, color: '#fb6e8a' },
    PageNumberSelected: { padding: '5px 9px', fontSize: 15, color: '#fb6e8a', border: '1px solid #fb6e8a', background: '#fff' },
    FirstLastBtn: { padding: '4px 0px', fontSize: 10 },


    [theme.breakpoints.only('md')]: {
        TableCss: { minWidth: 900, },
        InputWidthSub: { width: 168 },
        SubmitBtn: { float: 'right', marginTop: 8 },
    },
    [theme.breakpoints.only('sm')]: {
        TableCss: { minWidth: 900, },
        GridWidth: { maxWidth: '100%' },
        SelectSecBtn: { padding: '8px 5px', marginBottom: 10 },
        SelectSecBtnUnsub: { padding: '8px 8px', marginBottom: 10 },
        SubmitBtn: { display: 'block', marginTop: 8, float: 'right' },
        InputWidthSub: { width: '100%', marginTop: 10 },
    },
    [theme.breakpoints.only('xs')]: {
        ContactTitle: { fontSize: 18, fontWeight: 'bold' },
        ResponsiveView: { display: 'grid' },
        TableCss: { minWidth: 900, },
        InputWidthSub: { width: '100%', marginTop: 10 },
        SubmitBtn: { display: 'block', marginTop: 8, float: 'right' },
        SelectSecBtnUnsub: { marginTop: 8 },
        SelectSecBtn: { marginTop: 8 },
        ResponsiveView: { display: 'grid' },
    },
});
const ManageContact = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Span display='flex' alignItems='center' justifyContent='space-between' className={classes.ResponsiveView}>
                    <Typography variant="subtitle2" className={classes.ContactTitle}>Manage Contacts</Typography>
                    <FormControl className={classes.InputWidth}>
                        <TextField
                            select
                            // value={value}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.textFieldFolder, }, }}
                        >
                            <MenuItem value={1}>25</MenuItem>
                        </TextField>
                    </FormControl>
                </Span>
                <Span mt={1} mb={3.7}><Divider /></Span>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <FormControl fullWidth>
                            <TextField
                                select
                                // value={value}
                                variant="outlined"
                                placeholder="Name"
                                InputProps={{ classes: { input: classes.textFieldFolder, }, }}
                            >
                                <MenuItem value={1}>25</MenuItem>
                            </TextField>
                        </FormControl>
                        <Span mt={2} />
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Enter Search Parameter"
                                type="text"
                                variant="outlined"
                                InputProps={{ 
                                    classes: {input: classes.textField,},
                                }} 
                            />
                        </FormControl>
                        <Span mt={1} mb={2}>
                            <Button variant="outlined" color="primary" className={classes.SearchButton}>Search</Button>
                        </Span>
                        <Typography variant="caption">
                            Be sure to look at your unsubscribe list on the top navigation if you can't find a number.
                        </Typography>
                        <Span mt={1} />
                        <List dense>
                            <ListItem button classes={{ button: classes.ActiveList }}>
                                <ListItemText primary="Sync Contacts" />
                                <Typography variant="subtitle2">344</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="A1 Sync" />
                                <Typography variant="subtitle2">14</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="A2" />
                                <Typography variant="subtitle2">16</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="A3 Sync" />
                                <Typography variant="subtitle2">7</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="Customers List" />
                                <Typography variant="subtitle2">225</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="I1 Sync" />
                                <Typography variant="subtitle2">10</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="I2 Sync" />
                                <Typography variant="subtitle2">5</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="I3 Sync" />
                                <Typography variant="subtitle2">7</Typography>
                            </ListItem>
                        </List>
                        <Span mt={1} mb={3.7}><Divider /></Span>
                        <List dense>
                            <ListItem button classes={{ button: classes.ActiveList }}>
                                <ListItemText primary="Public Contacts" />
                                <Typography variant="subtitle2">394</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="Unit List Sync" />
                                <Typography variant="subtitle2">276</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="A1 List Sync" />
                                <Typography variant="subtitle2">16</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="A2 List Sync" />
                                <Typography variant="subtitle2">27</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="A3 List Sync" />
                                <Typography variant="subtitle2">225</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="I1 Sync" />
                                <Typography variant="subtitle2">10</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="I2 Sync" />
                                <Typography variant="subtitle2">5</Typography>
                            </ListItem>
                            <ListItem button classes={{ button: classes.SimpleList }}>
                                <ListItemText primary="I3 Sync" />
                                <Typography variant="subtitle2">7</Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={9} lg={9}>
                        <Grid container direction="row" spacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper>
                                    <Span display="flex">
                                        <div className={classes.IconUser}><FontAwesomeIcon icon={faUsers} /></div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.TotlaSubscribers}>Totla Subscribers</Typography>
                                            <Typography variant="subtitle2" className={classes.TotalNumbers}>362</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper>
                                    <Span display="flex">
                                        <div className={classes.IconUser}><FontAwesomeIcon icon={faUserGraduate} /></div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.TotlaSubscribers}>Active Subscribers</Typography>
                                            <Typography variant="subtitle2" className={classes.TotalNumbers}>48</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper>
                                    <Span display="flex">
                                        <div className={classes.IconUser}><FontAwesomeIcon icon={faBan} /></div>
                                        <div>
                                            <Typography variant="subtitle2" className={classes.TotlaSubscribers}>Unsubscribed</Typography>
                                            <Typography variant="subtitle2" className={classes.TotalNumbers}>314</Typography>
                                        </div>
                                    </Span>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Span mb={3.7} mt={1.9}><Divider /></Span>
                        <Grid container direction='row' justify='space-between'>
                            <Grid item xs={12} sm={12} md={6} lg={5} /*className={classes.GridWidth}*/>
                                <Button
                                    variant="outlined"
                                    className={classes.SelectSecBtn}
                                >
                                    Text To Selected
                                    <Tooltip
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="Send SMS/MMS to selected subscriber. Please note data rate will be applied as per your subscription."
                                        placement="top"
                                    >
                                        <Icon className={classes.ToolTipIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button
                                    variant="outlined"
                                    className={classes.SelectSecBtnUnsub}
                                >
                                    Unsubscribe Selected
                                    <Tooltip
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="This will unsubscribe selected subscriber."
                                        placement="top"
                                    >
                                        <Icon className={classes.ToolTipIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={7} align='right'>
                                <FormControl className={classes.InputWidthSub}>
                                    <TextField
                                        select
                                        // value={value}
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textFieldFolder, }, }}
                                    >
                                        <MenuItem>Subscriber Actions</MenuItem>
                                    </TextField>
                                </FormControl>
                                <FormControl className={classes.InputWidthSub}>
                                    <TextField
                                        select
                                        // value={value}
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textFieldFolder, }, }}
                                    >
                                        <MenuItem>Move to</MenuItem>
                                    </TextField>
                                </FormControl>
                                <Button
                                    variant="outlined"
                                    className={classes.SubmitBtn}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                        <Span mb={3.7} />
                        <TableContainer component={Paper}>
                            <Table className={classes.TableCss}>
                                <TableHead className={classes.TableHeadCss}>
                                    <TableRow>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}>NUMBER</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}>NAME</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}>EMAIL</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}>ADDED</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}>STATUS</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHeadCss }}>LISTS</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ root: classes.TableCellLinkCss }}> (012) 345-1230
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faPhoneAlt} />
                                            </Button>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Vedant Khokhale</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>mark@betwext.com</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Active</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Unit List Sync, A1 Sync, T</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ root: classes.TableCellLinkCss }}> (012) 345-1230
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faPhoneAlt} />
                                            </Button>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Vedant Khokhale</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>mark@betwext.com</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Active</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Unit List Sync, A1 Sync, T</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ root: classes.TableCellLinkCss }}> (012) 345-1230
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faPhoneAlt} />
                                            </Button>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Vedant Khokhale</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>mark@betwext.com</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Active</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Unit List Sync, A1 Sync, T</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ root: classes.TableCellLinkCss }}> (012) 345-1230
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faPhoneAlt} />
                                            </Button>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Vedant Khokhale</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>mark@betwext.com</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Active</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Unit List Sync, A1 Sync, T</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ root: classes.TableCellLinkCss }}> (012) 345-1230
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faPhoneAlt} />
                                            </Button>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Vedant Khokhale</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>mark@betwext.com</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Active</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Unit List Sync, A1 Sync, T</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}><Checkbox color="default" className={classes.CheckboxCss} /></TableCell>
                                        <TableCell classes={{ root: classes.TableCellLinkCss }}> (012) 345-1230
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faPhoneAlt} />
                                            </Button>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Vedant Khokhale</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>mark@betwext.com</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Feb 13 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Active</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>Unit List Sync, A1 Sync, T</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Span mt={3}>
                            <Paper component="form" className={classes.PaginationContainer}>
                                <IconButton className={classes.iconButton} aria-label="menu">
                                    <ArrowBackIosIcon className={classes.PaginationDirection} />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <div>
                                    <Button size="small" className={classes.FirstLastBtn}>First</Button>
                                    <IconButton className={classes.PageNumber}>1</IconButton>
                                    <IconButton className={classes.PageNumber}>2</IconButton>
                                    <IconButton className={classes.PageNumber}>3</IconButton>
                                    <IconButton className={classes.PageNumber}>4</IconButton>
                                    <IconButton className={classes.PageNumberSelected}>5</IconButton>
                                    <IconButton className={classes.PageNumber}>6</IconButton>
                                    <Button size="small" className={classes.FirstLastBtn}>Last</Button>
                                </div>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton className={classes.iconButton} aria-label="menu">
                                    <ArrowForwardIosIcon className={classes.PaginationDirection} />
                                </IconButton>
                            </Paper>
                        </Span>
                    </Grid>
                </Grid>
            </Span>
        </React.Fragment>
    );
};

export default withStyles(styles)(ManageContact);