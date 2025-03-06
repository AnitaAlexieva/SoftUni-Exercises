

import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import UnifiedControlledForm from './components/UnifiedControlledForm'
import UseRef from './components/UseRef'

function App() {

  return (
    <>
        <UncontrolledForm />
        <br/>
        <ControlledForm />
        <br/>
        <UnifiedControlledForm/>
        <br />
        <UseRef />
    </>
  )
}

export default App
