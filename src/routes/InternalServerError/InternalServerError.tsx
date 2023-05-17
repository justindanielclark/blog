import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

function InternalServerError() {
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
      <p>It Appears That There Has Been An Internal Server Error With The Backend...</p>
      <p>Redirecting You Back To The Homepage In 5 Seconds...</p>
    </>
  );
}

export default InternalServerError;
