import { Divider, Typography, withStyles, Grid, Link, TableContainer,Paper, Table, TableHead, TableRow,TableCell,Button, TableBody} from '@material-ui/core'
import React, { useState } from 'react'
import Span from "@material-ui/core/Box"
import EditImage from "../../assets/flower.jpg";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent} from '@material-ui/lab';
const styles = (theme) => ({
    capmaginTitle: { fontSize: "20px", fontWeight: "bold" },
    Title: { fontSize: 20, fontWeight: 'bold', marginBottom: -8 },
    ShortLinkBtn: { border: '1px solid #5cb85c', borderRadius: 30, padding: '10px 22px', fontSize: 11, color: '#5cb85c', },
    TableHeadCss: { background: '#ebebeb', lineHeight: '6px !important', padding: '10px 16px' },
    TableCss: { border: '1px solid #e0e0e0' },
    TableCellHead: { lineHeight: '6px !important', fontSize: 12, color: '#585757', fontWeight: 'bold', padding: '15px 16px' },
    TableCellCss: { padding: '10px 16px', fontSize: 13, color: '#585757' },
    TableCellCssLink: { padding: '10px 16px', fontSize: 13, color: '#585757', color: '#fb6e8a', cursor: 'pointer' },
    AllLinks: { textDecoration: 'none', fontSize: 12, color: '#585757', color: '#fb6e8a', cursor: 'pointer' },
    MsgBodyText: { fontSize: 15 },
    MainHeadline: { color: '#636363', fontSize: 13 },
    AllText: { color: '#636363', fontSize: 13 },
    AllImages: { width: 60, marginRight: 10, marginTop: 4 },
    ErrorRow: { background: '#fe9f9f' },
    StopBtn: { background: '#fb6e8a', color: '#fff', fontSize: 11, minWidth: 30, padding: '4px 7px', '&:hover': { background: '#fb6e8a' } },
    StopBtnDisabled: { background: '#eaeaea', color: '#868686', fontSize: 11, minWidth: 30, padding: '4px 7px', '&:hover': { background: '#eaeaea' } },
    TableCellCssLinkError: { padding: '10px 16px', fontSize: 12, color: '#cf2b2b' },
    CheckBoxCSs: { padding: 0 },
    textField: { fontSize: 12, color: '#2b2b2b', padding: '12px 13px', background: '#fff', '&::placeholder': { color: '#2b2b2b', fontSize: 13, fontWeight: 500 } },
    SeacrchIcon: { padding: 6 },
    //Timeline css
    MissingConentCss: { '&:before': { display: "none" }, },
    TimelineDayRangeText: { color: '#fb6e8a', fontSize: 12 },
    DaysContainer: { padding: '5px 7px' },
    TimelinePadding: { padding: 0 },
    DaysContent: { padding: 0, color: '#353535', fontSize: 12, marginTop: 12 },
    TimelineDotCss: { padding: 8, border: 'none', boxShadow: 'none', background: '#fb6e8a', marginTop: 7 },
    AddBtnDivider: { width: 15, height: 2, background: '#bdbdbd' },
})
const SechudelCampagin = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Span px={4} mt={2}>
                <Typography variant="subtitle2" className={classes.capmaginTitle}>Sechedule Campaign:A3-Oct</Typography>
                <Typography variant="subtitle2">Please note your dashboard may not display immediats updates on the day of a sent Campaign.</Typography>
                <Span mt={1} mb={2}><Divider /></Span>
                <Grid container direction='row' spacing={4}>
                    <Grid item xs={12} sm={9} md={9} lg={10}>
                        <Typography variant='subtitle2' className={classes.MsgBodyText}>Message Body</Typography>
                        <Typography variant='caption'>
                            Just letting you know this is your last month to take advantage of your earned discount privilege.
                            To remain active and keep your 50% discount for the next 2 months, you just need a cumulative order
                            of $225 whsl this month. Let me know if you need help! <a href="#" target='_blank' className={classes.AllLinks}>https://bit.ly/2vaHhr0</a> STOP to end
                        </Typography>
                        <Timeline align="left" classes={{ root: classes.TimelinePadding }}>
                            <TimelineItem classes={{ missingOppositeContent: classes.MissingConentCss }}>
                                <TimelineSeparator>
                                    <TimelineDot classes={{ defaultGrey: classes.TimelineDotCss }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent classes={{ root: classes.DaysContainer }}>
                                    <Typography variant="subtitle2" className={classes.TimelineDayRangeText}>Day 1</Typography>
                                    <Span className={classes.DaysContent}>
                                        <Span display="flex" alignItems="center" className={classes.ImageContainer}>
                                            <div><img className={classes.AllImages} src={EditImage} /></div>
                                            <Typography variant="caption">
                                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry standard dummy text ever since the 1500s  unknown printer took a galley of type
                                            </Typography>
                                        </Span>
                                    </Span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem classes={{ missingOppositeContent: classes.MissingConentCss }}>
                                <TimelineSeparator>
                                    <TimelineDot classes={{ defaultGrey: classes.TimelineDotCss }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent classes={{ root: classes.DaysContainer }}>
                                    <Typography variant="subtitle2" className={classes.TimelineDayRangeText}>Day 2</Typography>
                                    <Span className={classes.DaysContent}>
                                        <Typography variant="caption">
                                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                            standard dummy text ever since the 1500s
                                        </Typography>
                                    </Span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem classes={{ missingOppositeContent: classes.MissingConentCss }}>
                                <TimelineSeparator>
                                    <TimelineDot classes={{ defaultGrey: classes.TimelineDotCss }} />
                                    <div style={{ display: "contents" }}>
                                        <TimelineConnector />
                                        <Divider className={classes.AddBtnDivider} />
                                    </div>
                                </TimelineSeparator>
                                <TimelineContent classes={{ root: classes.DaysContainer }}>
                                    <Typography variant="subtitle2" className={classes.TimelineDayRangeText}>Day 3</Typography>
                                    <Span className={classes.DaysContent}>
                                        <Typography variant="caption">
                                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                            standard dummy text ever since the 1500s
                                        </Typography>
                                    </Span>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={2}>
                        <Span mt={2.7} />
                        <Span bgcolor='#ffecf0' p={1.5} borderRadius={5} mt={2}>
                            <Typography variant='subtitle2' className={classes.MainHeadline}>Total Message Schedulded</Typography>
                            <Span mt={1}><Typography variant='h6' className={classes.AllText}>512</Typography></Span>
                        </Span>
                        <Span bgcolor='#ffecf0' p={1.5} borderRadius={5} mt={2}>
                            <Typography variant='subtitle2' className={classes.MainHeadline}>Schduled On</Typography>
                            <Span mt={1}><Typography variant='h6' className={classes.AllText}>01 Nov 2020 10 : 10 AM</Typography></Span>
                        </Span>
                        <Span bgcolor='#ffecf0' p={1.5} borderRadius={5} mt={2}>
                            <Typography variant='subtitle2' className={classes.MainHeadline}>Campaign Type</Typography>
                            <Span mt={1}><Typography variant='h6' className={classes.AllText}>Drip</Typography></Span>
                        </Span>
                    </Grid>
                </Grid>
                <Typography>Campaign Subscribers</Typography>
                <Span mt={1} mb={3}>
                <TableContainer component={Paper}>
                    <Table className={classes.TableCss}>
                        <TableHead className={classes. TableHeadCss}>
                            <TableRow>
                                <TableCell classes={{head:classes.TableCellHead}} width="29%">Subscriber Name</TableCell>
                                <TableCell  classes={{head:classes.TableCellHead}} width="29%">Phone Number</TableCell>
                                <TableCell  classes={{head:classes.TableCellHead}} width="31%">Email</TableCell>
                                <TableCell  classes={{head:classes.TableCellHead}} width="11%">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Shwan Martin</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Mark k</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow className={classes. ErrorRow}>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Steve Waugh</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtnDisabled}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Donald Aalen</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Charito Agosto</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Jac'Quice Allen</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Jac'Quice Allen</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell classes={{root:classes. TableCellCssLink}}>Jac'Quice Allen</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>(912) 223-9653</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}>pinksuccess@pinksuccess.net</TableCell>
                                <TableCell classes={{root:classes.TableCellCss}}><Button className={classes. StopBtn}>STOP</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Span>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(SechudelCampagin);
