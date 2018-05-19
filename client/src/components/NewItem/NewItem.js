import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, ControlLabel, Form, FormControl, FormGroup, PageHeader} from "react-bootstrap";
import FormElement from "../../components/UI/Form/Form";
import {fetchAddNewItem} from "../../store/actions/items";


class NewPost extends Component {
    state = {
        title: '',
        description: '',
        image: '',
        category: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

        let formData = new FormData();

        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image);
        formData.append('category', this.state.category);

        this.props.fetchAddNewItem(formData);
    };


    render() {
        return(
            <Fragment>
                <PageHeader>Create new post</PageHeader>
                <Form horizontal onSubmit={this.submitFormHandler}>
                    {this.props.error &&
                    <Alert bsStyle="danger">{this.props.error.error}></Alert>}
                    <FormElement
                        propertyName="title"
                        title="Title"
                        placeholder="Enter title"
                        type="text"
                        value={this.state.title}
                        changeHandler={this.inputChangeHandler}
                    />

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea"
                                     name="description"
                                     placeholder="enter your description"
                                     onChange={this.inputChangeHandler} />
                    </FormGroup>
                    <FormGroup controlId="formControlsFile">
                        <ControlLabel>Image</ControlLabel>
                        <FormControl componentClass="file"
                                     name="image"
                                     type="file">
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="computers">Computers</option>
                            <option value="cars">Cars</option>
                            <option value="other">Other</option>
                        </FormControl>
                    </FormGroup>

                    <Button type='submit' style={{float: 'right', marginRight: '50px'}}><strong>Create item</strong></Button>

                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchAddNewItem: () => dispatch(fetchAddNewItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);