import React, { useState, useEffect } from "react";

export default function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, [])

  const handleCat = (e) => {
    const {value} = e.target
    props.onChange(value);
  }

  return (
    <>
      <label htmlFor="category" className="form-item">Category : </label>
      <select id="category" className="form-item" onChange={handleCat}>
        {categories.map((cat) => {
          return (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </>
  );
}