import React from 'react'
import products from '@/app/utils/mock';
import Image from 'next/image';
import Link from 'next/link';
 const AllProducts = () => {
  function allData(data:any)
  {
    return(
<div key={data.name} className='eachCard'>
  <Link href={`/products/${data.slug}`}>
    <Image src={data.image} width={270} height={270} alt={data.name}/>
    <h1 className='cardName'>{data.name}</h1>
    <h3 className='clothType'>{data.cloth_Type}</h3>
    <p className='priceCard'>{data.price}</p>
    </Link>
  </div>
    )
  }
  return (
    <div className='productsMain'>
      <div className='content'>
      <div className='productCards'>
      {products.map(allData)}
      </div>
      </div>
    </div>
  )
}
export default AllProducts;