import React from 'react';
import Keizer from './Keizer';
import KeizerScore from './KeizerScore';

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

export default KeizerBall;