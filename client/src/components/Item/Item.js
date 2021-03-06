import React from 'react';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import notFound from '../../assets/images/not-found.png';

import config from '../../config';

const Item = props => {
    let image = notFound;

    if (props.image) {
        image = config.apiUrl + '/uploads/' + props.image;
    }

    return (
        <Panel>
            <Panel.Body>
                <Image
                    style={{width: '100px', marginRight: '10px'}}
                    src={image}
                    thumbnail
                />
                <Link to={'/items/' + props.id}>
                    {props.title}
                </Link>
                <strong>
                    {props.price} KGS
                </strong>
            </Panel.Body>
        </Panel>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default Item;