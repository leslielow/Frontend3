import React from 'react';

class Phrase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render() {
      return (
        <>
          <h1 className="historia">{this.props.msg}</h1>
        </>
      )
    }
  }

export default Phrase;