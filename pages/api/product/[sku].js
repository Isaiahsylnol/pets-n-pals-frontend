import { useEffect, useState } from "react";

const [products, setProducts] = useState([]);

const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/products`,
      {
        cache: "no-store",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default function handler(req, res) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error setting products:", error);
      }
    };

    fetchData();
  }, []);
  let product = products.find((o) => o.sku === req.query.sku);
  res.status(200).json({
    product,
  });
}
