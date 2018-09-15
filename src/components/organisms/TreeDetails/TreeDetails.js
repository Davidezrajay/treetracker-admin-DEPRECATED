import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

class TreeDetails extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let { tree } = this.props;
    
    return (
      <div>
        <p>id: {tree.id}</p>
        <p>position: {tree.lat} {tree.lon}</p>
      </div>
    )
  }
}

const mapState = state => {
  const keys = Object.keys(state.trees.data)
  return {
    tree: state.trees.tree,
  }
}

export default TreeDetails;
