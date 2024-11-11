export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/dashboard/create",
      permanent: true,
    },
  };
}

const Home = () => {
  return null;
};

export default Home;
