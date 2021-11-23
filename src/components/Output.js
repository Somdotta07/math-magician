import React from 'react';

class Output extends React.Component {
  constructor(props) {
        super(props);
        this.state = {};
    }
  render() {
    const { result } = this.props;
    return (
        <div className="result">
          <p>
              {result}
                0
          </p>
        </div>
      );
  }
}

export default Output;
