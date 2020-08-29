import React, { Component } from "react"
import "./style.scss"

class WaButton extends Component {

  render() {
    return <a className="wa-button-wrapper" target="_blank" href="https://api.whatsapp.com/send?phone=6285312261634&text=Halo%20Syukri" rel="noopener noreferrer">Hubungi WA</a>
  }
}

export default WaButton
