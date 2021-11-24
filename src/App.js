import "./App.css";
import React from "react";

import CardList from "./CardList";
import Form from "./Form";

// const App = () => {
//   const [profile, setProfile] = useState([]);

//   const addNewProfile = (profileData) => {
//     setProfile((prevState) => ({
//       profile: [...prevState.profile, profileData],
//     }));
//   };

//   return (
//     <div>
//     <div className="header">The Github Cards App</div>
//     <Form onSubmit={addNewProfile} />
//     <CardList profiles={profile} />
//   </div>
//   )
// }

class App extends React.Component {

  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="flex">
        <div className="header">GitHub User Card Search</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
