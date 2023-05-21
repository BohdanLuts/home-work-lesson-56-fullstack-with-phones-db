import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { PHONE_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import styles from './PhoneForm.module.sass';
import { createPhoneThunk } from '../../../store/slices/phonesSlice';

function PhoneForm ({ create }) {
  const initialValues = {
    model: '',
    brand: '',
    year: '',
    ram: '',
    processor: '',
    screenDiagonal: '',
    hasNfc: false,
  };

  const handleSubmit = (values, formikBag) => {
    create(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PHONE_VALIDATION_SCHEMA}
    >
      {() => (
        <Form className={styles.form}>
          <Input
            label='Model:'
            type='text'
            name='model'
            placeholder='Enter model'
            autoFocus
            classes={classes}
          />
          <Input
            label='Brand:'
            type='text'
            name='brand'
            placeholder='Enter brand'
            classes={classes}
          />
          <Input
            label='Year:'
            type='number'
            name='year'
            placeholder='Enter year of production'
            classes={classes}
          />
          <Input
            label='Ram:'
            type='number'
            name='ram'
            placeholder='Enter how much RAM'
            classes={classes}
          />
          <Input
            label='Processor:'
            type='text'
            name='processor'
            placeholder='Enter processor'
            classes={classes}
          />
          <Input
            label='Screen Diagonal:'
            type='number'
            name='screenDiagonal'
            placeholder='Enter Screen Diagonal in inch'
            classes={classes}
          />
          <Input
            label='NFC:'
            type='checkbox'
            name='hasNfc'
            placeholder='Phone has NFC'
            value={true}
            classes={classes}
          />

          <button type='submit' className={styles.save}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createPhoneThunk(values)),
});

export default connect(null, mapDispatchToProps)(PhoneForm);
