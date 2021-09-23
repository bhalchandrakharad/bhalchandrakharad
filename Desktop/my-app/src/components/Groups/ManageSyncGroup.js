import { Typography, withStyles, Divider, Paper, Table, Button, Avatar, CardContent, Icon, TextField, FormControl, MenuItem, Grid, Card, TableContainer, TableHead, TableRow, TableCell, Checkbox, IconButton, TableBody, Hidden, CardHeader } from '@material-ui/core';
import React, { useState } from 'react'
import Span from '@material-ui/core/Box'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

const styles = (theme) => ({
    GroupTitle: { fontSize: "20px", fontWeight: "bold" },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '10px 13px', background: '#fff', width: 100, '&::placeholder': { color: '#000', fontWeight: 500 } },
    CreateGroupBtn: { padding: "6px 15px", border: "1px solid #fa6e86", color: "#fa6e86", borderRadius: "50px", fontSize: "11px", marginLeft: "6px" },
    SelectedBtn: { borderColor: "#fa6e86", color: "#fa6e86", borderRadius: "50px", fontSize: "12px", fontWeight: "bold" },
    ActionButns: { background: '#fb6e8a', color: '#fff', minWidth: 31, padding: '5px 0px', fontSize: 16, margin: '8px 2px' },
    tableBorder: { border: "1px solid #ddd" },
    checkBoxCss: { padding: "0px" },
    TableHeadCss: { background: '#ebebeb', lineHeight: '6px !important' },
    TableCss: { border: '1px solid #e0e0e0' },
    TableCellHead: { lineHeight: '6px !important', fontSize: 12, color: '#585757', fontWeight: 'bold', padding: '0px 16px' },
    TableCellCss: { padding: '0px 15px', fontSize: 13, color: '#585757' },
    TableCellCssLink: { color: '#fb6e8a', fontSize: 13, padding: '0px 15px', },
    SortingItems: { display: 'flex', alignItems: 'center', color: '#fb6e8a' },
    GroupAvatar: { background: "#fa6e86" },
    SortingIcon: { padding: 0, color: '#fb6e8a' },

    [theme.breakpoints.only('xs')]: {
        GroupTitle: { fontSize: "12px" },
        ResponsiveView: { display: "grid" },
        ResponsiveInput:{marginTop:"8px"},
        // mobilecss
        GroupCard: { marginBottom: "15px" },
        SubscriberInfo: { fontSize: 11, color: '#353535' },
        CardContentPadding: { padding: '0px 23px 12px 23px !important' },
        GroupAvatar: { background: '#fb6e8a', marginLeft: 5 },
        GroupName: { color: '#fb6e8a', cursor: 'pointer' }
    },
})
const PageItemValues = [
    { value: 'items_per_page', label: 'Items Per Page' },
    { value: 'ten', label: '10' },
    { value: 'twenty_five', label: '25' },
    { value: 'fifty', label: '50' },
];
const ManageSyncGroup = (props) => {
    const { classes } = props;
    const [values, setValues] = useState({ ItemsPerPage: 'items_per_page' });
    const handleChange = name => event => { setValues({ ...values, [name]: event.target.value }); };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => { setExpanded(!expanded) };
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Span display="flex" alignItems="center" justifyContent="space-between" className={classes.ResponsiveView}>
                    <Span display="flex" alignItems="center">
                        <Typography variant="subtitle2" className={classes.GroupTitle}>Manage Sync Groups</Typography>
                        <Button className={classes.CreateGroupBtn}>Create Group</Button>
                    </Span>
                    <FormControl className={classes.ResponsiveInput}>
                        <TextField
                            select
                            value={values.ItemsPerPage}
                            variant="outlined"
                            onChange={handleChange('ItemsPerPage')}
                            InputProps={{ classes: { input: classes.textField, }, }}
                        >
                            {PageItemValues.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Span>
                <Span mt={1.9} mb={3.7}><Divider /></Span>
                <Button variant="outlined" className={classes.SelectedBtn}>Delete Selected Group(s)</Button>
                <Span mb={2} />
                <Hidden only="xs">
                    <TableContainer component={Paper}>
                        <Table className={classes.tableBorder}>
                            <TableHead className={classes.TableHeadCss}>
                                <TableRow>
                                    <TableCell classes={{ head: classes.TableCellHead }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width="27%">
                                        <div className={classes.SortingItems}>
                                            Group Name
                                            <IconButton className={classes.SortingIcon}><ArrowDropDownIcon /></IconButton>
                                        </div>
                                    </TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width="29%">
                                        <div className={classes.SortingItems}>
                                            Date Created
                                            <IconButton className={classes.SortingIcon}><ArrowDropDownIcon /></IconButton>
                                        </div>
                                    </TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width="29%">Subscribers</TableCell>
                                    <TableCell classes={{ head: classes.TableCellHead }} width="29%">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>Test Empty</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>7:43 AM 08-04-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>0</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>Test 6</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>10:10 AM 01-07-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>2</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>List 4</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>6:12 AM 02-08-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>0</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>List 4</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>7:41 AM 02-04-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>2</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>List 3</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>3:43 AM 27-04-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>2</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>List 2</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>5:20 AM 06-08-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>2</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Checkbox color="default" size="small" className={classes.CheckBoxCSs} />
                                    </TableCell>
                                    <TableCell classes={{ root: classes.TableCellCssLink }}>Mark New List</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>1:34 AM 04-04-2020</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>4</TableCell>
                                    <TableCell classes={{ root: classes.TableCellCss }}>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="contained" size="small" className={classes.ActionButns}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Hidden>
                {/* mobile-view */}
                <Hidden only={['lg', 'md', 'sm', 'xl']}>
                    <Grid container direction="row">
                        <Grid item xs={12}>
                            <Card className={classes.GroupCard}>
                                <CardHeader
                                    avatar={
                                        <Span display="flex" alignItems="flex-start">
                                            <Checkbox size='small' color='default' className={classes.CheckBoxCSs} />
                                            <Avatar className={classes.GroupAvatar}>
                                                <FontAwesomeIcon icon={faUsers} />
                                                <i class="fab fa-500px"></i>
                                            </Avatar>
                                        </Span>
                                    }
                                    title={<div className={classes.GroupName}>Group Name : List 4</div>}
                                    subheader={
                                        <div className={classes.SubscriberInfo}>
                                            Created : 07:43 AM 08-04-2020 <br />
                                            Number of Subscribers : 2
                                        </div>
                                    }
                                    action={
                                        <div>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded,
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ArrowDropDownIcon />
                                            </IconButton>
                                        </div>
                                    }
                                />
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent className={classes.CardContentPadding}>
                                        <Span mt={2} mb={3.5}><Divider /></Span>
                                        <Span align="flex-start">
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </Button>
                                        </Span>
                                    </CardContent>
                                </Collapse>
                            </Card>
                            <Card className={classes.GroupCard}>
                                <CardHeader
                                    avatar={
                                        <Span display="flex" alignItems="flex-start">
                                            <Checkbox size='small' color='default' className={classes.CheckBoxCSs} />
                                            <Avatar className={classes.GroupAvatar}>
                                                <FontAwesomeIcon icon={faUsers} />
                                            </Avatar>
                                        </Span>
                                    }
                                    title={<div className={classes.GroupName}>Group Name : List 3</div>}
                                    subheader={
                                        <div className={classes.SubscriberInfo}>
                                            Created : 07:43 AM 08-04-2020 <br />
                                            Number of Subscribers : 2
                                        </div>
                                    }
                                    action={
                                        <div>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded,
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ArrowDropDownIcon />
                                            </IconButton>
                                        </div>
                                    }
                                />
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent className={classes.CardContentPadding}>
                                        <Span mt={2} mb={3.5}><Divider /></Span>
                                        <Span align="flex-start">
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </Button>
                                        </Span>
                                    </CardContent>
                                </Collapse>
                            </Card>
                            <Card className={classes.GroupCard}>
                                <CardHeader
                                    avatar={
                                        <Span display="flex" alignItems="flex-start">
                                            <Checkbox size='small' color='default' className={classes.CheckBoxCSs} />
                                            <Avatar className={classes.GroupAvatar}>
                                                <FontAwesomeIcon icon={faUsers} />
                                            </Avatar>
                                        </Span>
                                    }
                                    title={<div className={classes.GroupName}>Group Name :Mark New List4</div>}
                                    subheader={
                                        <div className={classes.SubscriberInfo}>
                                            Created : 07:43 AM 08-04-2020 <br />
                                            Number of Subscribers : 4
                                        </div>
                                    }
                                    action={
                                        <div>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded,
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ArrowDropDownIcon />
                                            </IconButton>
                                        </div>
                                    }
                                />
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent className={classes.CardContentPadding}>
                                        <Span mt={2} mb={3.5}><Divider /></Span>
                                        <Span align="center">
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="contained" size="small" className={classes.ActionButns}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </Button>
                                        </Span>
                                    </CardContent>
                                </Collapse>
                            </Card>

                        </Grid>
                    </Grid>
                </Hidden>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)( ManageSyncGroup);
