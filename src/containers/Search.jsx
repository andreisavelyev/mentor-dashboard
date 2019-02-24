import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInputAction } from '../actions/getInputAction';

class Search extends Component {
  handleChange(e) {
    const input = e.target.value.toLowerCase();
    const listOfMentors = this.props.mentors.filter(item => item.toLowerCase().includes(input));
    this.props.getInput(listOfMentors);
  }
  
  render() {
    return (
      <form>
        <input className="search-input" type="text" placeholder="search" onChange={this.handleChange.bind(this)}/>
      </form>
    )
  }
}

const mapStateToProps = ({getDataReducer: {mentors}}) => ({
  mentors,
})

const mapDispatchToProps = (dispatch) => ({
  getInput: input => dispatch(getInputAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);