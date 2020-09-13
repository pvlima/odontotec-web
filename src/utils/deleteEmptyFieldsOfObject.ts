/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface ObjectType {
  [key: string]: string;
}

export default function deleteEmptyFieldsOfObject(object: any): ObjectType {
  const filledKeys = Object.keys(object).filter(key => !!object[key]);
  const result = {} as ObjectType;

  filledKeys.forEach(key => {
    result[key] = object[key];
  });

  return result;
}
