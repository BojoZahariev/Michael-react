const Truck = props => {
  return <div>Truck</div>;
};

const Bin = props => {
  return (
    <div className='bin' id='test'>
      Bin
    </div>
  );
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  getOffset = () => {
    console.log(this.myRef.current.offsetTop);
    console.log(this.myRef.current.offsetLeft);
  };
  render() {
    return (
      <div ref={this.myRef} onClick={this.getOffset}>
        click
      </div>
    );
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
        <Truck />
        <Bin />
        <MyComponent />
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
