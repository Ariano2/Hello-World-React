import { useRouteError } from 'react-router-dom';
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops Something went wrong</h1>
      <h2>Error : {err.status + ' ' + err.statusText}</h2>
      <h3>Try Again</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuoFK2Ptg86FnH_krJiSvznVcRnCGhxtCgA&s"
        alt="android logo for errors"
      />
    </div>
  );
};

export default Error;
