import Link from "next/link";
import { useRouter } from "next/router";

const ClientsPage = () => {
  const router = useRouter();
  const clients = [
    {
      id: "jaydeep",
      name: "Jaydeep Shah",
    },
    {
      id: "hiren",
      name: "Hiren Sheth",
    },
  ];

  const loadProjectHandler = () => {
    router.push("/clients/max/projectA");
  };
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((item, index) => (
          <li key={index}>
            {/* <Link href={`/clients/${item.id}`}>{item.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={loadProjectHandler}>
        Load Project A
      </button>
    </div>
  );
};

export default ClientsPage;
