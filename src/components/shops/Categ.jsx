import React from 'react'
import './Style.css';

const Categ = () => {
  const data = [
    {
      cateImg: "https://w7.pngwing.com/pngs/724/759/png-transparent-apple-logo-apple-computer-icons-apple-logo-heart-computer-logo-thumbnail.png",
      cateName: "Apple",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label-thumbnail.png",
      cateName: "Samasung",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/372/107/png-transparent-oppo-digital-oppo-find-x-oppo-f7-bbk-electronics-oppo-f1s-logo-oppo-text-logo-number-thumbnail.png",
      cateName: "Oppo",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/604/428/png-transparent-vivo-logo-vivo-logo-smartphone-branding-blue-angle-electronics-thumbnail.png",
      cateName: "Vivo",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/122/182/png-transparent-xiaomi-logo-xiaomi-mi-a1-smartphone-internet-business-smartphone-angle-electronics-text-thumbnail.png",
      cateName: "Redmi",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/1012/508/png-transparent-sony-logo-sony-television-text-trademark-thumbnail.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {
          data.map((value,index) => {
            return (
              <>
                <div className='box f_flex' key={index}>
                  <img src={value.cateImg} alt='img'/>          
                  <span>{value.cateName}</span>
                </div>
              </>
            )
          })
        }
        
      </div>
    </>
  )
}

export default Categ