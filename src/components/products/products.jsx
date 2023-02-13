import React from 'react'
import './products.css'

const ProductsDetail = [
  {
    image:"./images/products/rice.jpg",
    alt:"Rice",
    title:"Rice",
    descrition:"Rice is a staple food for over half the world's population."
  },
  {
    image:"./images/products/barley.jpg",
    alt:"Barley",
    title:"Barley",
    descrition:"Barley is a cereal grain used for food, beverages, and animal feed"
  },
  {
    image:"./images/products/maize.jpg",
    alt:"Maize",
    title:"Maize",
    descrition:"Maize is a tall annual cereal plant that produces edible kernels"
  },
  {
    image:"./images/products/chickPeas.jpg",
    alt:"Chick peas",
    title:"Chick peas",
    descrition:"Chickpeas are edible legume seeds used in various culinary applications."
  },
  {
    image:"./images/products/quinoaSeed.jpg",
    alt:"Quinoa peas",
    title:"Quinoa peas",
    descrition:"Quinoa seeds are small, protein-rich grains with a nutty flavor."
  },
  {
    image:"./images/products/asafoetidaSeeds.jpeg",
    alt:"Asafoetida seeds",
    title:"Asafoetida seeds",
    descrition:"Asafoetida seeds are pungent, resinous spices used in cooking and medicine."
  },
  {
    image:"./images/products/cuminSeeds.jpeg",
    alt:"Cumin seeds",
    title:"Cumin seeds",
    descrition:"Cumin seeds are aromatic, flavorful spices used in cooking and medicine."
  },
  {
    image:"./images/products/psylliumHusk.jpg",
    alt:"Psyllium husk",
    title:"Psyllium husk",
    descrition:"Psyllium husk is a dietary fiber used to promote bowel regularity."
  },
]


const Products = () => {
  return (
    <div>

      <div className='mb-5 container'>
        <h1 className='text-center mt-3 mb-4'>Products We Deal In</h1>
        <div className='row justify-content-center'>
        {
          ProductsDetail.map((items, index) => (
              <div>
            <div className='col-lg-3 col-md-4 col-sm-6  my-2 mb-3 ' >
                <div className="card">
                  <img src={items.image} className="card-img"/>
                  <div className="card-info">
                    <p className="text-title">{items.title}</p>
                    <p className="text-body">{items.descrition}</p>
                  </div>
                </div>
              </div>
            </div>
          ))

        }
        </div>
      </div>
    </div>
  )
}

export default Products;