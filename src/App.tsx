//import Component from './final/05-challenge';

import Component from './starter/05-challenge';

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      {/*  <Component type='basic' name='susan' /> */}
      {/* <Component type='advanced' name='anna' email='email@gmail.com' /> */}
      <Component type='basic' name='Anna' />
      <Component type='advanced' name='Susan' email='susan@gmail.com' />
    </main>
  );
}

export default App;
