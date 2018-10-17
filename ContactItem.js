const ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('li', {className: 'ContactItem'},
                React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
                React.createElement('a', {
                    href: `mailto:${this.props.email}`,
                    className: 'ContactItem-email'
                }, this.props.email),
                React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
            )
        );
    }
});