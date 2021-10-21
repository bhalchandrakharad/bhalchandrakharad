import { Typography, Grid, Button, TextField, FormControl, withStyles, Divider, FormHelperText, TextareaAutosize, MenuItem, Checkbox, } from "@material-ui/core";
import Span from "@material-ui/core/Box";
import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const styles = (theme) => ({
    ResponsiveView: { marginTop: 16 },
    Title: { fontSize: 20, fontWeight: 500 },
    InfoTitle: { fontSize: 17 },
    AllTextInfo: { fontSize: 13 },
    textField: { fontSize: 12, color: "#2b2b2b", padding: "12px 13px", background: "#fff", "&::placeholder": { color: "#000", fontWeight: 500 }, },
    cssLabel: { color: "#908f8f", transform: "translate(14px, 13px) scale(1)", fontSize: 13, },
    LableShrink: { fontSize: 15, transform: "translate(17px, -4px) scale(0.75) !important", color: "#232323", },
    textField2: { fontSize: 12, color: "#2b2b2b", padding: "10px 13px", background: "#fff", "&::placeholder": { color: "#000", fontWeight: 500 }, },
    LabelCss: { fontSize: 13 },
    GroupCheckBox2: { display: "flex", alignItems: "center", margin: "6px 0px" },
    GroupName: { fontSize: 13, color: "#505050" },
    CheckoxIcon: { padding: 0, margin: "0px 4px 0px 0px" },
    CheckboxCss: { padding: 0 },
    CheckTitle: { fontSize: 14, paddingBottom: 5 },
    SaveBtn:{fontSize:11,boxShadow:"none",margin:"0px 5px",padding:"8px 15px",background:"#0073AA",color:"#fff",'&:hover':{boxShadow:"none",background:"#0073AA"}},
    CancelBtn:{fontSize:11,boxShadow:"none",padding:"8px 15px",background:"#0073AA",color:"#fff",'&:hover':{boxShadow:"none",background:"#0073AA"}},
    [theme.breakpoints.only("xs")]: {
        ResponsiveSpacing: { marginTop: 0 },
    },
});
const CreateLP = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="subtitle2" className={classes.Title}>
                    Create a New LP
                </Typography>
                <Span mt={1} mb={3}>
                    <Divider />
                </Span>
                <Grid container direciton="row" spacing={3}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Typography variant="subtitle2" className={classes.InfoTitle}>
                            LP Options
                        </Typography>
                        <Typography variant="caption" className={classes.AllTextInfo}>
                            {" "}
                            A page is a set of offers displayed at a unique URL for a user to
                            visit. You can select a name, page title, slug for the page to
                            reside at, and a thank you URL that the user will be redirected to
                            upon completion.
                        </Typography>
                        <Span mt={1} mb={3}>
                            <Divider />
                        </Span>
                        <Typography variant="subtitle2" className={classes.InfoTitle}>
                            The URL Slug
                        </Typography>
                        <Typography variant="caption" className={classes.AllTextInfo}>
                            {" "}
                            The URL slug is the last segment in the URL of the page displaying
                            the coreg offers - it may be handy to match this to the squeeze
                            page that traffic will first land and input their email on.
                        </Typography>
                        <Span mt={1} mb={3}>
                            <Divider />
                        </Span>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Typography variant="subtitle1">LP Options</Typography>
                        <Span mt={1} mb={3}>
                            <Divider />
                        </Span>
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="name"
                                        label=" Name"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField } }}
                                        InputLabelProps={{
                                            classes: {
                                                outlined: classes.cssLabel,
                                                shrink: classes.LableShrink,
                                            },
                                        }}
                                    />
                                    {/* <FormHelperText error>Error here...</FormHelperText> */}
                                </FormControl>
                                <Span mt={2} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="title"
                                        label="Title"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField } }}
                                        InputLabelProps={{
                                            classes: {
                                                outlined: classes.cssLabel,
                                                shrink: classes.LableShrink,
                                            },
                                        }}
                                    />
                                    {/* <FormHelperText error>Error here...</FormHelperText> */}
                                </FormControl>
                                <Span mt={2} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="slug"
                                        label="URL Slug"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField } }}
                                        InputLabelProps={{
                                            classes: {
                                                outlined: classes.cssLabel,
                                                shrink: classes.LableShrink,
                                            },
                                        }}
                                    />
                                    {/* <FormHelperText error>Error here...</FormHelperText> */}
                                </FormControl>
                                <Span mt={2} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="url"
                                        label="Thank You URL"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField } }}
                                        InputLabelProps={{
                                            classes: {
                                                outlined: classes.cssLabel,
                                                shrink: classes.LableShrink,
                                            },
                                        }}
                                    />
                                    {/* <FormHelperText error>Error here...</FormHelperText> */}
                                </FormControl>
                                <Span mt={2} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" className={classes.LabelCss}>
                                    Email Provider
                                </Typography>
                                <FormControl fullWidth className={classes.ResponsiveInput}>
                                    <TextField
                                        select
                                        // value={values.ItemsPerPage}
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField2 } }}
                                    >
                                        <MenuItem value={1}>IContact</MenuItem>
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Span mt={3} className={classes.ResponsiveSpacing} />
                                <FormControl fullWidth>
                                    <TextField
                                        id="id1"
                                        label="Catch In List ID"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField } }}
                                        InputLabelProps={{
                                            classes: {
                                                outlined: classes.cssLabel,
                                                shrink: classes.LableShrink,
                                            },
                                        }}
                                    />
                                    <FormHelperText> This is Selected email provider (iContact or Sendgrid) catch in list id.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Span display="grid">
                                    <Typography variant="subtitle1" className={classes.CheckTitle}>Allowed Regions</Typography>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}> USA</Typography>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>Canada</Typography>
                                </Span>
                                <Span className={classes.GroupCheckBox2}>
                                    <Checkbox
                                        color="primary"
                                        classes={{ root: classes.CheckoxIcon }}
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                    <Typography variant="subtitle2" className={classes.GroupName}>All</Typography>
                                </Span>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Span mt={3} className={classes.ResponsiveSpacing} />
                                <FormControl fullWidth>
                                    <TextField
                                        id="id1"
                                        label="No Access URL"
                                        type="text"
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField } }}
                                        InputLabelProps={{
                                            classes: {
                                                outlined: classes.cssLabel,
                                                shrink: classes.LableShrink,
                                            },
                                        }}
                                    />
                                    {/* <FormHelperText error>Text Error...</FormHelperText> */}
                                    <Span mt={2} />

                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <FormControl fullWidth>
                                    <Typography variant="subtitle1" className={classes.LabelCss}>Pixel Code</Typography>
                                    <TextareaAutosize
                                        rowsMin={5}
                                        rowsMax={5}
                                        aria-label="maximum height"
                                        id="body1"
                                        className={classes.NotesTextField}
                                    />
                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <FormControl fullWidth>
                                    <Typography variant="subtitle1" className={classes.LabelCss}>Other Track Code</Typography>
                                    <TextareaAutosize
                                        rowsMin={5}
                                        rowsMax={5}
                                        aria-label="maximum height"
                                        id="body2"
                                        className={classes.NotesTextField}
                                    />
                                </FormControl>
                                <Span mb={2} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" className={classes.LabelCss}>
                                    Traffic Source
                                </Typography>
                                <FormControl fullWidth className={classes.ResponsiveInput}>
                                    <TextField
                                        select
                                        // value={values.ItemsPerPage}
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField2 } }}
                                    >
                                        <MenuItem value={1}>Select one</MenuItem>
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1" className={classes.LabelCss}>Layout </Typography>
                                <FormControl fullWidth className={classes.ResponsiveInput}>
                                    <TextField
                                        select
                                        // value={values.ItemsPerPage}
                                        variant="outlined"
                                        InputProps={{ classes: { input: classes.textField2 } }}
                                    >
                                        <MenuItem value={1}>One Column</MenuItem>
                                    </TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Span mt={4} mb={3}><Divider /></Span>
                         <Span align="right" mb={4}>
                          <Button variant="contained" className={classes.SaveBtn}>Save Changes</Button>  
                          <Button variant="contained" className={classes.CancelBtn}>Cancel</Button>   
 
                        </Span>                   
                    </Grid>
                </Grid>
            </Span>
        </React.Fragment>
    );
};

export default withStyles(styles)(CreateLP);
