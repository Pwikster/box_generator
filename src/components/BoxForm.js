import React, {useState} from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState('')
    const [size, setSize] = useState(100)

    const boxSubmit = (e) => {
        e.preventDefault()

        //create box object to be lifted
        const box = {
            color : color,
            size : size
        }

        //lift state
        props.addBox(box)
        
        //clear input
        setColor('')
        setSize(100)
    }


    return (
        <div>
            <form onSubmit={ boxSubmit }>
                <div>
                    <label>Color: </label>
                    <input type='text' placeholder='Enter a color' value={ color } onChange={ (e) => setColor(e.target.value) }></input>

                    <label>Size: </label>
                    <input type='number' placeholder='Size (optional)' value={ size } onChange={ (e) => setSize(e.target.value) }></input>

                    <input type='Submit' value='Submit'></input>
                </div>
            </form>
        </div>
        )

}
export default BoxForm