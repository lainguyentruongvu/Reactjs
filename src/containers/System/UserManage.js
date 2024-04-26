import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // khoi tao bien
            arrUsers: [],
            isOpenModalUser: false,

        }
    }

    async componentDidMount() {
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
                    test={'abc'}
                />
                <div className='title text-center'>MANAGE USERS</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddnewAUser()}><i className="fas fa-plus"></i> Add new users</button>
                </div>
                <div className='mt-3 mx-1'>
                    <table id="customers">
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
                                        <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                        }

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
