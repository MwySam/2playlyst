import React from 'react'
import {Container,Typography} from '@material-ui/core';
import NavBar from '../components/NavBar';
import CustomBtn from '../components/CustomBtn'

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
      <Typography variant='h4' align='center' style={{color: '#c0c0c0'}} gutterBottom>
        Transfer your tracks and playlists!
      </Typography>
      <Typography variant='h6' align='center' style={{color: '#808080'}} paragraph>
        Transfer your music playlists simply and quickly from Spotify to Youtube.
        Without a hassle!
      </Typography>
   
      <CustomBtn 
      onClick={() => { this.showForm();}} txt="Let's Go!">

      </CustomBtn>

    </Container>
    </div>

    </main>
  )
}
}
export default Home;