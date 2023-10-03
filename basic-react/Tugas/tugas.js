// //Class Component
// const { Component } = React;
// const { render } = ReactDOM;

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//       this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count.toString().padStart('0')}</h1>
//         <button onClick={this.decrement}>- 1</button>
//         <button onClick={this.increment}>+ 1</button>
//       </div>
//     );
//   }
// }

// render(<Counter />, document.getElementById('root'));

//Fuctional Component
const { useState } = React;
const { render } = ReactDOM;

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Functional Component</h1>
            <h1>{count.toString().padStart('0')}</h1>
            <button onClick={decrement}>- 1</button>
            <button onClick={increment}>+ 1</button>
        </div>
    );
}

// Render the Counter component to the root div
render(<Counter />, document.getElementById('root'));