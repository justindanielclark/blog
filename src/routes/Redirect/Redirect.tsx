import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Redirect() {
  const timer = useRef<number>();
  const navigate = useNavigate();
  useEffect(() => {
    timer.current = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <p>Unfortunately, there isn't a page at this URL.</p>
      <p>Redirecting you back to the homepage in 5 seconds...</p>
    </>
  );
}

export default Redirect;
