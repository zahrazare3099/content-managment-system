export async function getServerSideProps() {
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
