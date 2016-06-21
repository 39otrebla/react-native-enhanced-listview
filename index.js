/**
* @Author: alberto
* @Date:   21-Jun-2016
* @Last modified by:   alberto
* @Last modified time: 21-Jun-2016
*/


import React, {PropTypes, Component} from 'react'
import {ListView} from 'react-native'

export default class EnhancedListView extends Component {

  propTypes: {
    ...ListView.propTypes
  }

  constructor(props) {
    super(props)
    this.notVisible = {}

    this.enhance = this.enhance.bind(this)
    this.enhancedRowRender = this.enhancedRowRender.bind(this)
  }

  enhance(visibleRows, changedRows) {
    if (this.props.onChangeVisibleRows) {
      this.props.onChangeVisibleRows
    }

    /*
      the enhancement consists in having not visible rowIDs mapped
      in an object, used in renderRow to decide whether we should
      actually render something or not
     */
    Object.keys(changedRows['s1']).map(i => {
      if (changedRows['s1'][i] === false) { this.notVisible[i] = null }
      else { delete this.notVisible[i] }
    })
  }

  enhancedRenderRow(rowData, sectionID, rowID, highlightRow) {
    /* renders nothing if the row is not visible */
    if (this.notVisible[rowID] !== undefined) { return null }
    /* renders user-defined row if the row is visible */
    this.props.renderRow
  }

  render() {
    return(
      <ListView
        {...this.props}
        onChangeVisibleRows={this.enhance}
        renderRow={this.enhancedRenderRow}
      />
    )
  }

}
