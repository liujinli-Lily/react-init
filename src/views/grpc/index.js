import React, { Component } from 'react';
import './index.scss'
import { Steps  } from 'antd';
import GrpcUpload from "../../components/grpc/upload";
import GrpcForm from "../../components/grpc/form";
const { Step } = Steps;
// const initdata = require('../../mock/response2');
export default class Grpc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            showUpload: false,
            showEdit: true,
            showResult: false,
            jsonData: {},
            options: [],
            value: '',
        }
    }

    componentDidMount() {

    }
    filterData = data => {
        const arr = [];
        for (const item in data) {
            let result = [];
            if(Object.prototype.toString.call(data[item]) === "[object Object]"){
                result = this.filterData(data[item]);
            }
            const obj = {
                id: Math.round(Math.random() * 10000),
                label: item,
                value: item,
            }
            if (result.length !== 0) {
                obj.children = result;
            }
            arr.push(obj);
        }
        return arr;
    };
    /**
     * 点击切换v-show
     */
    uploadStep = (e, data)=> {
        const filter = this.filterData(data);
        this.setState({
            active: 1,
            showUpload: false,
            showEdit: true,
            jsonData: data,
            options: filter,
        });
    }
    preUpload = (e)=> {
        this.setState({
            active: 0,
            showUpload: true,
            showEdit: false,
            showResult: false,
            jsonData: {},
            options: [],
        });
    }
    render() {
        const { active } = this.state;
        const isStep = this.state.active;
        let component;
        if (isStep === 0) {
            component = <GrpcUpload uploadStep={this.uploadStep}/>;
        } else {
            component = <GrpcForm
                initdata={this.state.jsonData}
                options={this.state.options}
                preUpload={this.preUpload}
            />;
        }
        return (
            <div className="mod-content">
                <div>
                    <Steps
                        type="navigation"
                        size="small"
                        current={active}
                        status="wait"
                        className="site-navigation-steps"
                    >
                        <Step
                            title="Step 1"
                            subTitle="上传proto文件"
                        />
                        <Step
                            title="Step 2"
                            subTitle="提交测试"
                        />
                    </Steps>
                </div>
                {component}
            </div>
        )
    }
}
