import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './PhonesList.module.sass';
import {
  getPhonesThunk,
  deletePhoneThunk,
} from '../../store/slices/phonesSlice';

export const PhonesList = ({ phones, isFetching, error, get, remove }) => {
  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <BeatLoader loading={isFetching} className={styles.beatLoader} />
      {error && <div className={styles.phonesListError}>!!!ERROR!!!</div>}
      <div className={styles.phonesWrapper}>
        <ul className={styles.phonesList}>
          {phones.map(p => (
            <li className={styles.phonesListItem} key={p.id}>
              <button
                className={styles.remove}
                onClick={() => {
                  remove(p.id);
                }}
              >
                <BsFillTrashFill className={styles.removeIcon} />
              </button>
              {JSON.stringify(p)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getPhonesThunk()),
  remove: id => dispatch(deletePhoneThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
