class App extends React.Component{
    render(){
        return (
            <div>
                <Person name="Ethan"
                        age={ 24 }
                        hobbies = {['drankin', 'eatin', 'sleepin']}/>

                <Person name="long name"
                        age={ 1 }
                        hobbies = {['drankin', 'eatin', 'sleepin']}/>

                <Person name="Chao"
                        age={ 35 }
                        hobbies = {['drankin', 'eatin']}/>

            </div>
        );    
    }
}



class Person extends React.Component{
    render(){

        return (
            <div>
                <h2>Learn some information about this person:</h2>
                <p> <b>Name:</b> { this.props.name.length > 8 ? this.props.name.slice(0, 6) : this.props.name }</p>
                <p> <b>Age:</b> { this.props.age }</p>
                <p> <b>Hobbies: </b> </p>
                <ul> 
                    { this.props.hobbies.map( h => <li> {h} </li> )}
                </ul>
                
                <h3> { this.props.age >= 18 ? "Please go vote, you heathen" : "Too bad, too young" }</h3>
            </div>
            )
        };


}

ReactDOM.render(
    <App/>, document.getElementById("root")
  );