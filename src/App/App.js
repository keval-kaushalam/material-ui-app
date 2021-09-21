import SideMenu from '../components/SideMenu';
import { makeStyles } from '@mui/styles';
import './App.css';
import Header from '../components/Header';
import { createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import PageHeader from '../components/PageHeader';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const theme = createTheme()

const useStyle = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
});

function App() {

  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader 
          title="Page Header"
          subTitle="Page Description"
          icon ={<PeopleOutlineIcon fontSize="large"/>}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
