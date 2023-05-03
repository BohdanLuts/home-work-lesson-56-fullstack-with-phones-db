import * as yup from 'yup';

const COMPANY_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(64)
  .matches(/^[a-zA-Z0-9\s]*$/)
  .required();

export const PHONE_VALIDATION_SCHEMA = yup.object({
  model: COMPANY_VALIDATION_SCHEMA,
  brand: COMPANY_VALIDATION_SCHEMA,
  year: yup
    .string()
    .matches(/^\d{4}$/, 'Please enter valid year. Example: 2019')
    .required(),
  ram: yup
    .string()
    .matches(/^\d{2,5}$/, 'Please enter valid RAM. Example: 256')
    .required(),
  processor: COMPANY_VALIDATION_SCHEMA,
  screenDiagonal: yup
    .string()
    .matches(/^\d+(.\d{1,2})?$/, 'Please enter diagonal. Example: 5 or 5.0')
    .required(),
  hasNfc: yup.boolean().required(),
});
