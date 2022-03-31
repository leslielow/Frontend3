import React from 'react';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }; 
}

componentWillUnmount() {
    alert("Fin")
}
    render() {
        const { history } = this.props;
      return (
        <div className="recordatorio">
        <h3>Selección anterior: {this.props.prev.toUpperCase()}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
            {history.map(h => {
               return <li key={h}>{h}</li>
            })}            
        </ul>
    </div>
      )
    }
  }

export default History;