import PropTypes from "prop-types";
import { MONTHS, YEARS } from "../utils/constants";
import { Select } from "../styles/styled";

const FilterPanel = ({ month, year, setMonth, setYear }) => {
  return (
    <>
      <Select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
        {MONTHS.map((m, i) => (
          <option key={m} value={i + 1}>
            {m}
          </option>
        ))}
      </Select>

      <Select value={year} onChange={(e) => setYear(Number(e.target.value))}>
        {YEARS.map((y) => (
          <option key={y}>{y}</option>
        ))}
      </Select>
    </>
  );
};

FilterPanel.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired
};

export default FilterPanel;