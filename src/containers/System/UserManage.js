import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, editUserService, deleteUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // khoi tao bien
            arrUsers: [],
            isOpenModalUser: false,
            isOpenEditUser: false,
            userEdit: {}

        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }


    getAllUsersFromReact = async () => {
        let res = await getAllUsers('ALL');
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users
            });
        }
    }

    handleAddnewAUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
            }
            emitter.emit('EVENT_CLEAR_MODAL_DATA');
        } catch (e) {
            console.log(e)
        }
    }
    handleEditUser = async (user) => {
        this.setState({
            isOpenEditUser: true,
            userEdit: user,
        })
    }
    doEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenEditUser: false
                })

                await this.getAllUsersFromReact()
            } else {
                alert(res.errCode)
            }
        } catch (e) {
            console.log(e);
        }

    }


    handlDeleteUser = async (user) => {
        console.log('check user: ', user)
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    /** Life cycle
     * run component:
     * 1. run construct -> init state
     * 2. Did mount (set state) //luu tru
     * 3. render(re-render)
     * 
     */
    render() {
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers);
        //properties; nested
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditUser}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }

                <div className='title text-center'>MANAGE USERS</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddnewAUser()}><i className="fas fa-plus"></i> Add new users</button>
                </div>
                <div className='mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => { this.handleEditUser(item) }}><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete' onClick={() => { this.handlDeleteUser(item) }}><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
