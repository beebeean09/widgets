import React from 'react';

class Tabs extends React.Component{

  constructor () {
    super();
    this.state = {selectedPane: 0};
    this.selectedTab = this.selectedTab.bind(this);
  }

  selectedTab(num) {
    // debugger;
    this.setState({selectedPane: num });
    alert(num);
  }


  render () {
    // debugger;
    const tabs = [{ title: "one", content: "I am the first" },
      { title: "two", content: "I am the second" },
      { title: "three", content: "I am the third" }];

    const tab = tabs[this.state.selectedPane];
      // debugger;
    let tabTitles = tabs.map((el, idx) => (
      <li key={idx}>
        <button onClick={this.selectedTab}>{el.title}</button>
      </li>
    ));



  return(
    <ul>
      <h1>Tabs</h1>
      {tabTitles}
      <p>{tab.content}</p>
    </ul>
  );
  }
}


export default Tabs;
