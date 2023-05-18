import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Todos = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])

    const getAllProduct = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) =>{
                setProducts(data.results)
                localStorage.setItem("products", JSON.stringify(data.results))
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        if (!localStorage.getItem("products")) {

            getAllProduct()
        }
    }, [])


    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((item) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-4 mb-2">
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.species}</p>
                                    <Link to={`/detalle/${item.id}`} className="btn btn-primary">Ver detalle</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todos