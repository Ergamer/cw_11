import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import Category from "../../components/Category/Category";
import {fetchGetThisCategoryItems} from "../../store/actions/categories";

class Categories extends Component {
    componentDidMount() {
        this.props.fetchGetThisCategoryItems();
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    Categories
                </PageHeader>
                {this.props.categories.map(category => (
                    <Category
                        key={category._id}
                        id={category._id}
                        title={category.title}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artists.artists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetThisCategoryItems: (id) => dispatch(fetchGetThisCategoryItems(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

