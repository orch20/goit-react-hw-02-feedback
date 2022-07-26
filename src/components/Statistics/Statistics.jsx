import PropTypes from 'prop-types';
import { Notification } from './Notification'

export const Statistics = ({ stats, total, percentage}) => {
    const isPositive = Object.values(stats).some(value => value > 0);

    return (
        <>
            {isPositive ? (
                <>
                    {Object.keys(stats).map((key, i) => (
                        <p key={i} >{key}: {stats[key]}</p>))}
                    <p>Total: {total}</p>
                    <p>Positive feedback: {percentage}%</p> </>) :
                (<Notification message="There is no feedback"/>)}
        </>
    );
};

Statistics.propTypes = {
    stats: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}