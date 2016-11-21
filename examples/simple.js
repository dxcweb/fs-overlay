/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Overlay from 'fs-overlay'
class Simple extends Component {
    state = {
        open: false
    };

    setOverlay(open) {
        this.setState({open});
    }

    render() {
        return (
            <div style={{height:300,padding:20}}>
                <div onClick={this.setOverlay.bind(this,true)}>点击显示</div>
                <Overlay open={this.state.open}>
                    <div onClick={this.setOverlay.bind(this,false)} style={{position: "fixed",zIndex:1000}}>点击隐藏</div>
                </Overlay>
            </div>
        )
    }
}
ReactDOM.render(
    <Simple />,
    document.getElementById('__react-content')
);