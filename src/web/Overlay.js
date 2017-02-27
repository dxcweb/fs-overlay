/**
 * Created by dxc on 2016/10/26.
 */
import React, {Component} from 'react'
import DelayClose from './DelayClose'
import OverlayElement from './OverlayElement'
export default class Overlay extends Component {
    render() {
        const {open,onClose, children} = this.props;

        return <DelayClose open={open}>
            <div>
                <OverlayElement onClose={onClose} open={open}/>
                {children}
            </div>
        </DelayClose>
    }
}