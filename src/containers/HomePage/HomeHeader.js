import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
class HomeHeader extends Component {

    render() {
        console.log('check props: ', this.props);
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo}></img>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homedeader.speciality" /> </b></div>
                                <div><FormattedMessage id="homedeader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homedeader.health-facility" /></b></div>
                                <div><FormattedMessage id="homedeader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homedeader.doctor" /></b></div>
                                <div><FormattedMessage id="homedeader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homedeader.fee" /></b></div>
                                <div><FormattedMessage id="homedeader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i><FormattedMessage id="homedeader.support" />
                            </div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i class="fas fa-search"></i>
                            <input type='text' className='' placeholder='Tìm kiếm kkhoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='border-img-content'>
                                    <div className='icon-child'></div>
                                </div>
                                <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='border-img-content'>
                                    <div className='icon-child2'></div>
                                </div>
                                <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='border-img-content'>
                                    <div className='icon-child3'></div>
                                </div>
                                <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='border-img-content'>
                                    <div className='icon-child4'></div>
                                </div>
                                <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='border-img-content'>
                                    <div className='icon-child5'></div>
                                </div>
                                <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='border-img-content'>
                                    <div className='icon-child6'></div>
                                </div>
                                <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languages: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
