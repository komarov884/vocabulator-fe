import React from "react";

class IrregularInfo extends React.Component {
  render() {
    return(
      <div>
        <h2>Irregular verbs</h2>
        <div><p>Meaning</p><p>verb.meaning</p></div>
        <div><p>Infinitive</p><input id="inputInfinitive" value="verb.infinitive"/></div>
        <div><p>Past simple</p><input id="inputPastSimple" value="verb.pastSimple"/></div>
        <div><p>Past principle</p><input id="inputPastPrinciple" value="verb.pastPrinciple"/></div>
        <p>komarov884</p>
        <button id="check" onclick="check(inputInfinitive.value, inputInfinitive.value)">Check</button>
        <div><p>Result</p><label id="result">result</label></div>
      </div>
    );
  }
}

export default IrregularInfo;