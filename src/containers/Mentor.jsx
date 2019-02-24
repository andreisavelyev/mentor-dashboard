import React, { Component, Fragment } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataAction } from '../actions/getDataAction';
import { resetInputAction } from '../actions/resetInputAction';
import './mentor.css';

class Mentor extends Component {
  componentDidMount() {
    this.props.getData();

    if(this.props.getInputReducer.mentorsFiltered.length) {
      this.props.resetInput();
    }
  }

  render() {
    const {isLoaded, mentors} = this.props.getDataReducer;
    const { mentorsFiltered } = this.props.getInputReducer;
    const listOfMentors = mentorsFiltered.length ? mentorsFiltered : mentors;

    return (
      <Fragment>
        <Search />
        {isLoaded && listOfMentors.map((item) => <Link className="mentor-link" key={`${item}`} to={'/mentors/' + item}>{item}</Link>)}

      </Fragment>
    );
  }
}

const mapStateToProps = ({getDataReducer, getInputReducer}) => ({
  getDataReducer,
  getInputReducer
});

const mapDispatchToProps = dispatch => ({
  getData: value => dispatch(getDataAction(value)),
  resetInput: () => dispatch(resetInputAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Mentor);