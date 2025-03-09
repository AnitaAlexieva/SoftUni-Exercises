

import ControlledForm from './components/ControlledForm'
import FormAction from './components/FormAction'
import UncontrolledForm from './components/UncontrolledForm'
import UnifiedControlledForm from './components/UnifiedControlledForm'
import UseActionState from './components/UseActionState'
import UseRef from './components/UseRef'
import UseTransition from './components/UseTransition'

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
        <br />
        <UnifiedControlledForm />
        <br />
        <FormAction />
        <br />
        <UseTransition/>
        <br />
        <UseActionState />
    </>
  )
}

export default App
