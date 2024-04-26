import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModelUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    render() {
        console.log('check child props', this.props);
        console.log('check child openmodal', this.props.isOpen);
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
                                <input type='text' className='form-control'></input>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Password</label>
                                <input type='password' className='form-control'></input>
                            </div>
                            <div className='col-6 mt-2 form-group'>
                                <label>First name</label>
                                <input type='text' className='form-control'></input>
                            </div>
                            <div className='col-6 mt-2 form-group'>
                                <label>Last name</label>
                                <input type='text' className='form-control'></input>
                            </div>
                            <div className='col-12 mt-2 form-group'>
                                <label>Address</label>
                                <input type='text' className='form-control'></input>
                            </div>

                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.toggle() }}>
                        Save changes
                    </Button>
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
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




