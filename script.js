const Truck = props => {
  return (
    <div className='truck' onClick={props.onClick}>
      <img className='truckImg' alt='truck' src={props.image} />
    </div>
  );
};

const Hero = props => {
  if (props.match) {
    return <div className='hero animatedMatch'>hero</div>;
  } else if (props.match === false) {
    return <div className='hero animatedNo'>hero</div>;
  } else {
    return <div className='hero'>hero</div>;
  }
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: ''
    };
  }

  render() {
    return (
      <div>
        <Hero match={this.state.match} />

        <div className='rightSide'>
          <Truck onClick={() => this.setState({ match: true })} image={'./images/firetruck.png'} />
          <Truck onClick={() => this.setState({ match: false })} />
          <Truck onClick={() => this.setState({ match: false })} />
          <Truck onClick={() => this.setState({ match: false })} />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
