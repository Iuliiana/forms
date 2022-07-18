import Form from "./Form";
import React from 'react';
// const Hex2Rgb = () => {
//     return (
//       <Form />
//     );
// }


class Hex2Rgb extends React.Component {

    constructor(props) {
        super(props)
        this.updateInputState = this.updateInputState.bind(this);
    }

    hexToRGB = (hex) => {
        hex = '0x' + hex
        let r = hex >> 16 & 0xFF
        let g = hex >> 8 & 0xFF
        let b = hex & 0xFF
        return `rgb(${r}, ${g}, ${b})`
    }

    updateInputState = (event) => {
        // console.log(event)
        this.setState({
            input: event.trim(),
            rgb: event.length === 6
                ? this.hexToRGB(event)
                : ''
        })
    }

    state = {
        input: '',
        rgb: ''
    }

    render() {
        return (
            <div className="app" style={{background:this.state.rgb}}>
                <Form onChange={this.updateInputState}
                      value={this.state.input}
                      rgb={this.state.rgb} />
            </div>
        )
    }
}


export {Hex2Rgb};