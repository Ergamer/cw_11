import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import Item from "../../components/Item/Item";
import {fetchGetItem} from "../../store/actions/items";

class Items extends Component {
    componentDidMount() {
        this.props.fetchGetItem(this.props.match.params.id);
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    Items
                </PageHeader>
                {this.props.items.map(item => (
                    <Item
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        displayName={item.displayName}
                        category={item.category}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetItem: (id) => dispatch(fetchGetItem(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);