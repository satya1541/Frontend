import PropTypes from "prop-types";
import style from "./Item.module.css";

function Item(props) {
  return <li className={style["list"]}>{props.value}</li>;
}

Item.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Item;
