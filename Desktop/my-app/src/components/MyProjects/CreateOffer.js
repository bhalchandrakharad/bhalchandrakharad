import React, { useState } from 'react'
import Span from "@material-ui/core/Box";
import {
    withStyles, Typography, Divider, Button, FormControl, TextField, MenuItem, Collapse, Grid, FormHelperText, TextareaAutosize, Checkbox, Paper, Radio, Container
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUsers, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const styles = (theme) => ({
    Title: { fontSize: 20, fontWeight: 500 },
    CancelBtnCss: { color: "#0073AA", background: "#0073AA", color: "#fff", boxShadow: "none", fontSize: 11, padding: "6px 12px", "&:hover": { boxShadow: "none", background: "#0073AA" } },
    offerSubtile: { fontSize: 17 },
    AllLeftInfoText: { fontSize: "13.2px" },
    offerTitle1: { fontSize: 17, },
    AdttionalTitle: { fontSize: 17, cursor: "pointer" },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    cssLabel: { color: '#908f8f', transform: "translate(14px, 13px) scale(1)", fontSize: 13, },
    LableShrink: { fontSize: 15, transform: 'translate(17px, -4px) scale(0.75) !important', color: '#232323' },
    NameInputHelperText: { color: '#636363', marginTop: 2 },
    textFieldFolder: { fontSize: 13, color: '#2b2b2b', padding: '10px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    textField2: { fontSize: 12, color: '#2b2b2b', padding: '10px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    LabelCss: { fontSize: 13 },
    GroupCheckBox: { display: 'flex', alignItems: 'center', margin: '13px 0px' },
    GroupCheckBox2: { display: 'flex', alignItems: 'center', margin: '6px 0px' },
    ResponsiveView: { marginTop: 16 },
    GroupName: { fontSize: 13, color: '#505050' },
    CheckoxIcon: { padding: 0, margin: '0px 4px 0px 0px' },
    CheckboxCss: { padding: 0 },
    NumberContainer: { display: 'flex', alignItems: 'center', },
    SearchNumbers: { fontSize: 13, color: '#494949' },
    RadioLabel: { fontSize: 14, padding: "8px 0px" },
    SelectBtnCss: { color: "#0073AA", borderColor: "#0073AA", fontSize: 12, padding: "6px 12px", marginRight: 4 },
    ImageText: { fontSize: 14, marginRight: 20 },
    CheckText: { marginLeft: 3, fontSize: 13 },
    AdditionalBtn: { fontSize: 11, boxShadow: "none", padding: "8px 8px", background: "#0073AA", color: "#fff", "&:hover": { boxShadow: "none", background: "#0073AA" } },
    AddBtn: { fontSize: 11, boxShadow: "none", padding: "8px 8px", background: "#0073AA", color: "#fff", "&:hover": { boxShadow: "none", background: "#0073AA" } },
    SaveBtn: { fontSize: 11, margin: "0px 5px", boxShadow: "none", padding: "7px 15px", background: "#0073AA", color: "#fff", "&:hover": { boxShadow: "none", background: "#0073AA" } },
    EndBtn: { fontSize: 11, boxShadow: "none", padding: "7px 15px", borderColor: "#0073AA", color: "#0073AA", "&:hover": { boxShadow: "none", } },

    [theme.breakpoints.only('xs')]: {
        ResponsiveView: { padding: 16 },
        FieldMargin: { marginTop: 15 },
    },
});
const CreateOffer = (props) => {
    const { classes } = props;
    //date state
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [expandedDropdown, setExpandedDropdown] = React.useState(false);
    const handleDropdown = () => {
        setExpandedDropdown(!expandedDropdown);
    };
    return (
        <div>
            <Container className={classes.ResponsiveView}>
                <Span display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle2" className={classes.Title}>Create Offer</Typography>
                    <Button variant="contained" classes={{ contained: classes.CancelBtnCss }}>Cancel</Button>
                </Span>
                <Span mt={2.3} mb={3}><Divider /></Span>
                <Grid container direction="row" spacing={4}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Typography variant="subtitle1" className={classes.offerSubtile}>Offer Options</Typography>
                        <Span>
                            <Typography variant='caption' className={classes.AllLeftInfoText}>
                                Third party delivery of an offer is not required. However, currently external delivery is only supported via emailing a CSV, FTPing a CSV,
                                and requesting a url with certain variable parameters in place.
                                In the body copy, you are allowed to use HTML. To bold text, use <strong>your text here</strong>. For italics, use <em>your text here</em>. For underlining text, use <u>your text here</u>.
                            </Typography>
                        </Span>
                        <Span my={2.5}><Divider /></Span>
                        <Typography variant="subtitle1" className={classes.offerSubtile}>Additional Fields</Typography>
                        <Span>
                            <Typography variant='caption' className={classes.AllLeftInfoText}>
                                If any additional fields are selected, after a user has submitted the offers they wish to select, an aggregation of additional fields from
                                all of the offers selected will be displayed. Forexample, if one offer requires a first and last name, and one offer requires a first/last name and
                                address, the user will be shown a lightbox asking for their first name, last name, and address. The data will then be applied to each offer as required by
                                the vendor and selected on this page when created.
                            </Typography>
                        </Span>
                        <Span my={2.5}><Divider /></Span>
                        <Typography variant="subtitle1" className={classes.offerSubtile}> Delivery Options </Typography>
                        <Span>
                            <Typography variant='caption' className={classes.AllLeftInfoText}>
                                All delivery methods are optional - items left blank won't be used.
                            </Typography>
                        </Span>
                        <Span my={2.5}><Divider /></Span>
                        <Typography variant="subtitle1" className={classes.offerSubtile}> URL Parameters </Typography>
                        <Span>
                            <Typography variant='caption' className={classes.AllLeftInfoText}>
                                If the third party requests information be delivered by requesting a URL, certain information must be placed
                                into the URL using the placeholders outlined below.
                            </Typography>
                        </Span>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Typography variant="subtitle1" className={classes.offerTitle1}>  Offer Options </Typography>
                        <Span mt={1.2} mb={3}><Divider /></Span>
                        <Grid container direction="row" >
                            <Grid item xs={12} sm={9} md={9} lg={9}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField, }, }}
                                        InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                    />
                                    <FormHelperText error>Name Of The Offer(not the title displayed, internal use only)</FormHelperText>
                                </FormControl>
                                <Span mb={2} />

                            </Grid>
                            <Grid item xs={12} sm={5} md={5} lg={5}>
                                <Typography variant="subtitle1" className={classes.LabelCss}>TimeStamp Format</Typography>
                                <FormControl fullWidth className={classes.ResponsiveInput}>
                                    <TextField
                                        select
                                        // value={values.ItemsPerPage}
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField2, }, }}
                                    >
                                        <MenuItem value={1}>MM/DD/YYYY 00:00::00</MenuItem>
                                    </TextField>
                                    <FormHelperText error>Format of timestamp sent to the</FormHelperText>

                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={9} lg={9}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="headline"
                                        label="Headline"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField, }, }}
                                        InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                    />
                                    <FormHelperText error>Headline of offer</FormHelperText>
                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={9} lg={9}>
                                <FormControl fullWidth>
                                    <Typography variant="subtitle1" className={classes.LabelCss}>Body Copy</Typography>
                                    <TextareaAutosize
                                        rowsMin={5}
                                        rowsMax={5}
                                        aria-label="maximum height"
                                        id="body"
                                        className={classes.NotesTextField}
                                    />
                                    <FormHelperText error>Body Copy of offer</FormHelperText>
                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={9} lg={9}>
                                <FormControl fullWidth>
                                    <Typography variant="subtitle1" className={classes.LabelCss}>Body Disclamier</Typography>
                                    <TextareaAutosize
                                        rowsMin={5}
                                        rowsMax={5}
                                        aria-label="maximum height"
                                        id="body"
                                        className={classes.NotesTextField}
                                    />
                                    <FormHelperText error> Disclamier of offer</FormHelperText>
                                </FormControl>
                                <Span mb={2} />
                                <Span display="flex" alignItems="center">
                                    <Typography variant="body2" className={classes.ImageText}>Image (120×60)</Typography>
                                    <input type="file" id="myfile" name="myfile" multiple />
                                </Span>
                                <Span mb={2.6} />
                                <Span display="flex" alignItems="center">
                                    <Typography variant="body2" className={classes.ImageText}>Chacked  </Typography>
                                    <Span display="flex">
                                        <Checkbox className={classes.CheckboxCss} size="small" color="primary" />
                                        <Typography variant="caption" className={classes.CheckText}>Deafult Checkbox to chacked status?</Typography>
                                    </Span>
                                </Span>
                                <Span mb={2.6} />
                            </Grid>

                            <Grid item xs={12} sm={9} md={9} lg={9}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="id1"
                                        label="Monthly Lead Limit"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField, }, }}
                                        InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                    />
                                    <FormHelperText error>After this threshold of leads per month,offer will automatically turn of until the next month. Leave at 0 for unlimited.</FormHelperText>
                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                            <Grid item xs={12} sm={9} md={9} lg={9}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="id1"
                                        label="Daily Lead Limit"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField, }, }}
                                        InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                    />
                                    <FormHelperText error>After this threshold of leads per day.offer will automatically turn of until the next day. Leave at 0 for unlimited.</FormHelperText>
                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                        </Grid>

                        <Button variant="contained" className={classes.AdditionalBtn} onClick={handleDropdown}>  Additional Fields   {(expandedDropdown) ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}</Button>
                        <Span mt={1} mb={2.2}><Divider /></Span>
                        <Span position='relative'>
                            <Collapse in={expandedDropdown} timeout="auto" unmountOnExit>
                                <Grid container direction="row" spacing={4}>
                                    <Grid item xs={12} sm={4} md={4} lg={5}>
                                        <Typography variant="subtitle1" className={classes.offerTitle1}>User Provided Fields </Typography>
                                        <Span mt={1} mb={2.2}><Divider /></Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Frist Name Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Last Name Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Address Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>City Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>State Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Zip Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Phone Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Saving Required</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>DOB Required</Typography>
                                        </Span>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={3}>
                                        <Typography variant="subtitle1" className={classes.offerTitle1}>  IP Fields  </Typography>
                                        <Span mt={1} mb={2.2}><Divider /></Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Send IP City</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Send IP State</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Send IP Zip</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Send IP Contry</Typography>
                                        </Span>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                        <Typography variant="subtitle1" className={classes.AdttionalTitle}> Custom Fields </Typography>
                                        <Span mt={1} mb={2.2}><Divider /></Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Year Of Birth</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Investment Potential</Typography>
                                        </Span>
                                    </Grid>
                                </Grid>
                                <Span mt={1} />
                                <Typography variant="subtitle1" className={classes.offerTitle1} >IP Filters</Typography>
                                <Span mt={1} mb={2.2}><Divider /></Span>
                                <Grid container direction="row">
                                    <Grid item xs={12} sm={9} md={9} lg={9}>
                                        <FormControl fullWidth>
                                            <Typography variant="subtitle1" className={classes.LabelCss}>Contry Restrict</Typography>
                                            <TextareaAutosize
                                                rowsMin={5}
                                                rowsMax={5}
                                                aria-label="maximum height"
                                                id="body"
                                                className={classes.NotesTextField}
                                            />
                                            <FormHelperText error>Enter restricted contries as to letter ISO 3166 valuse separated by a comma with no spaces. If this box has
                                                anything in it, this offer will ONLY show for contries entered here.
                                            </FormHelperText>
                                        </FormControl>
                                        <Span mb={2} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={4}>
                                        <Typography variant="subtitle1" className={classes.RadioLabel}>Lead Filtering</Typography>
                                        <Span className={classes.NumberContainer}>
                                            <Radio color="primary" size="small" classes={{ root: classes.CheckoxIcon }} />
                                            <Typography variant="subtitle2" className={classes.SearchNumbers}>Allow All leads</Typography>
                                        </Span>
                                        <Span mb={1} />
                                        <Span className={classes.NumberContainer}>
                                            <Radio color="primary" size="small" classes={{ root: classes.CheckoxIcon }} />
                                            <Typography variant="subtitle2" className={classes.SearchNumbers}>Restrict Leads by State</Typography>
                                        </Span>
                                        <Span mb={2} />
                                    </Grid>
                                </Grid>
                                <Span display="flex">
                                    <Button classes={{ outlined: classes.SelectBtnCss }} variant="outlined">Select All</Button>
                                    <Button classes={{ outlined: classes.SelectBtnCss }} variant="outlined">Select None</Button>
                                </Span>
                                <Grid container direction="row">
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Span className={classes.GroupCheckBox2}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Alabama</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox2}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>American Samoa</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox2}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Arkansas</Typography>
                                        </Span>


                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Span className={classes.GroupCheckBox2}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>Alabama</Typography>
                                        </Span>
                                        <Span className={classes.GroupCheckBox2}>
                                            <Checkbox
                                                color="primary"
                                                classes={{ root: classes.CheckoxIcon }}
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            />
                                            <Typography variant="subtitle2" className={classes.GroupName}>American Samoa</Typography>
                                        </Span>
                                    </Grid>
                                </Grid>
                                <Span mb={1} />
                                <Typography variant="subtitle1" className={classes.RadioLabel}>Other Countries</Typography>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>Australia</Typography>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"

                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>Ireland</Typography>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>New Zealand</Typography>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>United Kingdom</Typography>
                                </Span>
                                <Span mb={1} />
                                <Typography variant="subtitle1" className={classes.offerTitle1}>Delivery Method</Typography>
                                <Span mt={1} mb={2.2}><Divider /></Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>Pipe Delimited CSV?</Typography>
                                </Span>
                                <Span mb={2.5} />
                                <Grid item xs={12} sm={9} md={9} lg={9}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="csv"
                                            label="Email CSV"
                                            type="text"
                                            variant="outlined"
                                            InputProps={{ classes: { input: classes.textField, }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                        <FormHelperText error>Email address to send CSV to- separate multiple with commas</FormHelperText>
                                    </FormControl>
                                    <Span mb={2} />
                                </Grid>
                                <Paper style={{ background: "#2acece14" }}>
                                    <Span px={2} py={2}>
                                        <Grid item xs={12} sm={9} md={9} lg={9}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="server"
                                                    label="FTP Server"
                                                    type="text"
                                                    variant="outlined"
                                                    InputProps={{ classes: { input: classes.textField, }, }}
                                                    InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                                />
                                            </FormControl>
                                            <Span mb={2.7} />
                                        </Grid>
                                        <Grid item xs={12} sm={9} md={9} lg={9}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="user"
                                                    label="FTP User"
                                                    type="text"
                                                    variant="outlined"
                                                    InputProps={{ classes: { input: classes.textField, }, }}
                                                    InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                                />
                                            </FormControl>
                                            <Span mb={2.7} />
                                        </Grid>
                                        <Grid item xs={12} sm={9} md={9} lg={9}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="password"
                                                    label="FTP Password"
                                                    type="password"
                                                    variant="outlined"
                                                    InputProps={{ classes: { input: classes.textField, }, }}
                                                    InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                                />
                                            </FormControl>
                                            <Span mb={2.7} />
                                        </Grid>
                                        <Grid item xs={12} sm={9} md={9} lg={9}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="path"
                                                    label="FTP Path"
                                                    type="text"
                                                    variant="outlined"
                                                    InputProps={{ classes: { input: classes.textField, }, }}
                                                    InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                                />
                                            </FormControl>
                                            <Span mb={2.7} />
                                        </Grid>
                                    </Span>
                                </Paper>
                                <Span mb={2.7} />
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={12} sm={9} md={9} lg={9}>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="location"
                                                label="HTTP GET Location"
                                                type="text"
                                                variant="outlined"
                                                InputProps={{ classes: { input: classes.textField, }, }}
                                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                            />
                                            <FormHelperText error>Insert URL variables between curly braces as outlined</FormHelperText>
                                        </FormControl>
                                        <Span mb={2.7} />
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={9} lg={9}>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="location"
                                                label="HTTP GET Location"
                                                type="text"
                                                variant="outlined"
                                                InputProps={{ classes: { input: classes.textField, }, }}
                                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                            />
                                            <FormHelperText error>URL you would like to post to</FormHelperText>
                                        </FormControl>
                                        <Span mb={2.7} />
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={9} lg={4}>
                                        <Typography variant="subtitle1" className={classes.RadioLabel}>Post Value</Typography>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="id2"
                                                label="Parameter Name"
                                                type="text"
                                                variant="outlined"
                                                InputProps={{ classes: { input: classes.textField, }, }}
                                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={9} lg={4}>
                                        <Span mt={5} className={classes.FieldMargin} />
                                        <FormControl fullWidth>
                                            <TextField
                                                id="id3"
                                                label="Parameter Value"
                                                type="text"
                                                variant="outlined"
                                                InputProps={{ classes: { input: classes.textField, }, }}
                                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                            />
                                        </FormControl>
                                        <Span mb={1} />
                                    </Grid>
                                </Grid>
                                <Span mb={3}>
                                    <Button variant="contained" className={classes.AddBtn}>Add Parameter</Button>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>URL Encode post values?</Typography>
                                </Span>
                                <Typography variant="subtitle1" className={classes.RadioLabel}>Delivery</Typography>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>Deliver with partial data?</Typography>
                                </Span>
                                <Span my={2.5}><Divider /></Span>
                                <Grid item lg={9}>
                                    <Span align="right">
                                        <Button variant="contained" className={classes.SaveBtn}>Save Changes</Button>
                                        <Button variant="outlined" className={classes.EndBtn}>Cancel</Button>
                                    </Span>
                                </Grid>
                            </Collapse>
                        </Span>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default withStyles(styles)(CreateOffer);
