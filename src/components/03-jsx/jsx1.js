import React from 'react'

const Jsx1 = () => {

    const message = "Class isimleri className içinde verilir ve attribute lar camelCase olarak yaızılır"

    return (
        <>
            <li>Tüm elementler tek bir root element içinde olmalı</li>
            <li className="title">{message}</li>
        </>
    )
}

export default Jsx1