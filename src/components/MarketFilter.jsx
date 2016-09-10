import React, { Component, PropTypes } from 'react';

const propTypes = {
  setMarketFilter: PropTypes.func.isRequired,
};

class MarketFilter extends Component {
  render() {
    const { setMarketFilter } = this.props;
    return (
      <div className="dropdown pull-right">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          All Markets&nbsp;
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
          <li><a href="#" onClick={e => { e.preventDefault(); setMarketFilter('G3_PLUS_C'); }}>G3 + China</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setMarketFilter('HIGH_INCOME_EAST_ASIA'); }}>High Income East Asia</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setMarketFilter('MIDDLE_INCOME_EAST_ASIA'); }}>Middle Income East Asia</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setMarketFilter('ALL_EAST_ASIA'); }}>All East Asia</a></li>
        </ul>
      </div>
    );
  }
}

MarketFilter.propTypes = propTypes;

export default MarketFilter;
