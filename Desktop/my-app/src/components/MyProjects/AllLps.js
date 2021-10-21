import React, { useState } from 'react'
import Span from "@material-ui/core/Box";
import { withStyles, Typography, Divider, Grid, Button, Paper, TableContainer, Menu, MenuItem, Table, TableHead, TableBody, TableRow, TableCell, } from '@material-ui/core';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: 'bold', marginBottom: -8 },
    SubSubtitles: { fontSize: 17 },
    TableHeadCss: { background: '#ebebeb', lineHeight: '6px !important' },
    TableCss: { border: '1px solid #e0e0e0' },
    TableCellHead: { lineHeight: '6px !important', fontSize: 12, color: '#585757', fontWeight: 'bold' },
    TableCellCss: { padding: '7px 16px', fontSize: 13, color: '#585757' },
    TableLink: { cursor: 'pointer', color: '#0073AA', fontSize: 13 },
    AllLeftInfoText: { fontSize: 13 },
    ProfileDropdown: { marginTop: 46, width: 147 },
    DropdownPadding: { padding: '3px 15px' },
    DropDownIcons: { marginTop: 2, marginRight: 2, color: "#0073AA", fontSize: 16 },
    ActionBtns: { background: '#0073AA', color: '#fff', fontSize: 11, padding: "5px 15px", '&:hover': { background: '#0073AA', color: '#fff' } },
    DropDownText: { color: "#0073AA", fontWeight: 500, marginLeft: 5 },
    [theme.breakpoints.only('md')]: {
        ProfileDropdown: { width: 120 },
    },
    [theme.breakpoints.only('sm')]: {
        ProfileDropdown: { width: 120 },
    },
    [theme.breakpoints.only('xs')]: {
    },
})
const AllLps = (props) => {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuAction = (event) => { setAnchorEl(event.currentTarget); };
    const handleCloseAction = () => { setAnchorEl(null); };
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="subtitle2" className={classes.Title}>All LPs</Typography>
                <Span mb={3} mt={1}><Divider /></Span>
                <Grid container direction='row' spacing={3}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Typography variant='h6' className={classes.SubSubtitles}>About LPs</Typography>
                        <Span>
                            <Typography variant='caption' className={classes.AllLeftInfoText}>
                                LPs are sets of offers displayed at unique URL for a user to visit.
                            </Typography>
                            <Span mt={2} mb={3}><Divider /></Span>

                        </Span>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>

                        <TableContainer component={Paper}>
                            <Table className={classes.TableCss} multiSelectable={true}>
                                <TableHead className={classes.TableHeadCss}>
                                    <TableRow>
                                        <TableCell classes={{ head: classes.TableCellHead }} width='30%'>Name</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHead }} width='25%'>Title</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHead }} width='25%'>Created</TableCell>
                                        <TableCell classes={{ head: classes.TableCellHead }} width='20%'></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody displayRowCheckbox={true} stripedRows>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN010</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/03/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN009</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/03/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN008- Facebook</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/03/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN007- Outbrain</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/03/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN006</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/03/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN005 -Google Display Network</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/03/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Typography variant='subtitle2' className={classes.TableLink}>ZMN004</Typography>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>ZenMoneyNews Free Report</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>12/02/2020</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.ActionBtns} onClick={handleMenuAction}>
                                                Action
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
                                                            <div><FontAwesomeIcon icon={faEdit} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Edit</Typography>
                                                        </Span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleCloseAction} classes={{ root: classes.DropdownPadding }}>
                                                        <Span display='flex'>
                                                            <div><FontAwesomeIcon icon={faTrashAlt} className={classes.DropDownIcons} /></div>
                                                            <Typography variant="subtitle2" className={classes.DropDownText}>Delete</Typography>
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

export default withStyles(styles)(AllLps);



