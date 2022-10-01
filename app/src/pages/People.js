
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


export default function People() {

    return (
        <ul>
            <p>Page</p>
        </ul>
    );
}
People.propTypes = {
    trending: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
        })
    ),
};