import React,{useState} from 'react'
import { Table,TableCell,Typography,withStyles,Divider,Paper,TableContainer, TableHead, TableRow,Grid,TextField,FormControl,MenuItem, TableBody, Link} from '@material-ui/core';
import Span from '@material-ui/core/Box'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const styles = (theme) => ({
    manageTexty:{fontSize:"20px",fontWeight:"bold"},
    TableCss:{border:'1px solid #e0e0e0'},
    tableHead:{background:'#ebebeb',lineHeight:'6px !important'},
    TableCellHead:{lineHeight:'6px !important', fontSize:12, color:'#585757', fontWeight:'bold'},
    textFieldFolder:{fontSize : 12, color: '#2b2b2b',padding:'10px 13px',background:'#fff','&::placeholder':{color:'#000', fontWeight:500}},
    statusIcon:{fontSize:26, marginTop:7, color:'#82d53c !important'},
    statusIconInactive:{fontSize:26, marginTop:7, color:'#9c9c9c !important'},
    TableCellCss:{padding:'0px 16px', fontSize:13, color:'#585757'},
    TableCellEditCss:{padding:'0px 16px', fontSize:13, color:'#fb6e8a', cursor:'pointer'},
    
    [theme.breakpoints.only('xs')]: {
      TableCss:{border:'1px solid #e0e0e0',minWidth:600},
      },
  });
  const GroupListValues = [
    {value: 'select_group',label:'Select Group'},
    {value: 'list_1',label:'List 1'},
    {value: 'list_2',label:'List 2'},
    {value: 'list_3',label:'List 3'},
    {value: 'test_empty',label:'Test Empty'},
    {value: 'mark_new_list',label:'Mark New List'},
  ];  
const ManageCategories = (props) => {
    const {classes} = props;
    const [values, setValues] = useState({ GroupValues: 'select_group',})

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <React.Fragment>
        <Span px={4} mt={2}>
       <Typography className={classes.manageTexty}>Manage Categories</Typography>
   <Span mb={3.7}>    <Divider /></Span>  
       <Grid Container direction="row">
         <Grid item xs={12} sm={6} md={6} lg={3}>
           <FormControl fullWidth className={classes.InputWidth}>
               <TextField
                   select
                   value={values.GroupValues}
                   variant="outlined"
                   onChange={handleChange('GroupValues')}
                   InputProps={{ classes: {input: classes.textFieldFolder,},}}
               >
                   {GroupListValues.map(option => (
                       <MenuItem key={option.value} value={option.value}>
                           {option.label}
                       </MenuItem>
                   ))}
               </TextField>
           </FormControl>
         </Grid>
       </Grid>
       <Span mt={2}/> 
       <TableContainer component={Paper} >
         <Table className={classes.TableCss}>
           <TableHead className={classes.tableHead}>
             <TableRow>
               <TableCell  classes={{head:classes.TableCellHead}} width="90%">SubCategory</TableCell>
               <TableCell  classes={{head:classes.TableCellHead}} width="5%">Action</TableCell>
               <TableCell  classes={{head:classes.TableCellHead}} width="5%">Status</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>New Consultant Serise</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIcon}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>New Consultant w/out Unit Site</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes. statusIconInactive}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>New Product Info & Company Contest</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIcon}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>Consultant Wishesh</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIcon}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>Consultant Status</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIcon}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>Motivational </TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIcon}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>Challenges</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIcon}/></TableCell>
             </TableRow>
             <TableRow>
               <TableCell classes={{root:classes.TableCellCss}}>CANADA-Consultant Status</TableCell>
                                   <TableCell classes={{root:classes.TableCellEditCss}}>Edit</TableCell>
               <TableCell classes={{root:classes.TableCellCss}}><FiberManualRecordIcon className={classes.statusIconInactive}/></TableCell>
             </TableRow>
           </TableBody>
         </Table>
       </TableContainer>
        </Span>
      </React.Fragment>
    )
}

export default withStyles(styles)(ManageCategories);
