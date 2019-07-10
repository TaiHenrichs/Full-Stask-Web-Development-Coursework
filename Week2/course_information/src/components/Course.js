import React from 'react'

const Course = ({course}) => {
    return (
        <div>
            <div>
                <Header name={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts}/>
            </div>
        </div>
    )
}

const Header = (props) => {
    return (
       <div>
            <h1>
                {props.name}
            </h1>
       </div>
    )
}

const Content = ({parts}) => {
    const partRender = () => {
        return (
            parts.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>)
        )
    }

    return (
        <div>
            <p>
                {partRender()}
            </p>
        </div>
    )
}

const Total = ({parts}) => {
    const total = (s, p) => s + p.exercises

    return (
        <div>
            <p>
                Number of exercises {parts.reduce(total, 0)}
            </p>
       </div>
    )
}

export default Course