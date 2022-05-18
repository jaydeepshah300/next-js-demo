import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/EventList";
import fs from "fs";
import path from "path";

const HomePage = (props) => {
  // const featureEvents = getFeaturedEvents();
  const { products } = props;
  /*const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/dummy-backend.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);*/

  return (
    <div>
      {/* <h1>HomePage</h1> */}
      {/* <EventList items={featureEvents} /> */}
      {/* <ul>
        <li>
          <Link href={`/portfolio`}>Portfolio</Link>
        </li>
        <li>
          <Link href={`/clients`}>Clients</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
      </ul> */}
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  console.log("Re-Generating.......");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
