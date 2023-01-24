import React from 'react'

const Style2 = () => {

    const styleTitle = {
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    }



    return (
        <div>
            <h2 style={styleTitle}>JSX Loops</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quasi voluptatum facilis nemo fuga natus! Adipisci eligendi animi sint laboriosam nesciunt quas? Dignissimos magni repudiandae nulla odio, incidunt molestiae quia!</p>


            <h2 style={{ ...styleTitle, color: "blue" }}>Component Props</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quasi voluptatum facilis nemo fuga natus! Adipisci eligendi animi sint laboriosam nesciunt quas? Dignissimos magni repudiandae nulla odio, incidunt molestiae quia!</p>

        </div>
    )
}

export default Style2