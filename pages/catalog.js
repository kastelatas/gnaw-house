import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {wrapper} from "../src/redux/store";
import {getProducts} from "../src/redux/actions/products";
import MainLayout from "../src/components/layouts/MainLayout";
import LeftSideBar from "../src/components/LeftSideBar/LeftSideBar";
import ProductList from "../src/components/ProductList/ProductList";
import Sorting from "../src/components/Sorting/Sorting";
import Loader from "../src/components/Loader/Loader";
import {ButtonWithIcon} from "../src/components/Button/Button";

const Catalog = () => {
  const {products} = useSelector(state => state.products)

  const [sortedProducts, setSortedProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(sortedProducts)
  const [filterList, setFilterList] = useState({
    colors: [],
    size: [],
    price: {
      from: 0,
      to: 1000
    }
  })

  const sortByPrice = (type) => {
    const copyProducts = Object.assign([], products);
    const productsList = copyProducts.sort((a, b) => {
      if (type === 'desc') {
        return a.prices[0].price > b.prices[0].price ? 1 : -1
      } else {
        return a.prices[0].price < b.prices[0].price ? 1 : -1
      }
    })
    setSortedProducts(productsList)
  }

  const filtersHandler = (filters) => {
    switch (Object.keys(filters)[0]) {
      case 'colors':
        setFilterList(prevState => {
          return {
            ...prevState,
            colors: [...prevState.colors, filters.colors]
          }
        })
        break;
      case 'size':
        setFilterList(prevState => {
          return {
            ...prevState,
            size: [...prevState.size, filters.size]
          }
        })
        break;
      default:
        break;
    }

  }

  const filteredProductsHandler = () => {
    const copySortedProducts = Object.assign([], sortedProducts);
    console.log('copySortedProducts', copySortedProducts)
    const productsList = copySortedProducts.filter((product) => {
      if (filterList.colors.length) {
        return filterList.colors.map(color => {
          return product.colors.map(productColor => {
            if (productColor.color === color) {
              console.log(11111, productColor.color, color )
              return product
            }
          })
        })
      }
      if (filterList.size.length) {
        return filterList.size.map(size => {
          return product.size.map(productSize => {
            if (productSize.size === size) {
              console.log(11111, product)
              return product
            }
          })
        })
      }
    })
    console.log('productsList', productsList)
  }

  useEffect(() => {
    filteredProductsHandler()
  }, [filterList])

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