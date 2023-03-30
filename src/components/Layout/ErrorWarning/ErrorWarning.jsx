import React from 'react';
import style from './ErrorWarning.module.css';
import { Navbar } from '../Navbar/Navbar';
import errorWarning from '../../../api/errorWarning.json';

export const ErrorWarning = () => {
  return (
    <div className={style.error_warning_section}>
      <Navbar />
      <div className={style.error_warning_blur}>
        <h2>Error and Warning</h2>
        <div className={style.error_warning_container}>
          <div className={style.error_warning_history}>
            <h3>Error history</h3>
            <table className={style.error_warning_table}>
              <thead className={style.error_warning_table_head}>
                <tr className={style.error_warning_table_head_list}>
                  <td className={style.error_warning_table_head_item}>Date</td>
                  <td className={style.error_warning_table_head_item}>ID</td>
                  <td className={style.error_warning_table_head_item}>
                    Description
                  </td>
                </tr>
              </thead>
              {errorWarning.map(item => (
                <tbody className={style.error_warning_table_body} key={item.id}>
                  <tr className={style.error_warning_table_body_list}>
                    <td className={style.error_warning_table_body_item}>
                      {item.date}
                    </td>
                    <td className={style.error_warning_table_body_item}>
                      {item.id}
                    </td>
                    <td className={style.error_warning_table_body_item}>
                      {item.description}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div>
            <div className={style.error_warning_description}>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore optio ipsum asperiores dicta veniam nulla eius
                doloribus harum aut ipsam? Aut nulla perferendis voluptates
                tempora quis dolor tenetur dolorem obcaecati. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Officiis eum dicta ex
                reiciendis dolores magnam numquam consequuntur dolorem. Expedita
                perferendis assumenda, tempora quod aut error porro fuga nobis
                dolorem iure? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Alias officia expedita voluptates rerum. Eos
                voluptates modi similique iusto totam perspiciatis est doloribus
                hic, explicabo, iste vel ratione. Quos, pariatur culpa.
              </p>
            </div>
            <div className={style.error_warning_description_list}>
              <div className={style.error_warning_description_item}>
                <h3>Causes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi provident distinctio minima beatae voluptatem tempore
                  alias temporibus rerum. Iusto incidunt at expedita veritatis
                  facilis officiis sed porro nobis consequatur perspiciatis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  ad, praesentium saepe nostrum magni atque reiciendis beatae
                  voluptatibus nihil culpa, adipisci eius provident sed,
                  mollitia est fugiat quod repellat dolor? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ea autem, quod praesentium,
                  vel tempore aliquid modi magnam consequuntur sed repudiandae
                  unde vero. Dignissimos, ad blanditiis! Repellendus ipsum
                  veniam minima repudiandae! Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Ipsum illum id minima! Qui
                  architecto, delectus ipsam corporis doloremque, reprehenderit
                  vero harum vel, id dolorem odio voluptate soluta totam odit!
                  Pariatur.
                </p>
              </div>
              <div className={style.error_warning_description_item}>
                <h3>Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  molestias voluptates expedita excepturi consequatur nihil
                  repellat odit dolorum laborum doloribus perspiciatis, quia ab
                  odio necessitatibus dolore praesentium totam reprehenderit
                  quod?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
