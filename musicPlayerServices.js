import TrackPlayer, { Event } from 'react-native-track-player'

import { playListData } from './src/constants'

export async function playBackSetup() {
    let isSetUp = false;
    try {
        await TrackPlayer.getActiveTrackIndex()
        isSetUp = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetUp = true
    } finally {
        return isSetUp
    }
}


export async function addTrack() {
    TrackPlayer.add(playListData)
}
export async function playBackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}