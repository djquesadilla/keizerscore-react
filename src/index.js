import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Keizer(props) {
  return (
      <button
          className="keizer"
          onClick={props.onClick}>
          {props.value}
      </button>
  );
}

class KeizerScore extends React.Component {
  render () {
    return (
      <div className="keizerscore">
        {this.props.keizerScore} - {this.props.awayScore}
      </div>
    );
  }
}

class KeizerBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keizerScore: 0,
      awayScore: 0
    }
  }

  renderKeizerScore() {
    return (
      <KeizerScore keizerScore={this.state.keizerScore} awayScore={this.state.awayScore} />
    );
  }

  renderKeizer() {
    return (
      <Keizer onClick={() => this.handleClick()} value="KEIZER"/>
    );
  }

  render() {
    return(
      <div>
        {this.renderKeizerScore()}
        {this.renderKeizer()}
      </div>
    );
  }

  handleClick() {
    this.setState({keizerScore: this.state.keizerScore + 1});
  }  
}

ReactDOM.render(<KeizerBall />,
  document.getElementById('root')
);