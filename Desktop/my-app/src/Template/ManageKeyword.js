import { Button, Divider, Grid, Typography, withStyles, Radio, Tooltip, Icon } from '@material-ui/core';
import React from 'react'
import Span from "@material-ui/core/Box"
import { faInfoCircle, faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = (theme) => ({
    Title: { fontSize: 20, fontWight: "bold" },
    CreateBtn: { borderRadius: "30px", color: "#fb6e8a", fontSize: 11, borderColor: "#fb6e8a", padding: "10px 28px", margin: "0px 3px" },
    ReplayTitle: { fontSize: 17, fontWight: 500, },
    LinkKeyword: { color: "#fb6e8a", fontSize: 13, fontWight: "bold", textDecoration: "none" },
    KeywordText: { fontSize: 13, },
    RadioCss: { padding: "0px", marginRight: "3px" },
    RadioText: { fontSize: 12, },
    SaveBtn: { border: "1px solid #fb6e8a", borderRadius: 30, padding: "10px 28px", color: "#fb6e8a", fontSize: 11, margin: "17px 0px 10px 0px" },
    MoreInfoBtn: { borderColor: "#fb6e8a", padding: "8px 15px", fontSize: 11, borderRadius: 30, color: "#fb6e8a",margin:"0px 3px" },
    ToolTipTitle: { fontSize: 13, background: '#000', textAlign: 'center' },
    EditBtn:{border:'1px solid #fb6e8a', borderRadius:30, padding:'8px 8px', color:'#fb6e8a', background:'#fff', minWidth:30},
    InfoIcon:{fontSize:12, marginLeft:3},
    EditIcon:{fontSize:15},
    InfoIcon: { fontSize: 17, marginLeft: 3, },
    [theme.breakpoints.only('xs')]: {
        KeywordOverviewCss: { display: "grid", },
        CreateBtn: { margin: "3px 0px" },
    },
})
const ManageKeyword = (props) => {
    const { classes } = props;
    return (
        <div>
            <Span px={4} mt={2}>
                <Span display="flex" justifyContent="space-between" className={classes.KeywordOverviewCss}>
                    <Typography variant="subtitle2" className={classes.Title}>Keyword Overview</Typography>
                    <div>
                        <Button variant="outlined" className={classes.CreateBtn}>Creat New Keyword</Button>
                        <Button variant="outlined" className={classes.CreateBtn}>Generic Autoresponder</Button>
                    </div>
                </Span>
                <Span mt={1} mb={3.7}><Divider /></Span>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Typography variant="subtitle2" className={classes.ReplayTitle}>Reply Notifications</Typography>
                        <Typography variant="caption" >
                            Receive email notifications about all your replies. Emails will be
                            sent to mark@betwext.com and texts sent to 4803767242 <a href="#" className={classes.LinkKeyword}>click here </a>
                            to change. A per text fee will be deducted from your account.
                        </Typography>
                        <Span mt={1.5} />
                        <Span mb={1} display="flex" alignItems="center">
                            <Radio color="default" size="small" className={classes.RadioCss} />
                            <Typography variant="subtitle2" className={classes.RadioText}>Notify me by email instantly</Typography>
                        </Span>
                        <Span mb={1} display="flex" alignItems="center">
                            <Radio color="default" size="small" className={classes.RadioCss} />
                            <Typography variant="subtitle2" className={classes.RadioText}>Notify me by text instantly</Typography>
                        </Span>
                        <Span mb={1} display="flex" alignItems="center">
                            <Radio color="default" size="small" className={classes.RadioCss} />
                            <Typography variant="subtitle2" className={classes.RadioText}>Notify me by both email and text instantly</Typography>
                        </Span>
                        <Span mb={1} display="flex" alignItems="center">
                            <Radio color="default" size="small" className={classes.RadioCss} />
                            <Typography variant="subtitle2" className={classes.RadioText}>Do not notify me</Typography>
                        </Span>
                        <Span mt={2} mb={2}>
                            <Button className={classes.SaveBtn}>Save Preeferances</Button>
                        </Span>
                        <Typography variant="caption">
                            We'll notify you instantly. You'll receive an email every time someone replies to one of your selected lists or keywords.
                        </Typography>
                        <Typography variant="subtitle2" className={classes.ReplayTitle}>About Keywords</Typography>
                        <Typography variant="caption">
                            The keywords "stop", "help", "yes", and "start" are reserved (you can't create them).
                        </Typography>
                        <Span mt={1.5} />
                        <Typography variant="subtitle2" className={classes.ReplayTitle}>FOLLOW UP MESSAGES</Typography>
                        <Typography variant="caption">
                            Optional additional messages can be added and will be sent when subscribers initially subscribe/respond with a
                            designated keyword. You can create additional follow up messages after you add your first KEYWORD or click the MORE INFO button.
                            Please note once a subscriber replies to your texting number with a KEYWORD the follow up messages outside of the initial keyword response will only
                            send once by design. This is in place so that users don't receive unwanted repeated messages.
                        </Typography>
                        <Span mt={1.5} />
                        <Typography variant="subtitle2" className={classes.ReplayTitle}>STOP</Typography>
                        <Typography variant="caption">
                            Please note a subscriber will be automatically unsubscribed only when they reply with the single word STOP. It is the
                            software account holders (sender) responsibility to unsubscribe others based on their requested sentiment.
                            Please be sure to always check your replies prior to sending.
                        </Typography>
                        <Span mt={1.5} />
                        <Typography variant="subtitle2" className={classes.ReplayTitle}>HELP</Typography>
                        <Typography variant="caption">
                            Betwext will send an automated response outlining how to opt out or reach support. Please note auto-responder responses
                            are not visible in the IM or All Responses area of your platform.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">pinktest</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">newgroup1</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">marktest</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">pink10</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">new1</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">test2</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                        <Span bgcolor="#fff0f3" p={1.2} mb={2} display='flex' justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">emoji1</Typography>
                            <div>
                                <Button variant="outlined" className={classes.MoreInfoBtn}>
                                    More Info
                                    <Tooltip
                                        arrow={true}
                                        classes={{ tooltip: classes.ToolTipTitle }}
                                        disableTouchListener
                                        title="See detailed keyword information or add additional drip messages."
                                        placement="top"
                                    >
                                        <Icon className={classes.InfoIcon}>
                                            info
                                        </Icon>
                                    </Tooltip>
                                </Button>
                                <Button variant="outlined" className={classes.EditBtn}>
                                    <FontAwesomeIcon className={classes.EditIcon} icon={faEdit} />
                                </Button>
                            </div>
                        </Span>
                    </Grid>
                </Grid>
            </Span>
        </div>
    )
}

export default withStyles(styles)(ManageKeyword);