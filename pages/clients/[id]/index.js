import { useRouter } from "next/router";
const OverViewPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Overview Page</h1>
    </div>
  );
};

export default OverViewPage;
