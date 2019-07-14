import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Results from '../components/Results'
import Keypad from '../components/Keypad'

class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "=") {
      this.calculate()
    }
    else if(button === "C"){
      this.reset()
    }
    else if(button === "CE"){
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return(
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Simple Calculator</h1>
      <Results result={this.state.result} />
      <Keypad onClick={this.onClick} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    )
  }
}



export default IndexPage
