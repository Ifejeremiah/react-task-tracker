import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={() => onClick()} className="btn" style={{ background: color }}>
      {text}
    </button>)
}

Button.defaultProps = {
  color: 'green',
  text: 'Add',
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button