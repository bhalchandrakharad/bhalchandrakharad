import React, { useState } from 'react'
import Span from "@material-ui/core/Box"
import {
    Typography, withStyles, Divider, Grid, Button, TextField, FormControl, FormHelperText, IconButton, Menu, Icon, Collapse,
    Dialog, DialogContent, TableContainer,Select, Paper, Checkbox, List, ListItem, ListItemText, Fab,DialogTitle, ButtonGroup
} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { faAddressCard, faEdit, faTrashAlt, faPlus, } from '@fortawesome/free-solid-svg-icons';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const styles = (theme) => ({
    Title: { fontSize: 20, },
    TemplateBtn: { borderRadius: "25px", fontSize: 11, padding: "5px 18px" },
    CampaignBtns: { borderRadius: 50, borderColor: '#fb6e8a', padding: '8px 23px', fontSize: 11, color: '#fb6e8a', marginRight: 5 },
    ProfileDropdown: { marginTop: 46 },
    textFieldMessage: { fontSize: 12, color: '#2b2b2b', paddingRight: 10, background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    MessageAllIons: { padding: 4, color: '#ffa5b7' },
    MessageAllIonsAttatchment: { padding: 4, color: '#ffa5b7', transform: 'rotate(307deg)' },
    MultitlineInput: { paddingTop: 10, paddingBottom: 40 },
    RemaingLetters: { color: '#fb6e8a', fontSize: 11, marginRight: 15 },
    InputIcons: { fontSize: 17, color: '#ffa5b7' },
    InputIconsContact: { fontSize: 14 },
    inputUpload: { display: 'none' },
    CampBtn: { borderRadius: 25, fontSize: 11, padding: "7px 18px" },
    ActionBtnDropdown: { position: 'absolute', zIndex: 1, right: 0, marginTop: 3 },
    ActionBtn: { borderRadius: 25, fontSize: 11, padding: "7px 18px" },
    //Right Section Group Css
    SearchInput: { background: '#fff !important' },
    SearchInputPadding: { paddingRight: 0 },
    GroupsContainer: { background: '#fff2f4', border: '1px solid #fff2f4' },
    GroupsPadding: { paddingRight: '0 !important' },
    GroupTitle: { fontSize: 13, color: '#fb6e8a', cursor: 'pointer' },
    GroupCheckBox: { display: 'flex', alignItems: 'center', margin: '13px 0px' },
    GroupName: { fontSize: 12, color: '#505050' },
    CheckoxIcon: { padding: 0, margin: '0px 4px 0px 0px' },
    SelectAllContainer: { border: '1px solid #ddd', height: 492 },
    SelectAllPadding: { paddingLeft: '0 !important' },
    SelectAllCheckBox: { display: 'flex', alignItems: 'center' },
    SelectAllTitle: { fontSize: 13, },
    SelectAllNumBtn: { borderRadius: 15, padding: '2px 0px', minWidth: 44, marginRight: 17, color: '#ffff', background: '#fb6e8a' },
    ListContainer: { height: 386, overflow: 'auto' },
    ListContainerGroup: { height: 477, overflow: 'auto' },
    DaysBtn:{padding:"12px 60px",background:"#fa6e8a !important",fontSize:11,border:"none",color:"#fff"},
    HoursBtn:{padding:"12px 60px",fontSize:11,color:"#fb6e8a",border:"1px solid #fb6e8a"},
    LastBtn:{borderRadius:25,fontSize:11,padding:"7px 15px",background:"#fff", margin:"4px 0px"},
    [theme.breakpoints.only('xs')]: {
        EditDeleteBtn: { marginRight: 48 },
        // GroupsPadding:{paddingRight:'16px !important'},
        // SelectAllPadding:{paddingLeft:'16px !important'},
        ActionBtn: { padding: '6px 0px 6px 10px' },
        CampaignBtns: { padding: '8px 10px' },
        TableCellHead: { lineHeight: '15px !important', padding: '5px 15px' },
    },
});
const CreateCampaign = (props) => {
    const { classes } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuAction = (event) => { setAnchorEl(event.currentTarget); };

    const handleCloseAction = () => { setAnchorEl(null); };

    const [anchorElEmoji, setAnchorElEmoji] = React.useState(null);
    const openEmoji = Boolean(anchorElEmoji);

    const handleMenu = (event) => { setAnchorElEmoji(event.currentTarget); };
    const handleClose = () => { setAnchorElEmoji(null); };

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => { setChosenEmoji(emojiObject); };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //date state
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
    };

    const [expandedDropdown, setExpandedDropdown] = React.useState(false);

    const handleDropdown = () => {
        setExpandedDropdown(!expandedDropdown);
    };
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="subtitle2" className={classes.Title}>Create Campaign</Typography>
                <Span mb={3}><Divider /></Span>
                <Grid container direction="row" spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Button variant="outlined" color="primary" classes={{ outlinedPrimary: classes.TemplateBtn }}>View Template</Button>
                        <Span mt={3} />
                        <FormControl fullWidth>
                            <TextField
                                size="small"
                                id="campaign_name"
                                label="Campaign Name"
                                type="text"
                                variant="outlined"
                                InputProps={{ classes: { input: classes.textField, }, }}
                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                            />
                            <FormHelperText error>Error text here...</FormHelperText>
                        </FormControl>
                        <Span mt={3} />

                        <div className={classes.MessageInputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    id="message"
                                    label="Message"
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    InputProps={{ classes: { input: classes.textFieldMessage, multiline: classes.MultitlineInput, }, }}
                                    InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                />
                            </FormControl>
                            <div className="messageInput creatCampaignInput" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-24px" }}>
                                <div>
                                    <IconButton className={classes.MessageAllIons}>
                                        <ImageIcon className={classes.InputIcons} />
                                    </IconButton>
                                    {/* file Upload */}
                                    <input
                                        accept="image/*"
                                        className={classes.inputUpload}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <IconButton className={classes.MessageAllIonsAttatchment} component="span">
                                            <AttachmentIcon className={classes.InputIcons} />
                                        </IconButton>
                                    </label>
                                    {/* ............... */}
                                    <IconButton className={classes.MessageAllIons}>
                                        <FontAwesomeIcon icon={faAddressCard} className={classes.InputIconsContact} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}>
                                        <NotInterestedIcon className={classes.InputIcons} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}>
                                        <PersonAddIcon className={classes.InputIcons} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}  >
                                        <SentimentSatisfiedOutlinedIcon className={classes.InputIcons} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}>
                                        <MicOutlinedIcon className={classes.InputIcons} />
                                    </IconButton>


                                </div>
                                <Typography variant="caption" className={classes.RemaingLetters}> 600 | 600</Typography>
                            </div>
                        </div>
                        <Span display="flex" justifyContent="flex-end" mt={3}>
                            <Button variant="outlined" size="large" className={classes.CampaignBtns}>Send Campaign</Button>
                            <Button variant="outlined" color="primary" size="large" className={classes.ActionBtn} onClick={handleDropdown}>
                                Action
                                {(expandedDropdown) ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}
                            </Button>
                        </Span>
                        <Span position='relative'>
                            <Collapse in={expandedDropdown} timeout="auto" unmountOnExit>
                                <Paper className={classes.ActionBtnDropdown}>
                                    <List component="nav" dense>
                                        <ListItem button>
                                            <ListItemText primary="Schedule Campaign" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary=" Save As Template" />
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Collapse>
                        </Span>

                        <Span display="flex" alignItems="center" justifyContent="space-between" mt={3}>
                            <Typography>Add Follow Up Message(S)</Typography>
                            <Fab size="small" color="primary" style={{ boxShadow: "none", color: "#fff" }}><Icon>edit</Icon></Fab>
                        </Span>
                        <Span mt={1}><Divider /></Span>
                       <Dialog open={false} fullWidth maxWidth="sm" scroll="body">
                        <DialogTitle>
                          <Span display="flex" alignItems="center" justifyContent="space-between">
                          <Typography>Add Follow Up Message</Typography>
                          <IconButton><Icon>close</Icon></IconButton>
                          </Span>
                          <Divider />
                        </DialogTitle>
                        <DialogContent>
                          <Span bgcolor="#fff2f4" my={2} py={2} px={1} >
                          <ButtonGroup>
                                <Button className={classes.DaysBtn}>Days</Button>
                                <Button className={classes.HoursBtn}>Hours</Button>
                            </ButtonGroup>  
                            <Grid container direction="row" style={{marginTop:"18px"}}>
                                <Grid item xs={12} lg={12}>
                                    <TextField variant="outlined"  label="Days" size="small" fullWidth />
                                    <FormHelperText>This Value should be greater than 0</FormHelperText>
                                </Grid>
                            </Grid>

                            <Grid container direction="row" style={{marginTop:"18px"}} spacing={2}>
                                <Grid item xs={12} lg={4}>
                                <Typography variant="caption" >Set Send Time</Typography>

                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Select>
                                            <option value={10}>Hours</option>
                                           <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                
                                <Grid item xs={12} lg={4} style={{marginTop:"23px"}}>
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Select>
                                            <option value={10}>Minuts</option>
                                           <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                    <Grid item xs={12} lg={4} style={{marginTop:"23px"}}>
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Select>
                                            <option value={10}>Am</option>
                                         
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container direction="row" style={{marginTop:"12px"}}>
                                   <Grid item xs={12} lg={12}>
                                   <div className={classes.MessageInputContainer}>
                            <FormControl fullWidth>
                                <TextField
                                    id="message"
                                    label="Message"
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    InputProps={{ classes: { input: classes.textFieldMessage, multiline: classes.MultitlineInput, }, }}
                                    InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                />
                            </FormControl>

                            <div className="messageInput creatCampaignInput" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-24px" }}>
                                <div>
                                    <IconButton className={classes.MessageAllIons}>
                                        <ImageIcon className={classes.InputIcons} />
                                    </IconButton>
                                    {/* file Upload */}
                                    <input
                                        accept="image/*"
                                        className={classes.inputUpload}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <IconButton className={classes.MessageAllIonsAttatchment} component="span">
                                            <AttachmentIcon className={classes.InputIcons} />
                                        </IconButton>
                                    </label>
                                    {/* ............... */}
                                    <IconButton className={classes.MessageAllIons}>
                                        <FontAwesomeIcon icon={faAddressCard} className={classes.InputIconsContact} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}>
                                        <NotInterestedIcon className={classes.InputIcons} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}>
                                        <PersonAddIcon className={classes.InputIcons} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}  >
                                        <SentimentSatisfiedOutlinedIcon className={classes.InputIcons} />
                                    </IconButton>
                                    <IconButton className={classes.MessageAllIons}>
                                        <MicOutlinedIcon className={classes.InputIcons} />
                                    </IconButton>


                                </div>
                                <Typography variant="caption" className={classes.RemaingLetters}> 600 | 600</Typography>
                            </div>
                        </div>
                        <FormHelperText>Max Image File Size 5 MB (Images only) and 500 kb for other media files. Be Sure To Do a
                            text send with all News
                        </FormHelperText>

                                       </Grid> 
                                </Grid>
                            </Grid>
                          </Span>
                          <Button className={classes.LastBtn} variant="outlined" color="primary">Add Follow Up</Button>
                        </DialogContent>
                       </Dialog>
                    </Grid>
                    <Grid xs={12} item lg={6} sm={12} md={6}>
                        <Grid container direction="row">
                            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.GroupsPadding}>
                                <Span px={2} py={1} className={classes.GroupsContainer}>
                                    <Typography variant="subtitle2" className={classes.GroupTitle}>Sync Groups</Typography>
                                    <Span className={classes.ListContainerGroup}>

                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Group A1 Sync</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>A 2</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>A3 Sync</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Customers List</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>I 1 sync</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>I 2 sync</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>I 3 sync</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>N All</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>New Sync Group</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Priti-Test    </Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}> sync Test</Typography>
                                        </Span>

                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>T</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>T1 Sync</Typography>
                                        </Span>
                                        {/* .......... */}
                                    </Span>
                                </Span>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.SelectAllPadding}>
                                <Span className={classes.SelectAllContainer}>
                                    <Span pl={2} mt={1} mb={2} display='flex' justifyContent="space-between">
                                        <Span className={classes.SelectAllCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.SelectAllTitle}>Select All</Typography>
                                        </Span>
                                        <Button variant="contained" color="secondary" className={classes.SelectAllNumBtn}>0</Button>
                                    </Span>
                                    <Span px={2} pb={2} className={classes.ListContainer}>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>123</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>4855555555</Typography>
                                        </Span>

                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>6024515569</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Alice Fields</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Betriz Vigil</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Celil Lara</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Cemen Beak</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="default"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Bethany Lamenck</Typography>
                                        </Span>
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

export default withStyles(styles)(CreateCampaign);
