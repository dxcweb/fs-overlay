/**
 * Created by dxc on 2016/10/26.
 */
import React, {Component, PropTypes} from 'react';
import {View,StyleSheet} from 'react-native';
export default class DelayClose extends Component {
    static defaultProps = {
        delay: 300
    };
    state = {
        _open: this.props.open
    };
    //初始化渲染不会调用，在接收到新的props时，会调用这个方法。
    componentWillReceiveProps(props) {
        if (this.props.open == props.open) {
            return false;
        }
        if (props.open) {
            this.setState({_open: true});
        } else {
            const me = this;
            setTimeout(function () {
                me.setState({_open: false});
            }, props.delay);
        }
    }

    render() {
        if (this.state._open)
            return this.props.children;
        else
            return <View />
    }
}