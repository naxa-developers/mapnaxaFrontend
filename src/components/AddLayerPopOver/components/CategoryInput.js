import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

const CategoryInput = props => {
    return (
        <div>
            {/* The add category input datalist this is the list only */}
            <datalist id="category">
                <option value="Education" />
                <option value="Environment" />
                <option value="Disaster" />
                <option value="Development" />
            </datalist>
            {/* The add category input... The actual input not the list */}
            <label>
                <p>Add Category</p>
                {/* The id in this list has to match the category list's id */}
                <input 
                    list="category" 
                    name="category" 
                    placeholder="Select category" 
                    style={{ borderRadius:5 }} 
                    onChange={ props.handleChange } 
                    id='spinner' 
                />
                <IoIosAddCircle size='1.5em' id='addicon' />
            </label>
        </div>
    )
}

export default CategoryInput
