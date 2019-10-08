import React, { Component } from 'react';
import { withFirebase } from '../../components/Firebase';

import './tattoos.css';

// import PhotoGrid from '../PhotoGrid';

// TODO: RENAME to GALLERY

class Tattoos extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   activeStyles: [],
    //   displayedTattoos: [],
    // };
  }

  // componentDidMount() {
  //   this.props.firebase
  //     .tattoos()
  //     .limit(20)
  //     // .where('uid', '==', this.props.authUser.uid)
  //     .get()
  //     .then(async querySnapshot => {
  //       if (querySnapshot.size > 0) {
  //         this.setState({ loading: true });
  //         const updatedTattooList = [];
  //         querySnapshot.forEach(doc => {
  //           let tattooInfo = doc.data();
  //           updatedTattooList.push(tattooInfo);
  //         });

  //         this.setState({
  //           displayedTattoos: updatedTattooList,
  //           loading: false,
  //         });
  //       } else {
  //         console.log('No such document!');
  //       }
  //     })
  //     .catch(function(error) {
  //       console.log('Error getting document: ', error);
  //     });
  // }

  // temp = () => {
  //   this.props.firebase
  //     .tattoos()
  //     // .limit(20).start()
  //     // .where('uid', '==', this.props.authUser.uid)
  //     .get()
  //     .then(async querySnapshot => {
  //       if (querySnapshot.size > 0) {
  //         this.setState({ loading: true });
  //         const updatedTattooList = [];
  //         querySnapshot.forEach(doc => {
  //           let tattooInfo = doc.data();
  //           updatedTattooList.push(tattooInfo);
  //         });
  //         this.setState({
  //           displayedTattoos: updatedTattooList,
  //           loading: false,
  //         });
  //       } else {
  //         console.log('No such document!');
  //       }
  //     })
  //     .catch(function(error) {
  //       console.log('Error getting document: ', error);
  //     });
  // };

  render() {
    return (
      <div className="tattoos--container">
        <div>
          <h1>Tattoos</h1>
        </div>
        {/* {!this.state.loading && (
          <PhotoGrid imgSrcArray={this.state.displayedTattoos} />
        )} */}
      </div>
    );
  }
}

export default withFirebase(Tattoos);
