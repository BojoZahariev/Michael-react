const Truck = props => {
  return <div className='truck'>Truck</div>;
};

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='hero'>hero</div>;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isHovered: false
    };
  }

  render() {
    return (
      <div>
        <Hero />

        <div className='rightSide'>
          <Truck />
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
