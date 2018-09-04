import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Button from '../../components/uielements/button';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../settings/basicStyle';
import { rtl } from '../../settings/withDirection';
import { sceneConfig } from '../../scripts/index';
import firebase from "../../helpers/firebase/index";
import _ from 'lodash';
import async from 'async-es';


export default class extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.database.collection('ipad');
        this.auth = firebase.rsf.app.INTERNAL;
        this.state = {
            size: 'default',
            loading: false,
            iconLoading: false
        }
    }

    componentDidMount() {
       
    }


    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };

    onHandleStop(scene) {
        let that = this;
        async.each([1, 2, 3, 4, 5, 6, 7, 8], function (element, callback) {
            const currentDevice = _.find(sceneConfig, ['order', element]);
            that.ref.doc(currentDevice.uid).update({ scene: scene });
            console.log(currentDevice.uid, element, scene);
        }, function (err) {
            if (err) {
                // console.log(err)
            }
        })
    }

    onHandleStart(scene) {
        let that = this;
        async.each([1, 2, 3, 4, 5, 6, 7, 8], function (element, callback) {
            const currentDevice = _.find(sceneConfig, ['order', element]);
            that.ref.doc(currentDevice.uid).update({ scene: scene });
            console.log(currentDevice.uid, element, scene);
        }, function (err) {
            if (err) {
                // console.log(err)
            }
        })
    }

    onHandleClick(order, scene) {

        const currentDevice = _.find(sceneConfig, ['order', order]);
        this.ref.doc(currentDevice.uid).update({ scene: scene });
        console.log(currentDevice.uid, order, scene);
    }

    render() {
        const margin = {
            margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
        };
        const marginColor = {
            margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
            backgroundColor: 'green',
            color: 'white'
        };
        const { rowStyle, colStyle, gutter } = basicStyle;
        return (
            <LayoutWrapper>
                <PageHeader>Scene Control</PageHeader>
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={12} sm={12} xs={24} style={colStyle}>
                        <Box title="Scene1">
                            <ContentHolder>
                                <Button type="success" style={marginColor} onClick={() => this.onHandleStart(1)}>
                                    Start
                                </Button >
                                <Button type="danger" style={margin} onClick={() => this.onHandleStop(0)}>
                                    Stop
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(1, 1)}>
                                    Device 1
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(2, 1)}>
                                    Device 2
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(3, 1)}>
                                    Device 3
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(4, 1)}>
                                    Device 4
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 5
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 6
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 7
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 8
                                </Button>

                            </ContentHolder>
                        </Box>
                    </Col>
                    <Col md={12} sm={12} xs={24} style={colStyle}>
                        <Box title="Scene2">
                            <ContentHolder>
                                <Button type="success" style={marginColor} onClick={() => this.onHandleStart(2)}>
                                    Start
                                </Button >
                                <Button type="danger" style={margin} onClick={() => this.onHandleStop(0)}>
                                    Stop
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(1, 2)}>
                                    Device 1
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(2, 2)}>
                                    Device 2
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(3, 2)}>
                                    Device 3
                                </Button>
                                <Button type="primary" style={margin} onClick={() => this.onHandleClick(4, 2)}>
                                    Device 4
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 5
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 6
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 7
                                </Button>
                                <Button type="primary" style={margin}>
                                    Device 8
                                </Button>

                            </ContentHolder>
                        </Box>
                    </Col>
                </Row>
            </LayoutWrapper>
        );
    }
}

// function mapStateToProps(state) {
//     const { url, colors } = state.Dance;
//     return {
//         url,
//         colors
//     };
// }

// export default connect(mapStateToProps, {
// })(Dance);