import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModelUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }
    componentDidMount() {
        console.log('mouting modal')
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        //bad
        /**
         * this.state = {
         * email: '',
         * password: '',
         * 
         * }
         * this.state.email === this.state['email']
         */
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state ///... -> copy
        // }, () => {
        //     console.log('check bad state', this.state)
        // })

        //good
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }

    checkValidatInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidatInput();
        if (isValid === true) {
            //call api create modal
            this.props.createNewUser(this.state);

        }

    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'abcClassName'}
                size='lg'

            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 form-group'>
                                <label>Email</label>
                                <input type='text' className='form-control'
                                    onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                    value={this.state.email}></input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Password</label>
                                <input type='password' className='form-control'
                                    onChange={(event) => { this.handleOnChangeInput(event, "password") }} value={this.state.password}></input>
                            </div>
                            <div className='col-6 mt-2 form-group'>
                                <label>First name</label>
                                <input type='text' className='form-control'
                                    onChange={(event) => { this.handleOnChangeInput(event, "firstName") }} value={this.state.firstName}></input>
                            </div>
                            <div className='col-6 mt-2 form-group'>
                                <label>Last name</label>
                                <input type='text' className='form-control'
                                    onChange={(event) => { this.handleOnChangeInput(event, "lastName") }} value={this.state.lastName}></input>
                            </div>
                            <div className='col-12 mt-2 form-group'>
                                <label>Address</label>
                                <input type='text' className='form-control'
                                    onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                    value={this.state.address}></input>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3'
                        onClick={() => { this.handleAddNewUser() }}>
                        Add new
                    </Button>
                    <Button color="secondary" className='px-3'
                        onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelUser);




