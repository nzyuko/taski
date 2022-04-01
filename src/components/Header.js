import React from "react";
import PropTypes from "prop-types"
import Button  from "./button";

const Header = ({ title }) => {
    const onClick = () =>{
        console.log("Click")
    }
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add"/>
            {onclick}
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header