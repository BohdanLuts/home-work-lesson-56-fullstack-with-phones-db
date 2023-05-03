import React from 'react';
import PhonesList from '../../components/PhonesList';
import PhoneForm from '../../components/forms/PhoneForm';
import styles from './PhonePage.module.sass';

function PhonePage () {
  return (
    <section>
      <h2 className={styles.header}>Phone Form</h2>
      <PhoneForm />
      <PhonesList />
    </section>
  );
}

export default PhonePage;
