/**
 * Created by dxc on 2016/10/26.
 */
import React, {Component} from 'react'
import {Modal,View,StyleSheet,Animated,Easing} from 'react-native';
import Block from 'fs-flex';
const AnBlock = Animated.createAnimatedComponent(Block);
export default class OverlayElement extends Component {
    state = {
        opacity: new Animated.Value(0),
    };

    //初始化渲染不会调用，在接收到新的props时，会调用这个方法。
    componentWillReceiveProps(props) {
        if (this.props.open == true && props.open == false) {
            Animated.timing(this.state.opacity, {
                delay: 0,
                easing: Easing.inOut(Easing.ease),
                toValue: 0, // 目标值
                duration: 300 // 动画时间
            }).start();
        }
    }

    //渲染完成后调用一次，这个时候DOM结构已经渲染了。这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
    componentDidMount() {
        Animated.timing(this.state.opacity, {
            delay: 0,
            easing: Easing.inOut(Easing.ease),
            toValue: 1, // 目标值
            duration: 300 // 动画时间
        }).start();
    }


    render() {
        const {opacity}=this.state;
        const style = {
            zIndex: 999,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        };
        const {children} = this.props;
        return (<Block el={Modal}
                       visible={true}
                       transparent={true}>
            <AnBlock style={style}>
                {children}
            </AnBlock>
        </Block>)
    }
}