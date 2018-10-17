const ContactForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired,
    },
    componentDidMount() {
        this.refs.name.focus();
    },
    onNameChange(e) {
        this.props.value.name = e.target.value;
        this.props.onChange(this.props.value);
    },
    onEmailChange(e) {
        this.props.value.email = e.target.value;
        this.props.onChange(this.props.value);
    },
    onDescriptionChange(e) {
        this.props.value.description = e.target.value;
        this.props.onChange(this.props.value);
    },
    render() {
        return (
            React.createElement('form', {
                    className: 'ContactForm',
                    onSubmit: this.props.onSubmit.bind(this)
                },
                React.createElement('input', {
                    type: 'text',
                    className: 'ContactForm-name',
                    placeholder: 'Name (required)',
                    value: this.props.value.name,
                    ref: 'name',
                    onChange: this.onNameChange
                }),
                React.createElement('input', {
                    type: 'text',
                    className: 'ContactForm-email',
                    placeholder: 'Email (required)',
                    value: this.props.value.email,
                    ref: 'email',
                    onChange: this.onEmailChange
                }),
                React.createElement('textarea', {
                    className: 'ContactForm-description',
                    placeholder: 'Description',
                    value: this.props.value.description,
                    ref: 'description',
                    onChange: this.onDescriptionChange
                }),
                React.createElement('button', {
                    className: 'ContactForm-button',
                    type: 'submit'
                }, 'Add Contact')
            )
        );
    }
});