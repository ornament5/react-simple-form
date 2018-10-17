// State

const state = {};
const CONTACT_TEMPLATE = {
    name: '',
    email: '',
    description: '',
    errors: null
};

function setState(changes) {
    Object.assign(state, changes);
    ReactDOM.render(React.createElement(ContactView, Object.assign({}, state, {
        onNewContactChange: updateNewContact,
        onNewContactSubmit: submitNewContact
    })), document.getElementById('react-app'));
}

setState({
    contacts: [{
            key: 1,
            name: 'Ivica Đačić',
            email: 'hitivica@sps.rs',
            description: 'Raspevano Nadprase'
        },
        {
            key: 2,
            name: 'Aca Vulin',
            email: 'vulvulin@ex-sps.rs',
            description: 'Zombi Lažni General'
        },
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE)
});

// Actions

function updateNewContact(contact) {
    setState({newContact: contact});
}

function submitNewContact(event) {
    event.preventDefault();
    const contact = Object.assign({}, this.props.value, {errors: {}});
    if (!validateNewContact.bind(this)(contact)) {
        if (contact.errors.name) {
            this.refs.name.focus();
        } else {
            this.refs.email.focus();
        }
        console.log(contact.errors);
        return;
    }
    contact.key = state.contacts.length + 1;
    state.contacts.push(contact);
    setState({
        contacts: state.contacts,
        newContact: Object.assign({}, CONTACT_TEMPLATE)
    });
    this.refs.name.focus();
}

function validateNewContact(contact) {
    // Remove .validation-error class if present
    this.refs.name.className = 'ContactForm-name';
    this.refs.email.className = 'ContactForm-email';

    if (!contact.name) {
        contact.errors.name = 'Name cannot be empty';
        this.refs.name.className += ' validation-error';
    }
    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = 'Please enter a valid email address';
        this.refs.email.className += ' validation-error';
    }
    return Object.keys(contact.errors).length === 0;
}