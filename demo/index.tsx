import React from "react"
import ReactDOM from "react-dom"

import { main } from "../dist/re-layout.es"

main()

ReactDOM.render(
  <React.StrictMode>
    <div>Hello world</div>
  </React.StrictMode>,
  document.getElementById("root")
)