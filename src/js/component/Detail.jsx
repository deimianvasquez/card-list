import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from './Spinner.jsx';

const Detail = () => {
    const [product, setProduct] = useState(null)

    let { idProduct } = useParams()
    let navigate = useNavigate()

    console.log(idProduct)


    const getProduct = () => {
        fetch(`https://rickandmortyapi.com/api/character/${idProduct}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            {product == null ?
               <Spinner/> :
                <div className="container">
                    <div className="row">
                        <div className="col 12 col-md-7">
                            <div>
                                <img src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                                <p>{product.status}</p>
                                <p>{product.species}</p>
                                <button onClick={() => navigate("/todos")} >Volver</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Detail