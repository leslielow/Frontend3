import React from 'react';
import History from './components/history/history';
import Option from './components/options/option';
import Phrase from './components/phrases/phrase';
import { getData } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "ph2",
      data: [],
      position: "1",
      positionId: "1",
      tmp: "",
      prevPosition: "",
      item: {},
      history: []
    };

    this.selectOption = this.selectOption.bind(this);
  }
  
  componentDidMount() {
    let data = getData();
    this.setState({ data: data });
    this.setItem(data);
  }

  componentDidUpdate(prevProps, prevState) {   
    if(prevState.tmp !== this.state.prevPosition) {
      this.setState({prevPosition: prevState.tmp})
    }
  }

  selectOption(opt) {
    let new_position = (parseInt(this.state.position) + 1).toString(); 
    let posStr = new_position + opt;

    let historyOptions = this.state.history;
    historyOptions.push(opt.toUpperCase());

    this.setState({
      position: new_position,
      tmp: opt,
      positionId: posStr,
      history: historyOptions
    }, function () {
      this.setItem(this.state.data);
    })
  }

  setItem(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.state.positionId) {
        this.setState({ item: data[i]})
      }
    }
    return {}
  }

    render() {
      return (
        <>
        {(this.state.position !== "6")&&
        <div className="layout">
        <Phrase msg={this.state.item.historia} />
        <Option options={this.state.item} setOpt={this.selectOption} />
        <History history={this.state.history} prev={this.state.prevPosition}/>
        </div>
        }
        {this.state.position >= "6" &&
        <h1 className="layout historia">Fin del juego, hasta la proxima !</h1>}
        </>
      )
    }
  }

export default App;
