import { Divider, TextField, Typography,FormControl,Grid,withStyles,MenuItem,FormHelperText,Button} from '@material-ui/core'
import React, {useState} from 'react'
import Span from "@material-ui/core/Box"
const styles = (theme) =>({
    textFieldFolder:{fontSize : 12, color: '#2b2b2b',padding:'10px 13px',background:'#fff','&::placeholder':{color:'#000', fontWeight:500}},
    cssLabel: {
        color:'#908f8f',
        transform:"translate(14px, 13px) scale(1)",
        fontSize: 13,
    },
    LableShrink:{fontSize:15, transform:'translate(17px, -4px) scale(0.75) !important', color:'#232323'},
    MultitlineInput:{paddingTop:10, paddingBottom:40},
    textFieldMessage : { fontSize : 12, color: '#2b2b2b',paddingRight:10,background:'#fff','&::placeholder':{color:'#000', fontWeight:500}},
    tempBtn:{borderRadius:"50px",color:"#fa6e86",borderColor:"#fa6e86",padding:"10px 39px",fontSize:"11px",marginTop:"24px"}
})


const GroupListValues = [
    {value: 'select_group',label:'Select Group'},
    {value: 'list_1',label:'List 1'},
    {value: 'list_2',label:'List 2'},
    {value: 'list_3',label:'List 3'},
    {value: 'test_empty',label:'Test Empty'},
    {value: 'mark_new_list',label:'Mark New List'},
];

const AddNewPrivateTemplate = (props) => {
    const {classes} = props;
    const [values, setValues] = useState({ GroupValues: 'select_group',})

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <React.Fragment>
            <Span px={4} mt={2}>
               <Typography variant="subtitle2">Add Private TemPlate</Typography> 
               <Span mb={3.7}><Divider /></Span>
               <Grid container direction="row">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                   <Grid container direction="row" spacing={2}>
                       <Grid item xs={12} sm={6} md={6} lg={6}>
                        <FormControl fullWidth className={classes.InputWidth}>
                            <TextField
                            fullWidth
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
                            <FormHelperText error>Error text here...</FormHelperText>
                            </FormControl>
                        </Grid> 
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                        <FormControl fullWidth className={classes.InputWidth}>
                            <TextField
                            fullWidth
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
                            <FormHelperText error>Error text here...</FormHelperText>
                            </FormControl>
                        </Grid> 
                   </Grid>
                   <Span mb={3}/>
                   <Grid container direction="row">
                       <Grid item xs={12} sm={12} md={12} lg={12}>
                          <FormControl fullWidth>
                          <TextField label="Name" variant="outlined" size="small" 
                             InputProps={{ classes: {input: classes.textField,},}}
                             InputLabelProps={{classes:{outlined:classes.cssLabel,shrink:classes.LableShrink}}}/>
                           <FormHelperText>Give your Template a descripptive name  that will be used to identify reports and responses.</FormHelperText>
                          </FormControl>
                       </Grid>
                   </Grid>
                   <Span mb={3}/>
                <Grid container direction="row">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                          <FormControl fullWidth>
                              <TextField  variant="outlined"  multiline rows={3} label="Message" 
                                 InputProps={{ classes: {input: classes.textFieldMessage,multiline: classes.MultitlineInput,},}}
                                 InputLabelProps={{classes:{outlined:classes.cssLabel,shrink:classes.LableShrink}}}
                              />
                              <FormHelperText>Max Image file size 5 MB (images only) and 500kb for other media fileas.Be sure to do atest send with all new images  </FormHelperText>
                        </FormControl>          
                    </Grid>
                </Grid>
                </Grid>
               </Grid>
               <Button variant="outlined" className={classes.tempBtn}>Create Template</Button>
            </Span>
        </React.Fragment>
    )
}

export default withStyles(styles)(AddNewPrivateTemplate);
             