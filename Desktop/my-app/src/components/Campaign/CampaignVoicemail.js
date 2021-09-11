import { Divider, Typography, withStyles, Grid, Icon, Link, Radio, Button, TableContainer, TableRow, Table, TableCell, TableHead, Paper, TableBody } from '@material-ui/core';
import Span from "@material-ui/core/Box"
import React, { useState } from 'react'
import { faCoffee, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const styles = (theme) => ({
    Title: { fontSize: "20px", fontWeight: "bold" },
    Link: { color: "#fb6e8a" },
    GridHeading: { fontSize: "17px" },
    RadioGroup: { display: "flex", alignItems: "center" },
    SaveBtn: {
        color: "#fb6e8a", borderColor: "#fb6e8a", borderRadius: "30px", padding: "10px 13px", marginTop: "17px", boxShadow: "none",
        '&:hover': { boxShadow: 'none', background: 'transparent' },
    },
    TableCss: { border: "1px solid #ddd" },
    AudioFiles: { height: 40, outline: 'none' },
    DeleteBtn: { background: "#fb6e8a !important", color: "#fff", minWidth: "30px" },
    TableHeadCss: { background: "#dddddd78" },
    TableHeadCell: { padding: "5px 15px", fontSize: 13, fontWeight: "bold" },
    TableCellCss: { padding: "7px 15px", fontSize: 13, }
});
const CampaignVoicemail = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="subtitle2" className={classes.Title}>Campaign Voicemail  </Typography>
                <Span mb={2}><Divider /></Span>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Typography variant="subtitle2" className={classes.GridHeading}>
                            Personal Voicemail Settings
                        </Typography>
                        <Typography variant="caption">
                            You have saved 4803767242 (calling number). When you call your texting number(s) from this number you'll be able
                            to leave a recorded personal voicemail. This recorded message will generate a unique voice
                            URL that you can use in your text campaigns. <Link className={classes.Link}> click here</Link> if you wish to change this calling number.
                        </Typography>
                        <div className={classes.RadioGroup}>
                            <Radio size="small" color="default" />
                            <Typography variant="subtitle2">Save personal voicemail(s)</Typography>
                        </div>
                        <div className={classes.RadioGroup}>
                            <Radio color="default" />
                            <Typography>Do Not Save personal voicemail(s)</Typography>
                        </div>
                        <Button variant="outlined" className={classes.SaveBtn}>Save PrefeRences</Button>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <TableContainer component={Paper}>
                            <Table className={classes.TableCss}>
                                <TableHead className={classes.TableHeadCss}>
                                    <TableRow>
                                        <TableCell classes={{ head: classes.TableHeadCell }}>Number</TableCell>
                                        <TableCell classes={{ head: classes.TableHeadCell }}>Date</TableCell>
                                        <TableCell classes={{ head: classes.TableHeadCell }}>Play</TableCell>
                                        <TableCell classes={{ head: classes.TableHeadCell }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell classes={{ root: classes.TableCellCss }}>+14803767242</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>2:34:AM January 21 2019</TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <audio className={classes.AudioFiles} controls  /*src="audio.mp3"*/></audio>
                                        </TableCell>
                                        <TableCell classes={{ root: classes.TableCellCss }}>
                                            <Button className={classes.DeleteBtn}>
                                                <Icon>delete</Icon>
                                            </Button>
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

export default withStyles(styles)(CampaignVoicemail);
