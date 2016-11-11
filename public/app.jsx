var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Some {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updateState = {};

        if(name.length > 0) {
            this.refs.name.value = '';
            updateState.name = name;
        }

        if(message.length > 0) {
          this.refs.message.value = '';
          updateState.message = message;
        }

        this.props.onNewData(updateState);
    },

    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                  <input type="text" ref="name" placeholder="input your name"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="input some message"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is a default message'
        }
    },

    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handlenewData: function(updateState) {
        this.setState(updateState);
    },

    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handlenewData}/>
            </div>
        );
    }
});

var name = 'Andy';
var message = 'This is a message';

ReactDOM.render(
    <Greeter name={name} />,
    document.getElementById('app')
);
