import React, {useEffect, useState} from 'react';
import {wrapper} from "../src/redux/store";
import {getProducts} from "../src/redux/actions/products";
import MainLayout from "../src/components/layouts/MainLayout";
import LeftSideBar from "../src/components/LeftSideBar/LeftSideBar";
import ProductList from "../src/components/ProductList/ProductList";
import Sorting from "../src/components/Sorting/Sorting";
import {useSelector} from "react-redux";
import Loader from "../src/components/Loader/Loader";
import {ButtonWithIcon} from "../src/components/Button/Button";

const Catalog = () => {
  const {products} = useSelector(state => state.products)

  const [sortedProducts, setSortedProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(sortedProducts)
  const [filters, setFilters] = useState({
    material: '',
    size: '',
    price: {
      from: 0,
      to: 1000
    }
  })

  const sortByPrice = (type) => {
    const copyProducts = Object.assign([], products);
    const productsList = copyProducts.sort((a, b) => {
      if (type === 'desc') {
        return a.price > b.price ? 1 : -1
      } else {
        return a.price < b.price ? 1 : -1
      }
    })
    setSortedProducts(productsList)
  }

  const filtersHandler = (filters) => {
    // setFilters(prevState => ({
    //   ...prevState,
    //   filters
    // }))
    console.log(filters)
    // const copyProducts = Object.assign([], products);
    // copyProducts.filter(product => {
    //   if (product.price >= filters.from && product.price <= filters.to) {
    //     return product
    //   }
    // })
    // setFilteredProducts(copyProducts)
  }

  useEffect(() => {
    console.log('sortedProducts', sortedProducts)
  }, [sortedProducts])

  return (
    <MainLayout title="Каталог">
      <div className="catalog">
        <div className="container">
          <div className="row">
            <LeftSideBar filtersHandler={filtersHandler}/>
            <div className="catalog__wrapper">
              <div className="row flex-ai-c">
                <ButtonWithIcon name="Фільтри" icon={"/icons/filter.svg"} btnClass="catalog__filter-btn"/>
                <Sorting sortByPrice={sortByPrice}/>
              </div>
              {
                sortedProducts.length
                  ? <ProductList products={sortedProducts}/>
                  : <Loader/>
              }
            </div>
          </div>
        </div>
      </div>
    </MainLayout>

  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(getProducts());
});


export default Catalog;