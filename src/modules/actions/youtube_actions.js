import { addToYoutubeLibrary } from '../youtube/youtube-library'

export function addPlaylistToYoutube(data) {
    return (dispatch) => {
        return addToYoutubeLibrary(data)
    }
}

export function updateSongsNotFound(data) {
    return {
        type: 'UPDATE_NOTFOUND',
        payload: data
    }
}

export function updateTransferFinished() {
    return {
        type: 'UPDATE_TRANSFER_FINISHED',
        payload: true
    }
}

export function updateCurrentSearchingSong(data) {
    return {
        type: 'UPDATE_CURRENT_SONG',
        payload: data
    }
}

export function updateCurrentSearchingPlaylist(data) {
    return {
        type: 'UPDATE_CURRENT_PLAYLIST',
        payload: data
    }
}