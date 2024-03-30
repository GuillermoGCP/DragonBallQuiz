import { Outlet } from 'react-router-dom';
const Base = () => {
  return (
    <>
      <h1>Esto es el módulo base</h1>
      <Outlet />
    </>
  );
};
export default Base;
