import React, { Component } from 'react';
import MyPlayer from './MyPlayer'
import { connect } from "react-redux";
import './Dance.css'
import firebase from "../../helpers/firebase/index";
import danceAction from "../../redux/dance/actions";
import { sceneConfig } from '../../scripts/index';
import _ from 'lodash';


const {
    updateURL,
    updateColor
} = danceAction;

class Dance extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.database.collection('ipad');
        this.auth = firebase.rsf.app.INTERNAL;
    }

    componentDidMount() {
        if (!localStorage.getItem("uid")) {
            localStorage.setItem("uid", this.auth.getUid());
        }

        console.log(_.find(sceneConfig, ['uid', this.auth.getUid()]));
        let that = this;
        that.ref.doc(localStorage.getItem("uid"))
            .onSnapshot(function (docs) {
                const currentScene = _.find(sceneConfig, ['uid', localStorage.getItem("uid")]);
                let displayText = docs.data().scene;
                that.props.updateURL(currentScene.scene[displayText]);
            });
    }

    onHandleURL = () => {
        this.props.updateURL('test')
    }


    render() {
        const {
            url
        } = this.props;
        return (
            <MyPlayer
                url={url}
                playing="true"
            />
        );
    }
}

function mapStateToProps(state) {
    const { url, colors } = state.Dance;
    return {
        url,
        colors
    };
}

export default connect(mapStateToProps, {
    updateURL,
    updateColor
})(Dance);