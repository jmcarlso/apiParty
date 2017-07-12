import React, { Component } from 'react'
import { Route } from 'react-router-dom'


class Googlemap extends Component {
  render() {
    return (     <iframe src="//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK
                 &zoom=17
                 &key=AIzaSyCwz4S_tTdnHwzKtxlb8ZBPkS7Ik2m6ybA">
                 </iframe>
    )

  }
}

export default Googlemap

