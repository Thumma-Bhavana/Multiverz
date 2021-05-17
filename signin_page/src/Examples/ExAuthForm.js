import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ConfirmSignUp from "./ConfirmSignUp";
import Dashboard from "./Dashboard";

import { Auth } from "aws-amplify";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: "signIn",
            formState: "",
            showError: false,
        };
    }

    signUp = async (email, password) => {
        console.log(email, password);
        try {
            await Auth.signUp(email, password);
            console.log("sign up success!");
            this.setState({ formType: "confirmSignUp" });
        } catch (err) {
            console.log("error signing up..", err);
            this.setState({ showError: true });
        }
    };

    confirmSignUp = async (email, confirmationCode) => {
        console.log(email, confirmationCode);
        try {
            await Auth.confirmSignUp(email, confirmationCode);
            console.log("confirm sign up success!");
            this.setState({ formType: "signIn" });
        } catch (err) {
            console.log("error signing up..", err);
        }
    };

    signIn = async (email, password) => {
        console.log(email, password);
        try {
            await Auth.signIn(email, password);
            console.log("sign in success!");
            this.setState({ formType: "dashboard" });
        } catch (err) {
            console.log("error signing up..", err);
            if (err.code === "UserNotConfirmedException") {
                this.setState({ formType: "confirmSignUp" });
            }
        }
    };

    signOut = async () => {
        try {
            await Auth.signOut()
                .then(console.log("signed out successfully"))
                .then(this.setState({ formType: "signIn" }));
        } catch (error) {
            console.log("error signing out: ", error);
        }
    };

    fedgoogle = async () => {
        try {
            await Auth.federatedSignIn({ provider: "Google" });
            // .then((data) => {
            //     console.log(data);
            //     this.setState({ formType: "dashboard" });
            // });
        } catch (err) {
            console.log("error signing in..", err);
        }
    };

    fedFacebook = async () => {
        try {
            await Auth.federatedSignIn({ provider: "Facebook" });
        } catch (err) {
            console.log("error signing in..", err);
        }
    };

    renderForm = () => {
        switch (this.state.formType) {
            case "signUp":
                return <SignUp signUp={this.signUp} />;
            case "confirmSignUp":
                return <ConfirmSignUp confirmSignUp={this.confirmSignUp} />;
            case "signIn":
                return (
                    <SignIn
                        signIn={this.signIn}
                        fedgoogle={this.fedgoogle}
                        fedFacebook={this.fedFacebook}
                    />
                );
            case "dashboard":
                return <Dashboard signOut={this.signOut} />;
            default:
                return null;
        }
    };

    updateFormType = (type) => {
        this.setState({
            formType: type,
        });
    };

    updateFormState = (type) => {
        this.setState({
            formState: type,
        });
    };

    checkUser = () => {
        Auth.currentAuthenticatedUser()
            .then((user) => console.log({ user }))
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.showError && this.state.formType === "signUp" && (
                    <p>User Already Exists</p>
                )}
                <div>{this.renderForm(this.formType)}</div>
                {this.state.formType === "signUp" && (
                    <p style={styles.footer}>
                        Already have an account?{" "}
                        <span
                            style={styles.anchor}
                            name="signIn"
                            onClick={() =>
                                this.setState({ formType: "signIn" })
                            }
                        >
                            Sign In
                        </span>
                    </p>
                )}
                {this.state.formType === "signIn" && (
                    <p style={styles.footer}>
                        Need an account?{" "}
                        <span
                            style={styles.anchor}
                            name="signUp"
                            onClick={() =>
                                this.setState({ formType: "signUp" })
                            }
                        >
                            Sign Up
                        </span>
                    </p>
                )}
                <button onClick={this.checkUser}>Check User</button>
                <button
                    onClick={async () =>
                        await Auth.currentUserInfo().then((data) =>
                            console.log(data)
                        )
                    }
                >
                    Check Credentials
                </button>
                <button onClick={async () => await Auth.signOut()}>
                    Sign Out
                </button>
            </div>
        );
    }
}

export default AuthForm;

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 45,
        marginTop: 8,
        width: 300,
        maxWidth: 300,
        padding: "0px 8px",
        fontSize: 16,
        outline: "none",
        border: "none",
        borderBottom: "2px solid rgba(0, 0, 0, .3)",
    },
    button: {
        backgroundColor: "#006bfc",
        color: "white",
        width: 316,
        height: 45,
        marginTop: 10,
        fontWeight: "600",
        fontSize: 14,
        cursor: "pointer",
        border: "none",
        outline: "none",
        borderRadius: 3,
        boxShadow: "0px 1px 3px rgba(0, 0, 0, .3)",
    },
    footer: {
        fontWeight: "600",
        padding: "0px 25px",
        textAlign: "center",
        color: "white",
    },
    anchor: {
        color: "#006bfc",
        cursor: "pointer",
    },
};
