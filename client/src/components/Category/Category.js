import React from 'react';
import {Panel} from "react-bootstrap";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Category = props => {


    return (
        <Panel>
            <Panel.Body id={props.id}>
                <Link to={'/categories/' + props.id}>
                    {props.title}
                </Link>
            </Panel.Body>
        </Panel>
    );
};

Category.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Category;