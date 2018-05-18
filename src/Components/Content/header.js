/**
 * Reconhecimento Facial
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://reconhecimento-facial.rodrigo3d.com
 * @see https://github.com/rodrigo3d/reconhecimento-facial
 */

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';

//const img = 'assets/img/demo-screen-1.jpg';
//const img = 'assets/device-mockups/imac/imac.png';
const img = 'assets/tracking-js/faces.jpg';

class AdminGenresEditing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
   // this.setState({ isLoading: true })


  }

  handleCreate(event) {

    event.preventDefault()
  }



  componentWillUnmount() {
    // if (this.props.match.params.id) {
    //   base.removeBinding(this.ref)
    // }
  }

  componentDidCatch(error, info) {
    alert(error)
  }

  render() {
    // const { name, description } = this.state
    // const isEnabled =
    //   name.length > 0 &&
    //   description.length > 0

    return (
      <header className="masthead" id="header">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-5 my-auto">
            <div className="header-content mx-auto">

            <h1 className="mb-5">Reconhecimento Facial com JavaScript!</h1>
            <h5 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h5>

            <HashLink className="btn btn-outline btn-xl js-scroll-trigger" to="/#download">Start Now for Free!</HashLink>






            </div>
          </div>
          <div className="col-lg-7 my-auto">








            <div className="device-container---">
              <div className="device-mockup samsung_tv landscape-- iphone6_plus--- portrait--- white---">
                <div className="device">
                  <div className="screen demo-container">
                    <img id="img" src={`${img}`} className="img-fluid" alt="" />
                  </div>
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </header>

    )
  }
}

export default withRouter(AdminGenresEditing)






