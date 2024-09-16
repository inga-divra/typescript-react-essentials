import { PropsWithChildren } from 'react';

type ComponentProps = PropsWithChildren<{
  name: String;
  id: number;
  children?: React.ReactNode;
}>;
/* type ComponentProps = {
  name: String;
  id: number;
  children?: React.ReactNode;
}; */

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>ID: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
