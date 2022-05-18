import { useState, useEffect } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);

  //   const { data, error } = useSWR(
  //     "https://nextjs-demo-17f69-default-rtdb.firebaseio.com/sales.json"
  //   );
  useSWR(
    "https://nextjs-demo-17f69-default-rtdb.firebaseio.com/sales.json",
    (url) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const transformedSales = [];
          for (const key in data) {
            transformedSales.push({
              id: key,
              username: data[key].username,
              volume: data[key].volume,
            });
          }
          setSales(transformedSales);
          setIsLoading(false);
        })
  );

  //   useEffect(() => {
  //     if (data) {
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     }
  //   }, [data]);
  //   console.log(`data`, data);
  /*useEffect(() => {
    setIsLoading(true);

    fetch("https://nextjs-demo-17f69-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);*/

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

  if (!sales) {
    return <div>Loading...</div>;
  }
  //   if (error) {
  //     return <div>Error in fetching data</div>;
  //   }

  //   if (!data || !sales) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <ul>
      {sales.map((item) => (
        <li key={item.id}>{`${item.username} - ${item.volume}`}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-demo-17f69-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}

export default LastSalesPage;
