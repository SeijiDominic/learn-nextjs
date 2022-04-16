import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 3000);
  // }, []);

  const debounceCounter = (callback) => {
    let timerID;
    return () => {
      clearTimeout(timerID);
      setTimeout(() => {
        setCountdown(c => {
          if (c === 0) callback();
          if (c > 0) return c - 1;
          return c;
        });
      }, 1000);
      
    }
  }

  useEffect(() => {
    return debounceCounter(() => {
      // router.push('/');
    })
  }, [countdown]);

  return (
    <div className='not-found'>
      <h1>Oopssie!</h1>
      <h2>That page could not be found.</h2>
      <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
      <p>To be redirected in {countdown}...</p>
    </div>
  );
}
 
export default NotFound;