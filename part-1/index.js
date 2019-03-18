class App extends React.Component{
    render(){
        return (
            <div>
                <FirstComponent />
                <NamedComponent name="Rithm10"/>
            </div>
        );    
    }
}

class FirstComponent extends React.Component{
    render () {
      return <h1>My very first component.</h1>
    }
  }


  class NamedComponent extends React.Component{
      render () {
          return <p> My name is {this.props.name}  </p>
      }
  }

  ReactDOM.render(
    <App/>, document.getElementById("root")
  );