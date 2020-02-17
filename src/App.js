import React from "react";
import IrregularVerb from "./components/IrregularVerb"


class App extends React.Component {

  state = {
    infinitive: '',
    infinitiveTranscription: '',
    pastSimple: '',
    pastSimpleTranscription: '',
    pastPrinciple: '',
    pastPrincipleTranscription: '',
    meaning: '',
    error: ''
  }

  getVerb = async (event) => {
    event.preventDefault();
    const data = await fetch("http://localhost:8080/api/v0.1/irregular-verbs/random");
    console.log(data);
    const dataJson = await data.json();
    console.log(dataJson);

    this.setState({
      infinitive: dataJson.infinitive,
      infinitiveTranscription: dataJson.infinitiveTranscription,
      pastSimple: dataJson.pastSimple,
      pastSimpleTranscription: dataJson.pastSimpleTranscription,
      pastPrinciple: dataJson.pastPrinciple,
      pastPrincipleTranscription: dataJson.pastPrincipleTranscription,
      meaning: dataJson.meaning,
      error: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Vocabulator</h2>
        <p><a href="/irregular-verbs">Irregular verbs</a></p>
        <p>komarov884</p>
        <p>2020</p>
        <IrregularVerb
          getVerb={this.getVerb}
          infinitive={this.state.infinitive}
          infinitiveTranscription={this.state.infinitiveTranscription}
          pastSimple={this.state.pastSimple}
          pastSimpleTranscription={this.state.pastSimpleTranscription}
          pastPrinciple={this.state.pastPrinciple}
          pastPrincipleTranscription={this.state.pastPrincipleTranscription}
          meaning={this.state.meaning}
        />
      </div>
    );
  }
}

export default App;