import React from "react";

class IrregularVerb extends React.Component {

  state = {
    pastSimple: '',
    pastPrinciple: ''
  }

  handleInputChange(event) {
    this.setState({
      pastSimple: this.inputPastSimple.value,
      pastPrinciple: this.inputPastPrinciple.value
    })
  }

  check(pastSimple, pastPrinciple) {
    {/* TODO imolement */}
  }

  render() {
    return(
      <div>
        <h2>Irregular verbs</h2>
        <div><p>Meaning</p><p>{this.props.meaning}</p></div>
        <div><p>Infinitive</p><input id="inputInfinitive" readOnly value={this.props.infinitive}/></div>
        <div><p>Past simple</p><input id="inputPastSimple" value={this.props.pastSimple} onChange={() => this.handleInputChange}/></div>
        <div><p>Past principle</p><input id="inputPastPrinciple" value={this.props.pastPrinciple} onChange={() => this.handleInputChange}/></div>
        <p>komarov884</p>
        <button id="getVerb" onClick={this.props.getVerb}>getVerb</button>
        <button id="check" onClick={() => this.check(() => this.inputPastSimple.value, () => this.inputPastPrinciple.value)}>Check</button>
        <div><p>Result</p><label id="result">result</label></div>
      </div>
    );
  }
}

export default IrregularVerb;