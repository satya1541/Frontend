import Item from "./Item";
import PropTypes from "prop-types";

function List(props) {
  let values = props.values || [];
  return (
    <ul>
      {values.map((value) => (
        <Item key={value} value={value} />
      ))}
    </ul>
  );
}

List.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default List;
