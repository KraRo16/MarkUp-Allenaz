import { React, useState } from 'react';
import style from './DefaultFunctions.module.css';
import { Navbar } from 'components/Layout/Navbar/Navbar';
import { BiRename } from 'react-icons/bi';
import { CiSaveDown2 } from 'react-icons/ci';

export const DefaultFunctions = () => {
  const [newName, setNewName] = useState(""); // state для хранения нового имени кнопки
  const [buttons, setButtons] = useState([
    { name: "DEFAULT 1", isActive: false },
    { name: "DEFAULT 2", isActive: false },
    { name: "DEFAULT 3", isActive: false },
    { name: "DEFAULT 4", isActive: false },
    { name: "DEFAULT 5", isActive: false },
    { name: "DEFAULT 6", isActive: false },
  ]); // массив объектов, каждый объект содержит имя кнопки и ее состояние

  const handleRename = (index) => {
    const updatedButtons = [...buttons]; // создаем копию массива кнопок
    updatedButtons[index].name = newName; // обновляем имя нужной кнопки
    updatedButtons[index].isActive = false; // сбрасываем состояние кнопки после изменения имени
    setButtons(updatedButtons); // обновляем состояние кнопок
    setNewName(""); // сбрасываем новое имя после обновления
  };

  return (
    <div className={style.default_section}>
      <Navbar />
      <div className={style.default_blur}>
        <h2 className={style.default_title}>Default Function</h2>
        <div className={style.default_container}>
          <ul className={style.default_list}>
            <li className={style.default_list_item}>
              <p className={style.default_list_text}>Axis 1</p>
              <span className={style.default_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.default_list_item}>
              <p className={style.default_list_text}>Axis 2</p>
              <span className={style.default_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.default_list_item}>
              <p className={style.default_list_text}>Axis 3</p>
              <span className={style.default_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.default_list_item}>
              <p className={style.default_list_text}>Axis 4</p>
              <span className={style.default_list_value} type="number">
                20
              </span>
            </li>
          </ul>
           <div className={style.default_btn_container}>
      {buttons.map((button, index) => (
        <div key={index} className={style.default_form_rename}>
          <button className={style.default_form_btn}>
            {button.isActive ? (
              <input
              className={style.default_btn_input}
              placeholder='Enter a new name'
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              button.name
            )}
          </button>
          {button.isActive ? (
            <button
              className={style.default_btn_save}
              onClick={() => handleRename(index)}
            >
              < CiSaveDown2 size={40} />
            </button>
          ) : (
            <button
              className={style.default_btn_rename}
              onClick={() => {
                const updatedButtons = [...buttons];
                updatedButtons[index].isActive = true;
                setButtons(updatedButtons);
              }}
            >
              <BiRename size={40} />
            </button>
          )}
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};
