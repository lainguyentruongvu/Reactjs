import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harCode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,

            })
        }
        //let {currentUSer} = this.props;
        console.log('didMount edit madol', this.props.currentUser);
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
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

    handleSaveUser = () => {
        let isValid = this.checkValidatInput();
        if (isValid === true) {
            //call api edit modal
            this.props.editUser(this.state);

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
                <ModalHeader toggle={() => { this.toggle() }}>Edit a new user</ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 form-group'>
                                <label>Email</label>
                                <input type='text' className='form-control' disabled
                                    onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                    value={this.state.email}></input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Password</label>
                                <input type='password' className='form-control' disabled
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
                        onClick={() => { this.handleSaveUser() }}>
                        Save changes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);




