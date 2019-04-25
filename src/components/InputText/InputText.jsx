import React from 'react';
import propTypes from 'prop-types';
import classes from 'classnames';
/**
 * The input field - one line input box with different input types
 * If want label above the input box, pass `display: table-caption;` to class
 * `InputLabel`.
 */
const inputType = [
  'date',
  'datetime-local',
  'month',
  'number',
  'password',
  'search',
  'text',
  'time',
  'week',
];
const InputText = ({
  className,
  fieldLabel,
  fieldName,
  placeholder,
  type,
  prefix,
  suffix,
  required,
  disabled,
  error,
}) => {
  const inputFormClass = classes('InputForm', className);
  const inputBoxClass = classes(
    'InputBox',
    { 'border-red': error },
    { 'border-l-0 rounded-l-none': prefix },
    { 'border-r-0 rounded-r-none': suffix },
    { 'bg-lightGrey': disabled },
  );
  const prefixClass = classes('InputBox--Prefix', { 'border-red': error });
  const suffixClass = classes('InputBox--Suffix', { 'border-red': error });
  return (
    <label htmlFor={fieldName} className={inputFormClass}>
      <span className="InputLabel">
        {fieldLabel}
        {required && <span className="InputRequest">*</span>}
      </span>
      {prefix && <span className={prefixClass}>{prefix}</span>}
      <input
        className={inputBoxClass}
        type={type}
        name={fieldName}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {suffix && <span className={suffixClass}>{suffix}</span>}
      {error && (
        <p className="InputMessage text-red" align="bottom">
          {error}
        </p>
      )}
    </label>
  );
};

InputText.propTypes = {
  /** Any additional classes to be applied to the input box */
  className: propTypes.string,
  /** The label for the input text field */
  fieldLabel: propTypes.string,
  /** The field name for the input text field */
  fieldName: propTypes.string,
  /** The type of the input field */
  type: propTypes.oneOf([null, ...inputType]),
  /** The placeholder for the input text field */
  placeholder: propTypes.string,
  /** If the field is required (default as false) */
  required: propTypes.bool,
  /** If the field is disabled (default as false) */
  disabled: propTypes.bool,
  /** The prefix for the input text field */
  prefix: propTypes.string,
  /** The suffix for the input text field */
  suffix: propTypes.string,
  /** Display as error message */
  error: propTypes.string,
};
InputText.defaultProps = {
  className: null,
  fieldLabel: null,
  fieldName: null,
  type: null,
  placeholder: null,
  prefix: null,
  suffix: null,
  required: false,
  disabled: false,
  error: null,
};

export default InputText;
