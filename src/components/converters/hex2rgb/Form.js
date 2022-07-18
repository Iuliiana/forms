import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.updateInput = this.updateInput.bind(this)
    }

    updateInput = (event) => {
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <form>
              <input type="text" maxLength="7" value={this.props.value} onChange={this.updateInput} />
             <p className="result">{this.props.rgb}</p>
            </form>
        );
    }
}

export default Form;