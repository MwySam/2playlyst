import React from 'react'
import {Card, Container, createTheme, Grid, ThemeProvider,Typography} from '@material-ui/core';
import NavBar from '../components/NavBar';
import CustomBtn from '../components/CustomBtn'
/*import CustomCard from './components/CustomCard';*/

/*
    const theme = createTheme({
      typography:{
        fontFamily: ['Montserrat']
      }
    });

*/

class Home extends React.Component {
  constructor(){
   super();
        this.state = {
            isShowing: false,
        }
    }

    showForm = () => {
        window.location.replace('http://localhost:8888/login')
    }

    closeForm = () => {
        this.setState({ isShowing: false }); 
  }
render(){
  return (
  <main>

      <NavBar/>
    <div>
    <Container maxWidth= 'sm' style={{ marginTop: '120px'}}  >
      <Typography variant='h4' align='center' color='white' gutterBottom>
        Transfer your tracks and playlists!
      </Typography>
      <Typography variant='h6' align='center' color='textSecondary' paragraph>
        Transfer your music playlists simply and quickly from Spotify to SoundCloud.
        Without a hassle!
      </Typography>
   
      <CustomBtn onClick= {this.showForm}txt="Let's Go!">

      </CustomBtn>

    </Container>
    </div>

    </main>
  )
}
}
export default Home;