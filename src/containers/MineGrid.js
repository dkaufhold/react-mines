import { connect } from 'react-redux'
import { clickField } from '../actions'
import Grid from '../components/Grid'


const mapStateToProps = (state) => {
  return {
    tiles: state.fields.tiles
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTileClick: (x, y) => {
      dispatch(clickField(x, y))
    }
  }
}


const MineGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)


export default MineGrid