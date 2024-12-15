import { range } from './utils';
import PropTypes from 'prop-types';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {range(numCols).map((colIndex) => (
            <div key={`cell-${rowIndex}-${colIndex}`} className="cell" />
          ))}
        </div>
      ))}
    </div>
  );
}


Grid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
};

export default Grid;