import React, { Component, PropTypes } from 'react';

const propTypes = {
  setPeriodFilter: PropTypes.func.isRequired,
};

class PeriodFilter extends Component {
  render() {
    const { setPeriodFilter } = this.props;
    return (
      <div className="dropdown pull-right m-right">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Period Filter&nbsp;
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
          <li><a href="#" onClick={e => { e.preventDefault(); setPeriodFilter('ALL'); }}>All</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setPeriodFilter('THIS_FORTNIGHT'); }}>This Fortnight</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setPeriodFilter('NEXT_FORTNIGHT'); }}>Next Fortnight</a></li>
        </ul>
      </div>
    );
  }
}

PeriodFilter.propTypes = propTypes;

export default PeriodFilter;
