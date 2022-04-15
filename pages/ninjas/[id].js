export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
  const paths = data.map(u => {
    return {
      params: { id: u.id.toString() }
    }
  });

  return {
    paths: paths,
    fallback: false
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await res.json();

  return {props: { user: user }};
}

const Details = ({ user }) => {
  return (
    <div>
      <h1>Details</h1>
      {
        <>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </>
      }

    </div>
  );
}
 
export default Details;