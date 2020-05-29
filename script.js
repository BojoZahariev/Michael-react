const Truck = props => {
  return (
    <div className='truck' onClick={props.onClick}>
      Truck
    </div>
  );
};

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.clicked !== prevProps.clicked) {
      this.setState({
        animation: true
      });
    }
  }

  render() {
    return <div className={`hero ${this.state.animation && 'animated'}`}>hero</div>;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isHovered: false
    };

    this.setMode = this.setMode.bind(this);
  }

  setMode(m) {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div>
        <Hero clicked={this.state.clicked} />

        <div className='rightSide'>
          <Truck onClick={() => this.setState({ clicked: true })} />
          <Truck />
          <Truck />
          <Truck />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);

/*
var el = document.querySelector('#test');
var viewportOffset = el.getBoundingClientRect();
// these are relative to the viewport, i.e. the window
var top = viewportOffset.top;
var left = viewportOffset.left;
console.log(top, left);
*/
