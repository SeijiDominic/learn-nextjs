import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

const Ninjas = ({ users }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      <div>
        {users.map((u) => (
        <div key={u.id}>
          <Link href={'/ninjas/' + u.id}>
            <a className={styles.single}>
              <h3>{u.name}</h3>
            </a>
          </Link>
        </div>)
        )}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {props: { users: users }};
}

 
export default Ninjas;