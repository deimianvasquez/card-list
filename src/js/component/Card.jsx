import React from 'react'
import PropTypes from 'prop-types'

const Card = ({item}) => {
    const {fullname, email, github} = item
    return (
        <div className='personal-card border border-secondary'>
            <div>
                <img
                    src={`https://unavatar.io/github/${github}`}
                    alt={`Github de ${fullname}`}
                />
            </div>
            <div>
                <p><strong>Nombre completo:</strong> {fullname}</p>
                <p><strong>Correo:</strong> {email}</p>
                <p><strong>Github:</strong> {github}</p>
            </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    item: PropTypes.object
}