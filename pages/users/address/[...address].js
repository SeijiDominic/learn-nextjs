export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map(u => {
    const a = u.address;
    // console.log(a)
    return {
      params: { address: [a.city, a.street] }
    }
  });

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const users = data.filter(u => {
    const a = u.address;
    const pa = context.params.address;
    return a.city === pa[0] && a.street === pa[1];
  });

  return {
    props: { users: users }
  }
}


const Address = ({ users }) => {
  return (
    <>
      {users.map(u => (
        <div key={u.id}>
          <h1>{u.name}</h1>
          <p>{u.email}</p>
          <p>{u.address.city}</p>
        </div>
      ))}
    </>
  );
}
 
export default Address;