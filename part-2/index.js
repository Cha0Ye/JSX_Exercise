class App extends React.Component{
    render(){
        return (
            <div>
                <Tweet favoriteColor="aquamarine" 
                       someColor="orange" 
                       messageColor="fuchsia" 
                       username="Ethan"
                       user="Ethan"
                       date="Today few seconds ago"
                       message="Howdy Pawtna!"/>

                <Tweet favoriteColor="orange" 
                       someColor="green" 
                       messageColor="blue" 
                       username="Chao"
                       user="Chao"
                       date="Today at twelve oh seven pm"
                       message="Howdy Pawtna at twelve oh seven pm!"/>

                <Tweet favoriteColor="#6b83aa" 
                       someColor="#5a3d5b" 
                       messageColor="#e7dae8" 
                       username="Ethan Chao"
                       user="Chao Ethan"
                       date="Today at twelve oh ten pm"
                       message="Howdy Pawtna at twelve oh ten pm!"/>
            </div>
        );    
    }
}



class Tweet extends React.Component{
    render(){
        const headerColors = {
          color: this.props.favoriteColor,
          backgroundColor:   this.props.someColor,
        };
        const messageColors = {
            color: this.props.messageColor,
        };

        return (
            <div>
                <h2 style={ headerColors }>  Username: { this.props.username } </h2>
                <p>  User: { this.props.user } </p>
                <p>  Date: { this.props.date }</p>
                <p style= { messageColors }>  Message: { this.props.message }</p>
            </div>
            )
        };


}

ReactDOM.render(
    <App/>, document.getElementById("root")
  );