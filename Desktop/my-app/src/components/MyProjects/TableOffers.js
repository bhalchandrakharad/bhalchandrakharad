import React, { useState } from 'react';
import { Divider, FormControl, Grid, TextField, Menu, Typography, Icon, withStyles, MenuItem, Popover, IconButton, Button, FormHelperText, Table, TableHead, ListItemText, ListItem, Collapse, List, TableRow, TableCell, TableBody, TableContainer, Paper } from '@material-ui/core'
import Span from "@material-ui/core/Box";
import MenuIcon from '@material-ui/icons/Menu';
import MarketImage from "../../assets/marketbeat.png"
import StockImage from "../../assets/stockmarketstock.jpg"
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPause, } from '@fortawesome/free-solid-svg-icons';

import CheckIcon from '@material-ui/icons/Check';
import PauseIcon from '@material-ui/icons/Pause';
const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: 500 },
    SubTitle: { fontSize: 16, fontWeight: 500 },
    TableInfo: { fontSize: 15, fontWeight: 400 },
    NumberTitle: { fontSize: 12 },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    cssLabel: { color: '#908f8f', transform: "translate(14px, 13px) scale(1)", fontSize: 13, },
    LableShrink: { fontSize: 15, transform: 'translate(17px, -4px) scale(0.75) !important', color: '#232323' },
    TableCss: { border: "1px solid #ddd" },
    TableHeadCellCss: { fontSize: 13, padding: "2px 16px", color: "#0073AA" },
    TableHeadCss: { background: '#ebebeb', lineHeight: '6px !important' },
    ActionBtnDropdown: { position: 'absolute', zIndex: 1, marginTop: 2 },
    TableCellCss: { padding: '7px 16px', fontSize: 13, color: '#585757' },
    EnabledBtn: { fontSize: 11, padding: "5px 15px", width: "105px", boxShadow: "none", background: "#4CAE4C", color: "#fff", '&:hover': { boxShadow: "none", background: "#4CAE4C" } },
    PausedBtn: { fontSize: 11, padding: "5px 15px", width: "105px", boxShadow: "none", background: "#B61919", color: "#fff", '&:hover': { boxShadow: "none", background: "#B61919" } },
    ProfileDropdown: { marginTop: 46, width: 147 },
    DropDownIcons: { marginTop: 2, marginRight: 2, color: "#0073AA", fontSize: 16 },
    DropdownPadding: { padding: '3px 15px' },
    DropDownText: { color: "#0073AA", fontWeight: 500, marginLeft: 5 },
    CheckIconCss: { fontSize: 13, marginRight: 4, marginTop: 2 },
    PauseIconCss: { fontSize: 16, marginRight: 4, },
})
const TableOffers = (props) => {
    const { classes } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [anchorElSecond, setAnchorElSecond] = React.useState(null);
    const openSecond = Boolean(anchorElSecond);
    const handleClose = () => {
        setAnchorElSecond(null);
    };
    const handleClick = (event) => {
        setAnchorElSecond(event.currentTarget);
    };


    const handleMenuAction = (event) => { setAnchorEl(event.currentTarget); };
    const handleCloseAction = () => { setAnchorEl(null); };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const id = open ? 'simple-popover' : undefined;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="subtitle2" className={classes.Title}>Configure Offers for LPs</Typography>
                <Span mt={1} mb={2}> <Divider /> </Span>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Typography variant="subtitle2" className={classes.SubTitle}>LP Offers</Typography>
                        <Typography variant="subtitle1" className={classes.TableInfo}>
                            By using the dropdown and table you are able to add and manage the offers added to this all LPs. Add an offer from the
                            dropdown and then you have the ability to reorder the offers by dragging the toggle on the left side of the table rearranging theme.
                            you also have the option to keep offers enabled or pause theme for the time being.
                        </Typography>
                        <Span mt={1} > <Divider /> </Span>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Typography variant="caption" className={classes.NumberTitle} >Number of Offers</Typography>
                        <Span mb={1} />
                        <Grid container direction="row">
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="number"
                                        type="number"
                                        variant="outlined"
                                        defaultValue={12}
                                        InputProps={{ classes: { input: classes.textField, }, }}
                                        InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                    />
                                    <FormHelperText error>Leave this at 0 in order to allow unlimited offers on this page.</FormHelperText>
                                </FormControl>
                                <Span mb={1} />
                            </Grid>
                        </Grid>
                        <Typography variant="caption" className={classes.Title} >LP Offers</Typography>
                        <Span mt={1} mb={3.2}> <Divider /> </Span>
                        <TableContainer component={Paper}>
                            <Table className={classes.TableCss}>
                                <TableHead className={classes.TableHeadCss}>
                                    <TableRow>
                                        <TableCell width="6%" classes={{ head: classes.TableHeadCellCss }}>Move</TableCell>
                                        <TableCell width="17%" classes={{ head: classes.TableHeadCellCss }}>Image</TableCell>
                                        <TableCell width="17%" classes={{ head: classes.TableHeadCellCss }}>Name</TableCell>
                                        <TableCell width="20%" classes={{ head: classes.TableHeadCellCss }}>Title</TableCell>
                                        <TableCell width="20%" classes={{ head: classes.TableHeadCellCss }}>This Month <Divider /> Today</TableCell>
                                        <TableCell width="20%" classes={{ head: classes.TableHeadCellCss }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell classes={{ body: classes.TableCellCss }}><MenuIcon /></TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}><img src={MarketImage} width="120" height="60" /></TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}>Digest Pub STN Oct 2021 URC</TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}>Biden Era Ushers In New Breed of Cleen Energy Profit-Stocks</TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}>104 (No limit)<Divider />6 (No limit) </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.EnabledBtn} onClick={handleMenuAction}>
                                                <FontAwesomeIcon icon={faCheck} className={classes.CheckIconCss} />  Enabled
                                                {(anchorEl) ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}
                                            </Button>
                                            <div>
                                                <Menu
                                                    id="menu-appbar"
                                                    anchorEl={anchorEl}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                    open={open}
                                                    onClose={handleCloseAction}
                                                    classes={{ paper: classes.ProfileDropdown }}
                                                >
                                                    <MenuItem onClick={handleCloseAction} dense classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faCheck} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Enable</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><PauseIcon className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Pause</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ body: classes.TableCellCss }}><MenuIcon /></TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}><img src={StockImage} width="120" height="60" /></TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}>Montley Fool September 2021</TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}>The Motley Fool Issue Rare Double Down Stock Buy Alert</TableCell>
                                        <TableCell classes={{ body: classes.TableCellCss }}>90 (No limit)<Divider /> 7 (No limit) </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.PausedBtn} onClick={handleMenuAction}>
                                                <PauseIcon className={classes.PauseIconCss} />  Paused
                                                {(anchorEl) ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}
                                            </Button>
                                            <div>
                                                <Menu
                                                    id="menu-appbar"
                                                    anchorEl={anchorEl}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                    open={open}
                                                    onClose={handleCloseAction}
                                                    classes={{ paper: classes.ProfileDropdown }}
                                                >
                                                    <MenuItem onClick={handleCloseAction} dense classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faCheck} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Enable</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><PauseIcon className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Pause</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
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

export default withStyles(styles)(TableOffers);
