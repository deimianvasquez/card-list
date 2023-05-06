import React from "react";
import PropTypes from 'prop-types'

const Error = ({ error }) => {
    return (
        <div className='alert alert-danger'>
            <p className='m-0'>{error}</p>
        </div>
    );
}

export default Error;

Error.propTypes = {
    error: PropTypes.string
}



