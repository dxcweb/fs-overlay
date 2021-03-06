/**
 * Created by dxc on 2016/10/26.
 */
import React, {Component} from 'react'
export default class OverlayElement extends Component {
    static defaultProps = {
        onClose: ()=> {
        }
    };

    state = {
        opacity: 0
    };

    //初始化渲染不会调用，在接收到新的props时，会调用这个方法。
    componentWillReceiveProps(props) {
        if (this.props.open == true && props.open == false) {
            this.setState({opacity:0});
        }
    }

    //渲染前调用一次，这个时候DOM结构还没有渲染。fv
    componentWillMount() {
        this.oldOverflow = document.body.style.overflow;
        if (this.oldOverflow != 'hidden') {
            document.body.style.overflow = 'hidden';
        }
    }

    //渲染完成后调用一次，这个时候DOM结构已经渲染了。这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
    componentDidMount() {
        setTimeout(()=>{
            this.setState({opacity:1});
        }, 10);
    }

    //组件移除前调用。
    componentWillUnmount() {
        if (this.oldOverflow != 'hidden') {
            document.body.style.overflow = this.oldOverflow;
        }
    }

    click(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClose();
    }

    render() {
        const {opacity}=this.state;
        const style = {
            zIndex: 1000,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: opacity,
            transition: "0.3s ease-out",
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        };
        return (<div style={style} onClick={this.click.bind(this)}/>)
    }
}