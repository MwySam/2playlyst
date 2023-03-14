import React from 'react'
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Results from './pages/Results'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createTheme , ThemeProvider} from '@material-ui/core';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const theme = createTheme({
      typography:{
        fontFamily: ['Montserrat'],
      }
    });


class App extends React.Component {
  render() {
    return (
      <main>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/playlist/*" element={<Playlist/>} />
            <Route path="results/*" element={<Results/>} />
          </Routes>
        </Router>
      </ThemeProvider>
      <Footer/>
      </main>)
  }
}

export default App;


