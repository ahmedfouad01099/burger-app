import React from 'react';
import classes from './Input.css';

const Input = (props) => {

    let inputElemet = null, validationError = '';
    const inputClasses = [classes.InputElement]

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError=<p>Please enter a valid value!</p>
    }
    // console.log(props.elementConfig);
    switch (props.elementType) {
        case ('input'):
            inputElemet = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}  onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElemet = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}  onChange={props.changed} />;
            break;
        case ('select'):
            inputElemet = <select
                className={inputClasses.join(' ')}
                value={props.value} onChange={props.changed} >
                {props.elementConfig.options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    )
                })}
            </select>;
            break;
        default:
            inputElemet = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}  onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElemet}
            {validationError}
        </div>
    )
}

export default Input;
