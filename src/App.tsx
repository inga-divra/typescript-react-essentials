import { useState } from 'react';
import Component from './starter/04-events';

function App() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  return (
    <section>
      <Component />
    </section>
  );
}

export default App;
