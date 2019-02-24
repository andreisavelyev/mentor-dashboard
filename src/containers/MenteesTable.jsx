import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './mentees-table.css';


class MenteesTable extends Component {

  render() {
    const { mentor } = this.props.match.params;
    const { isLoaded, data, tasks } = this.props.getDataReducer;
    const students = data.filter(item => item.mentor === mentor);
    const rows = ['student', ...tasks]
    if (!isLoaded) {
      setTimeout(() => this.props.history.push('/mentors'), 1000)
    } else {
      return (
        <Fragment>
          <h2>{mentor}</h2>
          <table>
            <tbody>
              {rows.map(item => {
                return (
                <tr key={Math.random()}><td>{item === 'student' ? 'Tasks / Students' : item}</td>
                  {students.map(id => {
                     if (typeof id[item] === 'string') {
                      return <td key={Math.random()}>{id[item]}</td>
                    } 
                    if (typeof id[item] === 'number') {
                      return <td key={Math.random()} className='checked'></td>
                    } else if (typeof id[item] === 'object' && typeof id[item].score === 'number') {
                      return <td key={Math.random()} className='checked'></td>
                    } else if ((typeof id[item] === 'object' && id[item].status === 'Checked') || !id[item]) {
                      return <td key={Math.random()} className='unchecked'></td>
                    } else if (typeof id[item] === 'object' && id[item].status === 'Checking') {
                      return <td key={Math.random()} className='checking'></td>
                    } else if (typeof id[item] === 'object' && id[item].status === 'ToDo') {
                      return <td key={Math.random()} className='todo'></td>
                    } else if (typeof id[item] === 'object' && id[item].status === 'In Progress') {
                      return <td key={Math.random()} className='in-progress'></td>
                    }
                    return <td key={Math.random()} className='unchecked'></td>
                  })}
                </tr>)
              })}
            </tbody>
          </table>
        </Fragment>
      )
    }

    return (
      <h2>Getting back to Mentors</h2>
    )
  }
}

const mapStateToProps = ({getDataReducer}) => ({
  getDataReducer,
});

export default connect(mapStateToProps)(MenteesTable);