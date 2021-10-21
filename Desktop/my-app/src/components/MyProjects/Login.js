import { withStyles, Paper, Grid, Typography, FormControl, TextField, Checkbox, Button, Avatar } from '@material-ui/core'
import React from 'react'
import Span from "@material-ui/core/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, } from '@fortawesome/free-solid-svg-icons';

const styles = (theme) => ({
    PaperStyle: { padding: 22, height: "auto", width: 320, margin: "20px auto",borderTop: "5px solid #0073AA",borderRadius:"0px"},
    AvatarCss: { background: "#0073AA", width: 50, height: 50 },
    LoginTitle: { fontSize: 25, fontWeight: 500, marginTop: 10 },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#000', fontWeight: 500 } },
    cssLabel: {
        color: '#908f8f',
        transform: "translate(14px, 13px) scale(1)",
        fontSize: 13,
    },
    LableShrink: { fontSize: 15, transform: 'translate(17px, -4px) scale(0.75) !important', color: '#232323' },
    CheckboxCss: { padding: 0 },
    CheckboxTitle: { fontSize: 13, marginLeft: 5 },
    SigninBtn: { fontSize: 13, color: "#0073AA", borderColor: "#0073AA", padding: "7px 25px", borderRadius: 30 },
    ForgetPassText: { fontSize: 14, color: "#0073AA", cursor: 'pointer', },
})
const Login = (props) => {

    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={1.5} mt={6}>
                <Grid container direction="row">
                    <Paper elevation={5} classes={{ elevation5: classes.PaperStyle }}>
                        <Grid align="center">
                            <Avatar classes={{ colorDefault: classes.AvatarCss }}>
                                <FontAwesomeIcon icon={faUser} />
                            </Avatar>
                            <Typography variant="subtitle2" className={classes.LoginTitle}>Login</Typography>
                        </Grid>
                        <Span mt={3} />
                        <FormControl fullWidth>
                            <TextField
                                id="email"
                                label="Email"
                                type="text"
                                variant="outlined"
                                InputProps={{ classes: { input: classes.textField, }, }}
                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                            />
                        </FormControl>
                        <Span mt={3} />
                        <FormControl fullWidth>
                            <TextField
                                id="email"
                                label="Password"
                                type="password"
                                variant="outlined"
                                InputProps={{ classes: { input: classes.textField, }, }}
                                InputLabelProps={{ classes: { outlined: classes.cssLabel, shrink: classes.LableShrink } }}
                            />
                        </FormControl>
                        <Span display="flex" mt={3} alignItems="center">
                            <div><Checkbox name="checkedC" color="primary" size="small" className={classes.CheckboxCss} /></div>
                            <Typography variant="subtitle1" className={classes.CheckboxTitle}>Remember me</Typography>
                        </Span>
                        <Span display="flex" justifyContent="space-between" alignItems="center" mt={3} >
                            <Typography variant="subtitle2" className={classes.ForgetPassText}>Forgot Your Password ?</Typography>
                            <Button variant="outlined" size="large" className={classes.SigninBtn}>Sign In</Button>
                        </Span>
                    </Paper>
                </Grid>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(Login)
