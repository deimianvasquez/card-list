import React from 'react'


const Spinner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col 12 col-md-7">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner