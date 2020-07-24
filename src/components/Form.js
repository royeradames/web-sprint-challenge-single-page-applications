import React from 'react';

export default function Form({ values, inputChange, checkboxChange, submit, disabled, errors }) {
    //event handlers
    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    const onCheckboxChange = e => {
        const { name, checked } = e.target
        checkboxChange(name, checked)
    }

    const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value)
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            {/* First Name */}
            <label>First name&nbsp;
                <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                />
            </label>
            {/* Last Name */}
            <label>Last name&nbsp;
                <input
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                />
            </label>

            {/* Drop Down menu */}
            
            <label>Size
                <select
                    onChange={onInputChange}
                    value={values.size}
                    name='size'
                >
                    <option disabled value=''>- Select an option -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            {/* Checklist */}
            <h4>Toppings</h4>
            <label> Pepperoni
                <input type='checkbox' name='pepperoni' checked={values.pepperoni === true} onChange={onCheckboxChange}></input>
            </label>
            <label>Hawaiian
                <input type='checkbox' name='hawaiian' checked={values.hawaiian === true} onChange={onCheckboxChange}></input>
            </label>
            <label>Meatlovers
                <input type='checkbox' name='meatlovers' checked={values.meatlovers === true} onChange={onCheckboxChange}></input>
            </label>
            <label>SausageKale
                <input type='checkbox' name='sausageKale' checked={values.sausageKale === true} onChange={onCheckboxChange}></input>
            </label>

            {/* special Instruction */}
            <label>
                Special instructions
                <input type='textarea' name='' />
            </label>
            {/* A Submit button to send our form data to the server */}
            <button disabled={disabled} className='btn btn-disabled'>Add order</button>

            {/* Display errors */}
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.sizes}</div>
            </div>
        </form>
    )
}