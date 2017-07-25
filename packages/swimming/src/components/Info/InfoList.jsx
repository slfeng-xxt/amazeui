import React, { PropTypes } from 'react';
import style from './InfoList.less';
import { Link } from 'dva/router';

const InfoList = ({ ...items }) => {
  console.log({...items});
  let { dataList } = { ...items } || [];
  if (!dataList) {
    dataList = [];
  }
  console.log(dataList);
  return (
    <div>
      {
        dataList.map((ele, index) => (
          <Link to='news' style={{color: '#333'}}>
          <div className={style.item} key={ele.id}>
            <figure>
              <img src={ele.imageUrl} alt=""/>
            </figure>
            <section className={style.content}>
              <header>
                <h4 className={style.title}>{ele.title}</h4>
                <p className={style.time}>{ele.time}</p>
              </header>
              <article>
                <span className={style.infoTitle}>{ele.contentTitle}</span>
                <span wrap="false" className={style.infoContent}>{ele.content.length > 25 ? `${ele.content.slice(0,25)}...` : ele.content}</span>
              </article>
            </section>
          </div>
          </Link>
        ))
      }
    </div>
  )
};

export default InfoList;
