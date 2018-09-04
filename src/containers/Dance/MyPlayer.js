import React, { Component } from "react";
import ReactPlayer from 'danpad';

class MyPlayer extends Component {
    state = {
        url: null,
        playing: true,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    }

    render() {
        return (
            <ReactPlayer
                url={this.props.url}
                width='100%'
                height='100%'
                playsinline
                muted
                autoPlay
                // loop
                playing
                ref={this.ref}
                className='react-player'
                // url={url}
                // playing={playing}
                // loop={loop}
                // playbackRate={playbackRate}
                // volume={volume}
                // muted={muted}
                // onReady={() => console.log('onReady')}
                // onStart={() => console.log('onStart')}
                // onPlay={this.onPlay}
                // onPause={this.onPause}
                // onBuffer={() => console.log('onBuffer')}
                // onSeek={e => console.log('onSeek', e)}
                // onEnded={this.onEnded}
                // onError={e => console.log('onError', e)}
                // onProgress={this.onProgress}
                // onDuration={this.onDuration}
            />
        );
    }
}

export default MyPlayer;


