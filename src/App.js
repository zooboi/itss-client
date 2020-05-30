import React, { useState } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  port: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
    '& ..MuiInputBase-input': {
      color: 'white',
    }
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  }
}));

function App() {
  const [activeTab, setActiveTab] = useState('1');
  const [radio, setRadio] = React.useState('A');
  const [robot, setRobot] = React.useState(1);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeRadio = (event, newRadio) => {
    setRadio(newRadio);
  };
  const handleChangeRobot = (event, newRobot) => {
    setRadio(newRobot);
  };
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  return (
    <div className="App">
      <h2> <i> Robotic warehouse system </i> </h2>
      {/* <h5> <i> by group 5 </i> </h5> */}

      <div className="control-area">
        <div className="status-area">
          <p>Status show here</p>
        </div>
        <div className="port-button">

          <AppBar position="static" className="nav-bar">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Automatic mode" {...a11yProps(0)} />
              <Tab label="Manual mode" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="automatic-mode">
              <div className="port-area">
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel className="chose-robot" htmlFor="filled-age-native-simple">Chosing robot</InputLabel>
                  <Select
                    native
                    value={state.robot}
                    onChange={handleChangeRobot}
                    inputProps={{
                      name: 'age',
                      id: 'filled-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Optimus Prime</option>
                    <option value={2}>Gundam</option>
                    <option value={3}>Gao Rangers</option>
                  </Select>
                </FormControl>
              </div>

              <div className="button-area3">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Chosing destination</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={radio} onChange={handleChangeRadio}>

                    <div className="radio-area">
                      <div className="left radio">
                        <FormControlLabel value="A" control={<Radio />} label="A" />
                        <FormControlLabel value="B" control={<Radio />} label="B" />
                        <FormControlLabel value="C" control={<Radio />} label="C" />
                        <FormControlLabel value="D" control={<Radio />} label="D" />
                      </div>
                      <div className="right radio">
                        <FormControlLabel value="E" control={<Radio />} label="E" />
                        <FormControlLabel value="F" control={<Radio />} label="F" />
                        <FormControlLabel value="G" control={<Radio />} label="G" />
                        <FormControlLabel value="H" control={<Radio />} label="H" />
                      </div>
                    </div>

                  </RadioGroup>
                </FormControl>
              </div>
            </div>

          </TabPanel>



          <TabPanel value={value} index={1}>
            <div className="manual-mode">
              <div className="port-area">
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel className="chose-robot" htmlFor="filled-age-native-simple">Chosing robot</InputLabel>
                  <Select
                    native
                    value={state.robot}
                    onChange={handleChangeRobot}
                    inputProps={{
                      name: 'age',
                      id: 'filled-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Optimus Prime</option>
                    <option value={2}>Gundam</option>
                    <option value={3}>Gao Rangers</option>
                  </Select>
                </FormControl>
              </div>

              <div className="button-area1">
                <div className="left">
                  <Button variant="contained" color="secondary" id="RASIE" className="robot">Raise arm</Button>
                </div>
                <div className="right">
                  <Button variant="contained" color="secondary" id="LOWER" className="robot">Lower arm</Button>
                </div>
              </div>
              <div className="button-area2">
                <div className="left">
                  <Button variant="contained" color="primary" id="LFT" className="robot">LEFT</Button>
                </div>
                <div className="middle">
                  <Button variant="contained" color="primary" id="FWD" className="robot">FORWARD</Button>
                  <Button variant="contained" color="primary" id="STP" className="robot">STOP</Button>
                  <Button variant="contained" color="primary" id="REV" className="robot">REVERSE</Button>
                </div>
                <div className="right">
                  <Button variant="contained" color="primary" id="RGT" className="robot">RIGHT</Button>
                </div>
              </div>
            </div>

          </TabPanel>



        </div>
      </div >
      <script>

      </script>







    </div >
  );
}

export default App;
