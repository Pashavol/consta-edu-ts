import './App.css'
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { DemoExample } from "./demo/demo"

function App() {
  return (
  <Theme preset={presetGpnDefault}>
    <DemoExample/>
  </Theme>
  )
}

export default App
