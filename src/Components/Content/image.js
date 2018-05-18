/**
 * Reconhecimento Facial
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://reconhecimento-facial.rodrigo3d.com
 * @see https://github.com/rodrigo3d/reconhecimento-facial
 */

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { withRouter, Link } from 'react-router-dom';

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
                <h5 className="mb-5">Selecione abaixo os items que deseja reconhecer e clique em reconhecer.</h5>

                <form className="form-vertical bg-white- text-center-" id="ty">
                  <div className="form-group checkbox form-check-inline">
                    <input id="face" type="text" className="form-control" defaultValue="1" style={{ width: "50px", display: "none" }} />
                    <button type="button" className="btn btn-success"><span className="fa fa-check-square-o"></span> Rosto</button>
                  </div>
                  <div className="form-group checkbox form-check-inline">
                    <input id="eye" type="text" className="form-control" defaultValue="0" style={{ width: "50px", display: "none" }} />
                    <button type="button" className="btn btn-default"><span className="fa fa-square-o"></span> Olho</button>
                  </div>
                  <div className="form-group checkbox form-check-inline">
                    <input id="mouth" type="text" className="form-control" defaultValue="0" style={{ width: "50px", display: "none" }} />
                    <button type="button" className="btn btn-default"><span className="fa fa-square-o"></span> Boca</button>
                  </div>
                  <div className="form-group">
                    <Link id="submit" className="btn btn-outline btn-xl js-scroll-trigger" to="/#download">Reconhecer</Link>
                  </div>
                </form>
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






