import React, { Component } from 'react';
import './index.scss'
import ReactJson from 'react-json-view'
// import Form from "@rjsf/core";
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Row, Col, Button } from 'antd';
// Make modifications to the theme with your own fields and widgets
const data = require('../../mock/data');
const Form = withTheme(AntDTheme);

export default class FormDemo extends Component{
    state = {
        schema: data,
        uiSchema: {
            foo: {"ui:widget": "hidden"}
        },
        formData: {
            user_gender: 1,
        }
    };
    onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);
    onFocus = (...args) => {
        // this.setState({
        //     formData: this.refs.demo.state.formData
        // })
        console.log("Data onFocus: ",  args)
    };
    onChange = ({formData, e}) =>{
        this.setState({
            formData
        })
        console.log("Data onBlur: ", formData);
    }

    render(){
        return (
            <div className="common-con-top">
                <Row>
                    <Col span={16}>
                        <div className="mod-row-left">
                            <Form
                                schema={this.state.schema}
                                uiSchema={this.state.uiSchema}
                                formData={this.state.formData}
                                noHtml5Validate={true}
                                liveValidate={false}
                                noValidate={false}
                                onFocus={this.onFocus}
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                                ref="demo"
                            >
                                <div className="mod-ant-btn">
                                    <Button >Cancel</Button>
                                    <Button type="primary">Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="mod-json-view">
                            <ReactJson src={this.state.formData}/>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
