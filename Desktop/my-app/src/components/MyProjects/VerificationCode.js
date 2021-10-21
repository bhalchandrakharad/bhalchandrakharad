import { Typography, Grid, Button, TextField, FormControl, withStyles, Divider, Container, FormHelperText } from '@material-ui/core';
import Span from "@material-ui/core/Box";
import React from 'react'
const styles = (theme) => ({
    ResponsiveView: { marginTop: 16, },
    Title: { fontSize: 20, fontWeight: 500 },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    cssLabel: { color: '#908f8f', transform: "translate(14px, 13px) scale(1)", fontSize: 13, },
    LableShrink: { fontSize: 15, transform: 'translate(17px, -4px) scale(0.75) !important', color: '#232323' },
    ContinueBtn: { fontSize: 11, background: "#0073AA", color: "#fff", margin: "0px 5px", padding: "8px 15px", boxShadow: "none", '&:hover': { boxShadow: "none", background: "#0073AA" }, },
    ResendBtn: { fontSize: 11, background: "#0073AA", color: "#fff", marginLeft: 2, padding: "8px 15px", boxShadow: "none", '&:hover': { boxShadow: "none", background: "#0073AA" }, },
    betwextLink: { color: "#1972D2", textDecoration: "none" },

});
const VerificationCode = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Container className={classes.ResponsiveView}>
                <Typography variant="subtitle2" className={classes.Title}>Enter your verification code</Typography>
                <Span mt={1} mb={3}><Divider /></Span>
                <Grid container direciton="row" justify="center">
                    <Grid item xs={12} sm={6} md={5} lg={4}>
                        <Typography variant="subtitle2">Enter the code we sent to XXX-XXX-XX42 to access your account</Typography>
                        <Span mb={3} />
                        <FormControl fullWidth>
                            <TextField
                                id="code"
                                label="Enter Code"
                                type="text"
                                variant="outlined"
                                InputProps={{ classes: { input: classes.textField, }, }}
                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                            />
                            {/* <FormHelperText error>error</FormHelperText> */}
                        </FormControl>
                        <Span mb={2} />
                        <Span align="right">
                            <Button variant="contained" className={classes.ContinueBtn}>Continue</Button>
                            <Button variant="contained" className={classes.ResendBtn}>Resend Code</Button>
                        </Span>
                        <Span align="left" mt={3} mb={2}>
                            <Typography variant="subtitle2">If the code has not arrived after few minutes feel free to reach out to
                                <a href="mailto:support@betwext.com" className={classes.betwextLink}> support@betwext.com</a>
                            </Typography>
                        </Span>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
    )
}

export default withStyles(styles)(VerificationCode);
