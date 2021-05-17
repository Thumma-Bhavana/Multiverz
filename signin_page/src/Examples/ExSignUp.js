import React, { Component } from "react";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    resetData = () => {
        this.setState({
            email: "",
            password: "",
        });
    };

    updateData = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    sendData = () => {
        console.log("sendData from SignUp clicked");
        this.props.signUp(this.state.email, this.state.password);
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <div style={styles.container}>
                    <h1>Sign Up Form</h1>
                    <input
                        name="email"
                        onChange={(e) => {
                            this.updateData(e);
                        }}
                        style={styles.input}
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            this.updateData(e);
                        }}
                        style={styles.input}
                        placeholder="password"
                    />
                    <button onClick={this.sendData} style={styles.button}>
                        Sign Up
                    </button>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
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
        color: "rgba(0, 0, 0, 0.6)",
    },
    anchor: {
        color: "#006bfc",
        cursor: "pointer",
    },
};

export default SignUp;
