import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  query,
} from "firebase/firestore";
import { fireDb } from "../../Firebase/Firebase";

function MyState(props) {
  // Product state
  const [products, setProducts] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // All products from Firestore
  const [allProducts, setAllProducts] = useState([]);

  // Search state
  const [Search, setSearch] = useState("");

  // Add Product
  const addProduct = async () => {
    if (!products.name || !products.price || !products.image || !products.category) {
      return alert("All fields are required");
    }

    try {
      const ProductRef = collection(fireDb, "Product");
      await addDoc(ProductRef, {
        ...products,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      alert("Product added successfully");
      setProducts({
        name: "",
        price: "",
        image: "",
        category: "",
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch Products from Firestore
  useEffect(() => {
    const q = query(collection(fireDb, "Product"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productArray = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          date: data.date?.toDate
            ? data.date.toDate().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            : data.date, // Keep string if already
        };
      });
      console.log("Firestore Products:", productArray);
      setAllProducts(productArray);
    });

    return () => unsubscribe();
  }, []);

  // Edit product
  const editProducthandle = (item) => {
    setProducts(item);
  };

  const editProducts = async () => {
    try {
      if (!products.id) return;
      await setDoc(doc(fireDb, "Product", products.id), {
        ...products,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      alert("Product updated successfully");
      setProducts({
        name: "",
        price: "",
        image: "",
        category: "",
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Delete product
  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDb, "Product", item.id));
      alert("Product deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        editProducts,
        editProducthandle,
        deleteProduct,
        allProducts,
        Search,
        setSearch,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
