import { Divider, Grid, Typography, withStyles, Checkbox, FormControl, TextField, Button, Paper, List, ListItem, ListItemAvatar, Table, ListItemIcon, ListItemText, Icon, Avatar, TableContainer, Tab, TableHead, TableRow, TableCell } from '@material-ui/core';
import Span from "@material-ui/core/Box"
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: "bold" },
    CheckboxCss: { padding: 0, },
    Buttons: {
        background: "#fb6e8a", color: "#fff", fontSize: 14, boxShadow: "none", padding: "7px 15px", margin: "0px 3px", "&:hover": { backgroundColor: '#fb6e8a', boxShadow: "none" }
    },
    textFieldFolder: { fontSize: 12, width: "203px", color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    ListCheckBox: { padding: 0, marginTop: -7 },
    AvatarCss: { background: '#fb6e8a', fontSize: 13, marginRight: 10 },
    StarIcon: { fontSize: 22, color: '#717171', margin: '0px 4px' },
    UserMsg: { fontSize: 13, },
    UserDateAndTime: { fontSize: 11, color: '#585858' },
    UserName: { fontSize: 14, marginTop: 4, marginBottom: -4 },
    ListItemCss: { padding: '8px 21px', '&:hover': { cursor: 'pointer', background: '#efefef' } },
    ListItemCssSecond: { padding: '8px 21px', borderLeft: "3px solid #fb6e8a", '&:hover': { cursor: 'pointer', } },
    ListItemCssActive: { padding: '8px 21px', background: "#F6D8D8 ", color: "#A94442", '&:hover': { cursor: 'pointer', background: '#F6D8D8' } },
    AvatarCssActive: { background: '#A94442', fontSize: 13, marginRight: 10 },
    UserMsgActive: { fontSize: 13, color: "#A94442" },
    UserDateAndTime: { fontSize: 11, color: '#585858' },
    MoreBtn: { borderRadius: 38, fontSize: 11, color: "#fff", background: "#fb6e8a", padding: "12px 35px" },

    // rightSectionCss
    InfoTextCss: { marginLeft: 159, },
    MessageText: { color: "#fb6e8a", fontSize: 14, },
    EditBtnCss: { color: "#fb6e8a", fontSize: 11, borderColor: "#fb6e8a", borderRadius: 0, margin: "0px 2px" },
    SubInfoCss: { fontSize: 20, fontWeight: "bold" },
    InfoMsgLink: { textDecoration: 'none', fontSize: 15, fontWeight: 600, color: '#4a4a4a', '&:hover': { color: '#fb6e8a !important', } },
    InfoMsgLinkSelected: { textDecoration: 'none', fontSize: 15, fontWeight: 600, marginLeft: 10, color: '#fb6e8a', '&:hover': { color: '#fb6e8a', } },
    TableCss: { border: "1px solid #ddd" },
    TableCellCss: { border: "1px solid #ddd", padding: "5px 15px", textAlign: "center" },
    UnSubBtn: { color: "#fff", fontSize: 11, background: "#FF9900", padding: "6px 7px", margin: "0px 7px" },
    TableText: { fontSize: 18, color: "#212121;" },
    TableTextActive: { color: "#5cb85c", fontSize: 18, },
    UserNumber: { fontSize: 12 },

    [theme.breakpoints.only('md')]: {
        BtnCss: { display: "flex" },
        TableCss: { minWidth: 780 },
        InfoMsgLinksContainer: { marginLeft: 40 },

    },
    [theme.breakpoints.only('sm')]: {

        BtnCss: { display: "flex" },
        TableCss: { minWidth: 780 },
        InfoMsgLinksContainer: { marginLeft: 10 },


    },
    [theme.breakpoints.only('xs')]: {
        GoDropdownBtn: { display: 'flex' },
        Buttons: { background: '#fb6e8a', color: '#fff', minWidth: 32, marginLeft: 5, marginTop: 1, '&:hover': { background: '#f98aa0', color: '#fff' } },
        InfoMsgLinksContainer: { marginLeft: 0 },
        ChatContainer: { paddingRight: 0 },
        TypeMsgInputContainer: { left: '7px !important' },
        CheckBoxContainer: { position: 'absolute', zIndex: 1, right: 'auto', marginTop: -33, marginLeft: 21 },
        PopperBtnContainer: { flexDirection: 'row' },
        BtnCss: { display: "flex" },
        TableCss: { minWidth: 780 },
        InfoMsgLinksContainer: { marginLeft: 0 },

    },
});
const IMMessages = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={2} mt={2}>
                <Typography className={classes.Title}>IM Messages </Typography>
                <Span mb={3.9}><Divider /></Span>
                <Grid container direction="row">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Span bgcolor="#ECECEC" borderRight="1px solid #ddd">
                            <Span className={classes.ResponsiveView} py={2} display="flex" justifyContent="space-evenly" alignItems="center">
                                <Checkbox color="default" size="small" className={classes.CheckboxCss} />
                                <FormControl>
                                    <TextField variant="outlined" size="small"
                                        placeholder="Enter name or number"
                                        color="primary"
                                        InputProps={{ classes: { input: classes.textFieldFolder, }, }}
                                    />
                                </FormControl>
                                <div className={classes.BtnCss}>
                                    <Button variant="contained" className={classes.Buttons}>Go</Button>
                                    <Button variant="contained" className={classes.Buttons}><ArrowDropDownIcon /></Button>
                                </div>
                            </Span>
                        </Span>
                        {/* ListSection */}
                        <List>
                            <ListItem alignItems="flex-start" disableGutters classes={{ root: classes.ListItemCss }}>
                                <ListItemAvatar>
                                    <Span display='flex' alignItems='center'>
                                        <div><Checkbox color="default" size="small" className={classes.ListCheckBox} /></div>
                                        <div><StarBorderIcon className={classes.StarIcon} /></div>
                                        <Avatar className={classes.AvatarCss}>MK</Avatar>
                                    </Span>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Span display='flex' alignItems='center' justifyContent='space-between'>
                                            Mark Khokle <span className={classes.UserDateAndTime}>4:25 AM Sep 19 2020</span>
                                        </Span>
                                    }
                                    classes={{ primary: classes.UserName }}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textPrimary" className={classes.UserMsg}>
                                            Texting incoming
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider />
                            <ListItem alignItems="flex-start" disableGutters classes={{ root: classes.ListItemCssSecond }}>
                                <ListItemAvatar>
                                    <Span display='flex' alignItems='center'>
                                        <div><Checkbox color="default" size="small" className={classes.ListCheckBox} /></div>
                                        <div><StarBorderIcon className={classes.StarIcon} /></div>
                                        <Avatar className={classes.AvatarCss}>R</Avatar>
                                    </Span>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Span display='flex' alignItems='center' justifyContent='space-between'>
                                            Rob <span className={classes.UserDateAndTime}>4:25 AM Sep 19 2020</span>
                                        </Span>
                                    }
                                    classes={{ primary: classes.UserName }}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textPrimary" className={classes.UserMsg}>
                                            Texting incoming
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider />
                            <ListItem alignItems="flex-start" disableGutters classes={{ root: classes.ListItemCss }}>
                                <ListItemAvatar>
                                    <Span display='flex' alignItems='center'>
                                        <div><Checkbox color="default" size="small" className={classes.ListCheckBox} /></div>
                                        <div><StarBorderIcon className={classes.StarIcon} /></div>
                                        <Avatar className={classes.AvatarCss}>MK</Avatar>
                                    </Span>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Span display='flex' alignItems='center' justifyContent='space-between'>
                                            Mark Khokle <span className={classes.UserDateAndTime}>4:25 AM Sep 19 2020</span>
                                        </Span>
                                    }
                                    classes={{ primary: classes.UserName }}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textPrimary" className={classes.UserMsg}>
                                            Texting incoming
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start" disableGutters classes={{ root: classes.ListItemCssActive }}>
                                <ListItemAvatar>
                                    <Span display='flex' alignItems='center'>
                                        <div><Checkbox color="default" size="small" className={classes.ListCheckBox} /></div>
                                        <div><StarBorderIcon className={classes.StarIcon} /></div>
                                        <Avatar className={classes.AvatarCssActive}><Icon>person</Icon></Avatar>
                                    </Span>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Span display='flex' alignItems='center' justifyContent='space-between'>
                                            (480) 815-8646 <span className={classes.UserDateAndTime}>4:25 AM Sep 19 2020</span>
                                        </Span>
                                    }
                                    classes={{ primary: classes.UserName }}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textPrimary" className={classes.UserMsgActive}>
                                            I'M sorry tearing what out ?
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start" disableGutters classes={{ root: classes.ListItemCssActive }} style={{ marginTop: "1px" }}>
                                <ListItemAvatar>
                                    <Span display='flex' alignItems='center'>
                                        <div><Checkbox color="default" size="small" className={classes.ListCheckBox} /></div>
                                        <div><StarBorderIcon className={classes.StarIcon} /></div>
                                        <Avatar className={classes.AvatarCssActive}><Icon>person</Icon></Avatar>
                                    </Span>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Span display='flex' alignItems='center' justifyContent='space-between'>
                                            (480) 815-8646 <span className={classes.UserDateAndTime}>4:25 AM Sep 19 2020</span>
                                        </Span>
                                    }
                                    classes={{ primary: classes.UserName }}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textPrimary" className={classes.UserMsgActive}>
                                            I'M sorry tearing what out ?
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                        <Span mt={4} mb={2} />
                        <Divider />
                        <Span align="center" my={2}>
                            <Button variant="contained" className={classes.MoreBtn}>Load More</Button>
                        </Span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={8}>
                        <Span bgcolor="#ECECEC" px={2} py={1.8}>
                            <Span display='flex' alignItems='center'>
                                <Span>
                                    <Typography variant='subtitle2'>Mark K</Typography>
                                    <Typography variant='subtitle2'>Betwext Number <span className={classes.UserNumber}>(480) 405-4028</span></Typography>
                                </Span>
                                <Span display='flex' ml={20} className={classes.InfoMsgLinksContainer}>
                                    <a href='#' className={classes.InfoMsgLink}>INFO</a>
                                    <a href='#' className={classes.InfoMsgLinkSelected}>MESSAGES</a>
                                </Span>
                            </Span>
                        </Span>
                        <Span px={2}>
                            <Span mt={2.3} mb={1.4} display="flex" alignItems="center" justifyContent="space-between">
                                <Typography variant="subtitle2" className={classes.SubInfoCss}>Subscriber Info</Typography>
                                <Button variant="outlined" className={classes.EditBtnCss}>Edit</Button>
                            </Span>
                            <Divider />
                            <Span mb={3} />
                            <TableContainer>
                                <Table className={classes.TableCss}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell classes={{ head: classes.TableCellCss }} width="34%">
                                                <Span display="flex" alignItems="center" justifyContent="center">
                                                    <Typography variant="subtitle2" className={classes.TableText}>(480) 376-7242</Typography>
                                                    <Button variant="contained" className={classes.UnSubBtn}>Unsubscirbe</Button>
                                                </Span>
                                            </TableCell>
                                            <TableCell classes={{ head: classes.TableCellCss }} width="33%">
                                                <Typography variant="subtitle2" className={classes.TableText}>67</Typography>
                                                <Typography variant="subtitle2" className={classes.TableText}>Replys</Typography>
                                            </TableCell>
                                            <TableCell classes={{ head: classes.TableCellCss }} width="33%">
                                                <Typography variant="subtitle2" className={classes.TableTextActive}>Active Subscriber</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Span>
                    </Grid>
                </Grid>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(IMMessages);