import React, { Component } from 'react';
import {
    Grid, withStyles, FormControl, TextField, Typography,
    MenuItem, Checkbox, Button, Divider
} from '@material-ui/core';
import Span from "@material-ui/core/Box";
import Logo from "../../assets/logo.png"
import GoDaddyImage from "../../assets/godaddy.png"
import Authorize from "../../assets/Authorize.png"
import aImage from "../../assets/news.jpeg"
const styles = (theme) => ({
    Logo: { width: 97, marginTop: 14, marginLeft: 116 },
    SignupText: { fontSize: 30, fontWeight: 'bold', marginLeft: 114, marginTop: 10 },
    WelcomContainer: { background: '#1976D2', height: '100vh' },
    textField: { fontSize: 13, color: '#2b2b2b', padding: '12px 13px', background: '#fff' },
    cssLabel: {
        color: '#908f8f',
        transform: "translate(14px, 13px) scale(1)",
        fontSize: 13,
    },
    LableShrink: { fontSize: 14, transform: 'translate(17px, -4px) scale(0.75) !important' },

    [theme.breakpoints.down('md')]: {
        AllPadding: { padding: '0px 20px' },
        Logo: { marginLeft: 20 },
        SignupText: { marginLeft: 20, },
        ForgetPassText: { fontSize: 13, color: '#1976D2', cursor: 'pointer', marginTop: "12px", marginLeft: "0px !important" },
    },
    [theme.breakpoints.only('sm')]: {
        CheckboxIcon: { margin: '-10px 0px 0px -12px !important', },
        ForgetPassText: { fontSize: 13, color: '#1976D2', cursor: 'pointer', marginTop: "12px", marginLeft: "0px !important" },

    },
    [theme.breakpoints.only('lg')]: {
        inputWidth: { width: 470, marginLeft: 7 },
        CheckboxIcon: { margin: '-12px 0px 0px 24px !important', },
        ForgetPassText: { fontSize: 13, color: '#1976D2', cursor: 'pointer', marginTop: "12px", marginLeft: "30px" },

    },
    [theme.breakpoints.only('xs')]: {
        WelcomContainer: { height: 305 },
        CheckboxIcon: { margin: '-12px 0px 0px -9px !important' },
        ForgetPassText: { fontSize: 13, color: '#1976D2', cursor: 'pointer', marginTop: "12px", marginLeft: "0px !important" },

    },
    SignUpBtn: { borderRadius: 50, borderColor: '#1976D2', padding: '10px 55px', fontSize: 13, color: '#1976D2', marginBottom: 24 },
    Link: { textDecoration: 'none', color: '#1976D2' },
    WelcomeText: { fontSize: 30, fontWeight: 'bold', marginTop: 71, color: '#fff' },
    WelcomeInfo: { fontSize: 15, color: '#fff', marginTop: 14, padding: '0px 16px' },
    LoginTwoBtn: { borderRadius: 50, borderColor: '#fff', padding: '10px 55px', fontSize: 13, color: '#fff', marginTop: 20 },
    ForgetPassText: { fontSize: 15, color: '#1976D2', cursor: 'pointer', marginTop: "12px", marginLeft: "30px" },
    //footer css
    CopyrightText: { fontSize: 14, },
    AllLinks: { fontSize: 14, color: '#1976D2' },
    FooterLinks: { textDecoration: 'none', color: '#1976D2' },
    GodaddyImage: { width: 150, marginTop: 20 },
    AuthorizeImage: { width: 65 },
    FooterLinkAuthorize: { textDecoration: 'none', color: '#1976D2', fontSize: 11 },
})

class LoginTwo extends Component {
    state = {}
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container direction="row" justify="center">
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                       
                        <Typography variant="subtitle2" className={classes.SignupText}>Login</Typography>
                        <Span mt={1.2} className={classes.AllPadding}>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={12} sm={12} md={12} lg={8}>
                                    <Span mt={3} />
                                    <FormControl fullWidth className={classes.inputWidth}>
                                        <TextField
                                            id="emial"
                                            label="Email"
                                            type="text"
                                            variant="outlined"
                                            InputProps={{ classes: { input: classes.textField, }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={8}>
                                    <Span mt={3} />
                                    <FormControl fullWidth className={classes.inputWidth}>
                                        <TextField
                                            id="password"
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            InputProps={{ classes: { input: classes.textField, }, }}
                                            InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={9}>
                                    {/* <Typography variant="subtitle1" className={classes.ForgetPassText}>Forget Password</Typography> */}
                                    <Span display="flex" mt={6} >
                                        <div><Checkbox name="checkedC" color="default" classes={{ root: classes.CheckboxIcon }} /></div>
                                        <Typography variant="caption">
                                            Remember me 
                                        </Typography>

                                    </Span>
                                    <Span display="flex" justifyContent="space-between" mt={3} >
                                        <Typography variant="subtitle1" className={classes.ForgetPassText}>Forgot Your Password ?</Typography>
                                        <Button variant="outlined" size="large" className={classes.SignUpBtn}>Sign In</Button>
                                    </Span>
                                </Grid>
                            </Grid>
                        </Span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} align="center">
                       <img src={aImage} width="100%"/>
                    </Grid>
                </Grid>
              
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LoginTwo);