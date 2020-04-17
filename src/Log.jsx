import React from "react";
import AuthContext from "./context/AuthContext";

const styles = {
    green: {backgroundColor: "green"},
    red: {backgroundColor: "red"}
}

export default () => {
    const {isAuth} = React.useContext(AuthContext);

    return (
        <div
            style={isAuth ? styles.green : styles.red}
        >
            {isAuth ? "OK" : "KO"}
        </div>

    )
}