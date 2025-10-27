import { useEffect, useState } from "react";
import { productApi, allProductsApi } from "../services/testApi.js";

function TestApi() {
  const [product, setProduct] = useState([]); // State to hold API data
  const [allProducts, setAllProducts] = useState([]); // State to hold all products data

  useEffect(() => {
    // Gọi Api khi component mount
    const fetchData = async () => {
      try {
        const result = await productApi(); // productApi trả về response.data
        setProduct(result.product); // API trả về một đối tượng với mảng 'product'
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //all api products
  useEffect(() => {
    // Gọi Api khi component mount
    const fetchAllData = async () => {
      try {
        const result = await allProductsApi(); // productApi trả về response.data
        setAllProducts(result.products); // API trả về một đối tượng với mảng 'products'
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <>
      <h1 className="text-3xl bg-red-500 font-bold underline">Test API!</h1>
      {product.length > 0 ? (
        product.map((item, index) => (
          <div
            key={index}
            className="p-4 mb-3 border rounded-lg shadow bg-white"
          >
            <h2 className="text-xl font-semibold">{item.nameProduct}</h2>
            <p>Hãng: {item.brand}</p>
            <p>Giá mới: {item.newPrice.toLocaleString()} VND</p>
            <p>Giá cũ: {item.oldPrice.toLocaleString()} VND</p>
            <p>Khuyến mãi: {item.promotion}%</p>
            <p>Dung lượng: {item.shortDescription}</p>
            <p>Tình trạng: {item.status}</p>
          </div>
        ))
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
      {/* Test API All PRODUCTS  */}
      <h1 className="text-3xl bg-red-500 font-bold underline">
        Test API All PRODUCTS!
      </h1>
      {allProducts.length > 0 ? (
        allProducts.map((item) => (
          <div
            key={item.idProduct}
            className="p-4 mb-3 border rounded-lg shadow bg-white"
          >
            <div>
              <p>Hãng: {item.brand}</p>
              <p>Giá mới: {item.newPrice.toLocaleString()} VND</p>
              <p>Giá cũ: {item.oldPrice.toLocaleString()} VND</p>
              <p>Khuyến mãi: {item.promotion}%</p>
              <p>Dung lượng: {item.shortDescription}</p>
              <p>Tình trạng: {item.status}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </>
  );
}

export default TestApi;
