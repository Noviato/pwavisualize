import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../../components/uielements/input";
import Checkbox from "../../components/uielements/checkbox";
import Button from "../../components/uielements/button";
import authAction from "../../redux/auth/actions";
import appAction from "../../redux/app/actions";
import Firebase from "../../helpers/firebase";
import FirebaseLogin from "../../components/firebase";
import IntlMessages from "../../components/utility/intlMessages";
import SignInStyleWrapper from "./signin.style";
// import fb from '../../helpers/firebase/index'

const { login } = authAction;
const { clearMenu } = appAction;

class SignIn extends Component {
    state = {
        redirectToReferrer: false
    };
    componentWillReceiveProps(nextProps) {
        if (
            this.props.isLoggedIn !== nextProps.isLoggedIn &&
            nextProps.isLoggedIn === true
        ) {
            this.setState({ redirectToReferrer: true });
        }
    }
    handleLogin = () => {
        const { login, clearMenu } = this.props;
        login();
        clearMenu();
        // localStorage.setItem("uid", fb.rsf.app.INTERNAL.auth.getUid());
        this.props.history.push("/dance");
    };
    render() {
        const from = { pathname: "/dance" };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <SignInStyleWrapper className="isoSignInPage">
                <div className="isoLoginContentWrapper">
                    <div className="isoLoginContent">
                        <div className="isoLogoWrapper">
                            <Link to="/dance">
                                <IntlMessages id="page.signInTitle" />
                            </Link>
                        </div>

                        <div className="isoSignInForm">
                            <div className="isoInputWrapper">
                                <Input size="large" placeholder="Username" />
                            </div>

                            <div className="isoInputWrapper">
                                <Input size="large" type="password" placeholder="Password" />
                            </div>

                            <div className="isoInputWrapper isoLeftRightComponent">
                                <Checkbox>
                                    <IntlMessages id="page.signInRememberMe" />
                                </Checkbox>
                                <Button type="primary" onClick={this.handleLogin}>
                                    <IntlMessages id="page.signInButton" />
                                </Button>
                            </div>

                            <div className="isoInputWrapper isoOtherLogin">
                                {Firebase.isValid && <FirebaseLogin login={this.handleLogin} />}
                            </div>
                           
                        </div>
                    </div>
                </div>
            </SignInStyleWrapper>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: state.Auth.idToken !== null ? true : false
    }),
    { login, clearMenu }
)(SignIn);
