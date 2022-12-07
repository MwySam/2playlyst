import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
//import { updateToken, fetchSpotifyPlaylists, prepareSpotifyDataToBeTransfered } from '../modules/actions/spotify-actions'
import PlaylistCard from '../components/PlaylistCard'
import ScaleLoader from "react-spinners/ScaleLoader"
//import queryString from 'query-string';
import { renderMatches } from 'react-router-dom';
import spotify_default from '../Spotify-liked-track.jpg'
import CustomBtn from '../components/CustomBtn'
import NavBar from '../components/NavBar';
import {Grid} from '@material-ui/core';


let fakedata = [
    {
        name: 'Chill',
        no_of_songs: 37,
        playlist_owner: 'Mwy',
        image: spotify_default,
        id: 'allthelikedsongsid',
        isChecked: false,
    },
      {
        name: 'Rap',
        no_of_songs: 17,
        playlist_owner: 'Mwy',
        image: spotify_default,
        id: 'allthelikedsongsid',
        isChecked: false,
    },
      {
        name: 'Rock',
        no_of_songs: 56,
        playlist_owner: 'Mwy',
        image: spotify_default,
        id: 'allthelikedsongsid',
        isChecked: false,
    }
]

class Playlist extends React.Component {
    constructor(){
        super();
        this.state = {
            parsedJsonData: fakedata,
            spotifyAccessTokenJson: '',
            loading: false,
        };
    };

    componentDidMount() {
        //let parsed = queryString.parse(window.location.search);
        //this.props.updateToken(parsed.access_token)
        //this.setState({ spotifyAccessTokenJson: parsed })
        //this.props.fetchSpotifyPlaylists(parsed)
        this.selectedPlaylists = new Set();
    }
     handleCheckChildElement = (event) => {
        let json_data = this.state.parsedJsonData
        json_data.forEach(data => {
            if (data.id === event.target.id) {
                if (data.isChecked) {
                    data.isChecked = false
                    this.selectedPlaylists.delete(event.target.id);
                } else {
                    data.isChecked = true;
                    this.selectedPlaylists.add(event.target.id);
                }
            }
        })
        this.setState({ parsedJsonData: json_data })
    }

    spinnerCss() {
        return (`height: 50vh;
        display: block;
        margin: 0 auto;
        margin-top: 100px;`)
    }

     transferToYoutube = () => {
        this.setState({
            loading: true,
        })
        this.props.prepareSpotifyDataToBeTransfered(this.selectedPlaylists, this.state.spotifyAccessTokenJson)
    }


render(){
    return(
    <div className="playlist" >
        <NavBar/>
       
        <div className=" button-wrapper" style={{ marginTop: '150px'}}>
            <CustomBtn onClick={this.transferToYoutube}  txt="Transfer Selected Playlists To Youtube">
            </CustomBtn>
            </div>


<Grid container justify='center'  >
{(this.state.loading ? <ScaleLoader css={this.spinnerCss()} size={150} color={"#123abc"} /> : '')}
{this.state.loading ? '' :
this.state.parsedJsonData.map ((data) =>{
    return (<PlaylistCard
        key={data.id}
        name={data.name}
        no_of_songs={data.no_of_songs}
        playlist_owner={data.playlist_owner}
        image={data.image}
        uid={data.id}
        handleCheckboxChange={this.handleCheckChildElement}
        isSelected={data.isChecked}
        />)
    })}
    </Grid>
    </div>
    )
}
}

export default Playlist
