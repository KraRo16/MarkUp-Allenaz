import React from 'react';
import style from './Home.module.css';
import { Navbar } from '../Navbar/Navbar';

export const Home = () => {
  return (

    <section className={style.home_section}>
      <Navbar />
      <div className={style.home_blur}>
        <p>HELLo</p>
        <div className={style.home_patient}>
          <div className={style.home_patient_crud}>
            <p className={style.home_patient_crud_title}>CRUD Patient</p>
            <ul>
              <li className={style.home_patient_crud_item}>
                <button className={style.home_patient_crud_btn}>
                  Add New Patient
                </button>
              </li>
              <li className={style.home_patient_crud_item}>
                <button className={style.home_patient_crud_btn}>
                  Edit Patient
                </button>
              </li>
              <li className={style.home_patient_crud_item}>
                <button className={style.home_patient_crud_btn}>
                  Remove Patient
                </button>
              </li>
            </ul>
          </div>

            <table className={style.home_patient_table}>
              <thead className={style.home_patient_table_head}>
                <tr className={style.home_patient_table_head_list}>
                  <td className={style.home_patient_table_head_item}>Code User</td>
                  <td className={style.home_patient_table_head_item}>
                    First Name patient
                  </td>
                  <td className={style.home_patient_table_head_item}>
                    Last Name patient
                  </td>
                  <td className={style.home_patient_table_head_item}>Date of birth</td>
                  <td className={style.home_patient_table_head_item}>Pathology</td>
                  <td className={style.home_patient_table_head_item}>Sex</td>
                  <td className={style.home_patient_table_head_item}>Paretic side</td>
                  <td className={style.home_patient_table_head_item}>Medical history</td>
                </tr>
              </thead>
              <tbody className={style.home_patient_table_body}>
                <tr className={style.home_patient_table_body_list}>
                  <td className={style.home_patient_table_body_item}>1</td>
                  <td className={style.home_patient_table_body_item}>John </td>
                  <td className={style.home_patient_table_body_item}>Wick </td>
                  <td className={style.home_patient_table_body_item}>13/06/1982</td>
                  <td className={style.home_patient_table_body_item}>...</td>
                  <td className={style.home_patient_table_body_item}>Man </td>
                  <td className={style.home_patient_table_body_item}>... </td>
                  <td className={style.home_patient_table_body_item}>... </td>
                </tr>
                <tr className={style.home_patient_table_body_list}>
                  <td className={style.home_patient_table_body_item}>2</td>
                  <td className={style.home_patient_table_body_item}>Rocky </td>
                  <td className={style.home_patient_table_body_item}>Balboa</td>
                  <td className={style.home_patient_table_body_item}>07/11/1967 </td>
                  <td className={style.home_patient_table_body_item}>...</td>
                  <td className={style.home_patient_table_body_item}>Man</td>
                  <td className={style.home_patient_table_body_item}>...</td>
                  <td className={style.home_patient_table_body_item}>...</td>
                </tr>
              </tbody>
            </table>

        </div>
      </div>
    </section>
  );
};
