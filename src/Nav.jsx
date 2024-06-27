import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [cartitems, setcartitems] = useState([])
  const [cartcount, setcartcount] = useState(0)
  const [productitems, setproductitems] = useState([
    {
      pr_id: 1,
      pr_name: 'Perfume',
      pr_price: '$40.00',
      pr_old_price: '$60.00',
      pr_image: 'https://i.pinimg.com/originals/99/b0/e8/99b0e821a460b164d1c28ecc6f0d6068.jpg',
      pr_rating: 5,
      pr_buystatus: 'Add to Cart'
    },
    {
      pr_id: 2,
      pr_name: 'Panda Bear',
      pr_price: '$10.00',
      pr_image: 'https://images-cdn.ubuy.co.in/635b068b980d746ec8044db3-cute-scarf-panda-bear-plush-giant-panda.jpg',
      pr_rating: 3,
      pr_buystatus: 'Add to Cart'
    },
    {
      pr_id: 3,
      pr_name: 'Hair dryer',
      pr_price: '$100.00',
      pr_old_price: '$160.00',
      pr_image: 'https://www.pure-beauty.co.uk/productimages/gallery/display/SS-image-2022-05-06-6275340d3981d.jpg',
      pr_rating: 4,
      pr_buystatus: 'Add to Cart'
    }, {
      pr_id: 4,
      pr_name: 'Maxi dress',
      pr_price: '$15.00',
      pr_image: 'https://media.wforwoman.com/product/23AUW19749-122177/665/23AUW19749-122177_1.JPG?format=webp&w=320&dpr=2.6',
      pr_rating: 5,
      pr_buystatus: 'Add to Cart'
    },
    {
      pr_id: 5,
      pr_name: 'Dell Laptop',
      pr_price: '$715.00',
      pr_old_price: '$860.00',
      pr_image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/general/notebook-inspiron-14-7430-silver-right-facing.png?fmt=png-alpha&wid=800&hei=620',
      pr_rating: 4,
      pr_buystatus: 'Add to Cart'
    },
    {

      pr_id: 6,
      pr_name: 'Bouquet',
      pr_price: '$15.00',
      pr_image: 'https://assets.flowersnfruits.com/uploads/product-pics/1632393015_115.jpg',
      pr_rating: 4,
      pr_buystatus: 'Add to Cart'

    },
    {
      pr_id: 7,
      pr_name: 'Wallet',
      pr_price: '$65.00',
      pr_image: 'https://i.etsystatic.com/20811748/r/il/77eaff/2533623204/il_fullxfull.2533623204_ez18.jpg',
      pr_rating: 4,
      pr_buystatus: 'Add to Cart'

    },
    {
      pr_id: 8,
      pr_name: 'Samsung OLED TV',
      pr_price: '$900.00',
      pr_old_price: '$1360.00',
      pr_image: 'https://th.bing.com/th/id/OIP.rlkhsOJU1DNDiqo3xeZt2wHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      pr_rating: 5,
      pr_buystatus: 'Add to Cart'
    }
  ])

  const updatecart = (id) => {
    const updatedCartItems = productitems.map(item => {
      if (item.pr_id === id) {
        console.log('inside if')
        return { ...item, pr_buystatus: item.pr_buystatus === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart' };
      }
      return item;


    });
    setproductitems(updatedCartItems);
    const addedItems = updatedCartItems.filter(item => item.pr_buystatus === 'Remove from Cart');
    setcartitems(addedItems);
    setcartcount(addedItems.length);
  }





  const stars = []
  return (
    <>

      <nav>
        <span className='brand'>Shoppink</span>
        <span className='Home'>Home</span>
        <span className='About'>About</span>
        <span className='Shop'>Shop</span>
        <button type="button" className='Cart'>
        <div className="carticon"><FontAwesomeIcon icon={faShoppingCart} /> </div>
        Cart
          <div className='cartcount'>{cartcount}</div>
        </button>
      </nav>
      <section className='Motto'>
        <div className='Brand-idea'>Shoppink is Fun</div>
        <div>Shop more Save more</div>
      </section>
      <section className='Products'>
        {
          productitems.map((item, ind) => {
            return (
              <div key={ind} className='product-card' id={item.pr_id}>
                <div className='imagesource'>
                  <img src={item.pr_image} alt="image not available" id={item.pr_id} />

                </div>
                <div className='product-name' id={item.pr_id}>{item.pr_name}</div>
                <div className='product-rating' id={item.pr_id}>
                  {(() => {
                    const stars = [];
                    for (let i = 0; i < item.pr_rating; i++) {
                      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />);
                    }
                    return stars;
                  })()}
                </div>
                <div className='product-price' id={item.pr_id}>
                  {
                    item.pr_old_price ? (<div><span style={{ textDecoration: 'line-through', color: 'grey', fontSize: 20, fontWeight: 'bolder' }}>{item.pr_old_price}</span><span style={{ color: 'black', fontSize: 20, fontWeight: 'bolder' }}>{item.pr_price}</span></div>) :
                      (<div style={{ color: 'black', fontSize: 20, fontWeight: 'bolder' }} className='new_price'>{item.pr_price} </div>)
                  }

                  <button type="button" className='buy' id={item.pr_id} onClick={() => updatecart(item.pr_id)}>{item.pr_buystatus}</button>



                </div>

              </div>
            )
          })
        }
      </section>




    </>
  )
}

export default Nav