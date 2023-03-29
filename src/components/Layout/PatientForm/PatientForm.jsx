import React from 'react';
import styleHome from '../Home/Home.module.css'
import style from './PatientForm.module.css';
import { Navbar } from '../Navbar/Navbar';

export const PatientForm = () => {
  return (
    <section className={style.patient_form_section}>
      <Navbar />
      <div className={styleHome.home_blur}>
        <h2>PATIENT DATA</h2>

        <p>Enter patient data</p>
        <form className={style.patient_form}>
          <div className={style.patient_form_list }>
            <label htmlFor="firstName" className={style.patient_form_label}>
              First Name
              <input
                className={style.patient_form_input}
                name="firstName"
                type="firstName"
                id="firstName"
                placeholder="Name"
              />
            </label>
            <label htmlFor="lastName" className={style.patient_form_label}>
              Last Name
              <input
                className={style.patient_form_input}
                name="lastName"
                type="lastName"
                id="lastName"
                placeholder="Surname"
              />
            </label>
            <label htmlFor="dateOfBirth" className={style.patient_form_label}>
              Date of Birth
              <input
                className={style.patient_form_input}
                name="dateOfBirth"
                type="dateOfBirth"
                id="dateOfBirth"
                placeholder="dd/mm/yyyy"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              />
            </label>
            <label htmlFor="pathology" className={style.patient_form_label}>
              Pathology
              <input
                className={style.patient_form_input}
                name="pathology"
                type="pathology"
                id="pathology"
                placeholder="Pathology"
              />
            </label>
            <label htmlFor="sex" className={style.patient_form_label}>
              Sex
              <input
                className={style.patient_form_input}
                name="sex"
                type="sex"
                id="sex"
                placeholder="Man/Woman"
              />
            </label>
            <label htmlFor="pareticSide" className={style.patient_form_label}>
              Paretic side
              <input
                className={style.patient_form_input}
                name="pareticSide"
                type="pareticSide"
                id="pareticSide"
                placeholder="Left/Right"
              />
            </label>
            <label
              htmlFor="medicalHistory"
              className={style.patient_form_label}
            >
              Medical history
              <input
                className={style.patient_form_input}
                name="medicalHistory"
                type="medicalHistory"
                id="medicalHistory"
                placeholder="Medical history"
              />
            </label>
          </div>
          <div>
            <label htmlFor="sex" className={style.patient_form_label}>
              Sex
              <input
                className={style.patient_form_input}
                name="sex"
                type="sex"
                id="sex"
                placeholder="Man/Woman"
              />
            </label>
            <label htmlFor="pareticSide" className={style.patient_form_label}>
              Paretic side
              <input
                className={style.patient_form_input}
                name="pareticSide"
                type="pareticSide"
                id="pareticSide"
                placeholder="Left/Right"
              />
            </label>
            <label
              htmlFor="medicalHistory"
              className={style.patient_form_label}
            >
              Medical history
              <input
                className={style.patient_form_input}
                name="medicalHistory"
                type="medicalHistory"
                id="medicalHistory"
                placeholder="Medical history"
              />
            </label>
                  </div>
                  <button></button>
        </form>
      </div>
    </section>
  );
};
