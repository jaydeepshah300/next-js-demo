const UserIdPage = (props) => {
  return <h1>{props.userId}</h1>;
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  console.log("Server Side Code");
  return {
    props: {
      userId: `User Id - ${userId}`,
    },
  };
}
