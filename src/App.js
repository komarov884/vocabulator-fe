import React from "react";
import IrregularVerbs from "./components/irregularVerbs"

class App extends React.Component {
  render() {
    return(
      <div>
        <h2>Vocabulator</h2>
        <p><a href="/irregular-verbs">Irregular verbs</a></p>
        <p>komarov884</p>
        <p>2019</p>
        <IrregularVerbs />
      </div>
    );
  }
}

export default App;