import React from 'react';

class KeizerScore extends React.Component {
  render () {
    return (
      <div className="keizerscore">
        {this.props.keizerScore} - {this.props.awayScore}
      </div>
    );
  }
}

export default KeizerScore;