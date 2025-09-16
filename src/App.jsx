import { createRoot } from "react-dom/client"
import "materialize-css/dist/css/materialize.min.css"

const appStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  background: "radial-gradient(ellipse at 0% 0%, black, #10d4a9, black), radial-gradient(ellipse at 100% 100%, black, #10d4a9, black)",
  backgroundSize: "24px 24px, 24px 24px",
  backgroundBlendMode: "screen"
}

function App() {
  return (
    <div style={appStyles} className="valign-wrapper center-align">
      <h5 className="white-text">Background GHI</h5>
    </div>
  )
}

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
createRoot(rootElement).render(<App />)
