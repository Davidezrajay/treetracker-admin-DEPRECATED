import React from 'react'
import { iconPaths } from '../../../common/iconPaths'
import { withStyles } from '@material-ui/core/styles'
import compose from 'recompose/compose'
import { connect } from 'react-redux'

const styles = (theme) => ({
  inactive: {
    fill: '#333'
  },
  active: {
    fill: '#fff'
  }
})

const Icon = (props) => ({
  render() {
    const { currentView } = props
    console.log( '| rendering icon |', currentView, props.id, props.currentView === props.id )
    return (
        <svg width='36' height='36' viewBox='0 0 24 24'>
          <path className={(props.currentView === props.id) ? props.classes.active : props.classes.inactive } d={iconPaths[props.icon]}></path>
        </svg>
    )
  }
})


const mapState = (state, b) => {
  console.log('state', state, b)
  return {
    currentView: state.appFrame.currentView
  }
}


export default compose(
  withStyles(styles, { withTheme: true, name: 'Icon' }),
  connect(mapState)
)(Icon)
