import React, { useState } from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
/**
 * If want label above the input box, pass `display: table-caption;` to class
 * `InputLabel`.
 *  Textarea size would expand with its container.
 */

const InputTextarea = ({
  className,
  fieldLabel,
  fieldName,
  placeholder,
  required,
  error,
  maxLength,
  inputCount,
}) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
    setCount(event.target.value.length);
  };
  const inputFormClass = classes('InputForm', className);
  const inputBoxClass = classes('InputBox', { 'InputBox--error': error });
  return (
    <label htmlFor={fieldName} className={inputFormClass}>
      <span className="InputLabel">
        {fieldLabel}
        {required && <span className="InputRequest">*</span>}
      </span>
      <textarea
        className={inputBoxClass}
        name={fieldName}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
      />
      {(inputCount || error) && (
        <p className="InputMessage" align="bottom">
          {error && (
            <span className="text-red">
              {error}
            </span>
          )}
          {inputCount && (
            <span className="text-grey pl-8">
              {count}
              {maxLength && (
                <span>
                  /
                  {maxLength}
                </span>
              )}
            </span>
          )}
        </p>
      )}

    </label>
  );
};

InputTextarea.propTypes = {
  /** Any additional classes to be applied to input textarea field */
  className: propTypes.string,
  /** The label for the input textarea field */
  fieldLabel: propTypes.string,
  /** The field name for the input textarea field */
  fieldName: propTypes.string,
  /** The placeholder for the input textarea field */
  placeholder: propTypes.string,
  /** The max text length for the input textarea field */
  maxLength: propTypes.number,
  /** If to count the characters of input (default as false) */
  inputCount: propTypes.bool,
  /** If the field is required (default as false) */
  required: propTypes.bool,
  /** Display as error message */
  error: propTypes.string,
};

InputTextarea.defaultProps = {
  className: null,
  fieldLabel: null,
  fieldName: null,
  placeholder: null,
  required: false,
  inputCount: false,
  error: null,
  maxLength: null,
};

export default InputTextarea;
