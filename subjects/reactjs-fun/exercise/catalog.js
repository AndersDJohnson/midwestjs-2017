import React from 'react';
import PropTypes from 'prop-types';

function Catalog({ items, datetime, renderCount, onRefresh }) {
  return (
    <div>
      <button onClick={onRefresh}>refresh</button>
      <span id="renderCount">{renderCount}</span>
      <div>{datetime.toString()}</div>
      <table>
        {items.map((item, i) => (
          <tr key={item.id} className={i % 2 ? 'even' : 'odd'}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

Catalog.propTypes = {
  items: PropTypes.array,
  datetime: PropTypes.instanceOf(Date),
  renderCount: PropTypes.number,
  onRefresh: PropTypes.func
};

export default Catalog;
