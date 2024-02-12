import './App.css'
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

function App() {

  return (
    <>
     <CheckboxGroup
      label="Select cities"
      defaultValue={["buenos-aires", "london"]}
    >
      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
      <Checkbox value="tokyo">Tokyo</Checkbox>
    </CheckboxGroup>
    </>
  )
}

export default App
