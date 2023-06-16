import PropTypes from 'prop-types'
import Star from './Star';

const Stars = ({count}) => {

    if(typeof count !== "number" || count < 1 || count > 5) return null;

    const arr = Array(count).fill();

    return (
        <ul className='card-body-stars'>
            {arr.map((item, index) => <Star key={index}/>)}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}

export default Stars;