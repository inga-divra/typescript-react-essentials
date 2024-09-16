import Component from './starter/02-props';

function App() {
  return (
    <main>
      <Component name='peter' id={123}>
        <h1>Hello world</h1>
      </Component>
      <Component name='peter' id={123} />
    </main>
  );
}

export default App;
