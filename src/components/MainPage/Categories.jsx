import React from 'react'
import '.././../App.css';

const Categories = () => {    
  const data = [
    {
      cateImg: "https://m.media-amazon.com/images/I/717Qr4ImV+L._UX679_.jpg",
      cateName: "Fashion",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/71WV-RzNp7L._SX522_.jpg",
      cateName: "Electronic",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/41BA5hAJtPL._SX300_SY300_QL70_FMwebp_.jpg",
      cateName: "Cars",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/610ZEp9J2vL._SY300_SX300_QL70_FMwebp_.jpg",
      cateName: "Home & Garden",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/611IFLJn07L._AC_UL480_FMwebp_QL65_.jpg",
      cateName: "Gifts",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/41Q-c8V3AnL._AC_UL480_FMwebp_QL65_.jpg",
      cateName: "Music",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/61eOv+UzlxL._AC_UL480_FMwebp_QL65_.jpg",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/61q06cuKQ7L._AC_UL480_FMwebp_QL65_.jpg",
      cateName: "Pets",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/51ozl2zSoYL._AC_UL480_FMwebp_QL65_.jpg",
      cateName: "Baby Toys",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/71W1XCVDlML._AC_UL480_FMwebp_QL65_.jpg",
      cateName: "Groceries",
    },
    {
      cateImg: "https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY327_FMwebp_QL65_.jpg",
      cateName: "Books",
    },
  ]


  return (
    <>
            <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default Categories