import { useState } from "react";
import "../HeaderAll/HeaderAll.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    form: {
        padding:"0",
        margin:"0",
    },
  }));

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#22A7F2',
        },
    },
});

export default function HeaderAll (){
        const [hidden,nothidden] = useState(false);
        const classses = useStyles();
        return(
            <div className = "HeaderAll">
            <div className = "Header">
                <div className = "HeaderLogo">
                    <h2>KinoPoisk</h2>
                </div>
                <div className = "HeaderNavbar"  id = {hidden ? "hidden" : ""}>
                    <a href = "#">Part</a>
                    <a href = "#">Popular</a>
                    <a href = "#">Help</a>
                </div>
                <div className = "HeaderButtons">
                    <button onClick = {() => nothidden(!hidden)}>показать</button>
                    <h3>KinoPoisk</h3>
                </div>
                <div className = "HeaderSearch">
                    <div className = "HeaderSearchInput">
                    <ThemeProvider theme={theme} >
                    <TextField id="outlined-basic" className = {classses.form} label="поиск по запросу" variant="outlined"  color = "secondary"/>
                    </ThemeProvider>
                    </div>
                    <div className = "HeaderSearchButton" >
                    <Button id = "ButtonSearch" variant="contained" color="primary" href="#contained-buttons">
                         Search
                     </Button>
                    </div>
                    <div className = "HeaderSearchButton" >
                    <Button id = "ButtonSearch" variant="contained" color="primary" href="#contained-buttons">
                         Sign In
                     </Button>
                    </div>
                </div>
            </div>
            <div className = "SliderImg">
                <h2>Salom</h2>
            </div>
            <div>
            </div>
            </div>
    )
}