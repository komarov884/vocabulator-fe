import React from "react";
import IrregularVerbs from "./components/irregularVerbs"


class App extends React.Component {

  getVerb = async (event) => {
    event.preventDefault();
    const data = await fetch("http://localhost:8080/api/v0.1/irregular-verbs");
    console.log(data);
    const dataJson = await data.json();
    console.log(dataJson);
  }

  render() {
    return(
      <div>
        <h2>Vocabulator</h2>
        <p><a href="/irregular-verbs">Irregular verbs</a></p>
        <p>komarov884</p>
        <p>2019</p>
        <IrregularVerbs getVerb={this.getVerb} />
      </div>
    );
  }
}

export default App;