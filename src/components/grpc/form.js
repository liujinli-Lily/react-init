import React, { Component } from 'react';
import './index.scss'
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import {Row, Col, Button, Cascader, Input, message, Modal} from 'antd';
import { submitjson } from '../../request/grpc'
import JSONEditorDemo from './jsonview';
// Make modifications to the theme with your own fields and widgets
const Form = withTheme(AntDTheme);

export default class GrpcForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            schema: {},
            uiSchema: {
                foo: {"ui:widget": "hidden"}
            },
            formData: {
            },
            defaultValue: '',
            method : '',
            addr: '',
            visible: false,
            Response: {},
        };
    }
    onChange = ({formData, e}) =>{
        this.setState({
            formData
        })
        console.log("Data onBlur: ", formData);
    }
    changeCascader = value=> {
        let data;
        if(value.length > 0){
            data = this.props.initdata[value[0]][value[1]][value[2]];
            data = JSON.parse(data);
        }else {
            data = {};
        }
        const str = value.slice(1).join('.');
        this.setState({
            schema: data,
            method: str,
            formData: {}
        });
        // const data = this.state.jsonData["hello.proto"]["services.HelloService"]["SayHello"];
        // console.log(data,'00000')
    }
    changeAddr = e => {
        // console.log(e)
        this.setState({
            addr: e.target.value
        });
    };

    submit =  async(e) =>{
        e.stopPropagation()
        const { addr, method, formData} = this.state;
        if(!addr){
            return message.error('请填写请求地址，域名/ip 加端口号');
        }
        if (!method){
            return message.error('请选择要执行的请求方法');
        }
        const res = await submitjson({addr,method,body:formData} )
        if(res.ret === 0){
            this.setState({
                Response: res,
                visible: true,
            });
        }else{
            message.error(res.message);
        }
    }


    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){
        return (
            <div className="m-containter">
                <div className="m-top-form">
                    <div className="m-item">
                        <Cascader
                            options={this.props.options}
                            onChange={this.changeCascader}
                            placeholder="请选择请求方法"
                            defaultValue={this.state.defaultValue}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="m-item">
                        <Input placeholder="127.0.0.1:8080" onChange={this.changeAddr.bind(this)}/>
                    </div>

                </div>

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
                                onChange={this.onChange}
                                ref="demo"
                            >
                                <div className="m-bottom">
                                    <div className="mod-ant-btn">
                                        <Button onClick={this.props.preUpload} >重新上传</Button>
                                        <Button type="primary" onClick={this.submit}>提交</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="mod-json-view">
                            <JSONEditorDemo
                                json={this.state.formData}
                                style={{height: '400px'}}
                            />
                        </div>
                    </Col>
                </Row>

                <Modal
                    title="Response"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <JSONEditorDemo
                            json={this.state.Response}
                            style={{height: '400px'}}
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}
