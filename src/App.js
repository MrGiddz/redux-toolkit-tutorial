import {useState} from 'react'
import {CakeView} from './rtk-demo/features/cake/CakeView'
import {IceCreamView} from './rtk-demo/features/icecream/IceCreamView'
import {UserView} from './rtk-demo/features/user/UserView'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
