// source: https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/src/utils.js
export const flatMap = (arr, fn) => arr.map(fn).reduce((a, b) => a.concat(b));

/**
 * Takes an object with a shape of {fieldName: arrayOfPossibleValues}
 * and returns an array of objects with all possible combinations
 * of field values
 *
 * eg: passing {foo: [1, 2], bar: ['a', 'b']} will return
 * [
 *  {foo: 1, bar: "a"},
 *  {foo: 1, bar: "b"},
 *  {foo: 2, bar: "a"},
 *  {foo: 2, bar: "b"}
 * ]
 */
export const generateVariantsFor = variationsByField => {
  const fieldNames = Object.keys(variationsByField);

  if (!fieldNames.length) return [{}];

  const combinations = ([fieldName, ...restFieldNames], acc) => {
    const variationsForField = variationsByField[fieldName];

    if (!Array.isArray(variationsForField) || !variationsForField.length) {
      throw new Error(`Please provide a non-empty array of possible values for prop ${fieldName}`);
    }

    const vs = variationsForField.map(fieldValue => ({ ...acc, [fieldName]: fieldValue }));

    if (!restFieldNames.length) {
      return vs;
    }

    return flatMap(vs, newAcc => combinations(restFieldNames, newAcc));
  };

  return combinations(fieldNames, {});
};
