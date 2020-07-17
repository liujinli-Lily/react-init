import React, { Component } from 'react';
import './index.scss'
import { Steps } from 'antd';
import GrpcUpload from "../../components/grpc/upload";
import GrpcForm from "../../components/grpc/form";
const { Step } = Steps;
export default class Grpc extends Component {
    constructor(props) {
        super(props);
        this. state = {
            active: 0,
            showUpload: false,
            showEdit: true,
            showResult: false,
            jsonData: {}
        }
    }

    /**
     * 点击切换v-show
     */
    uploadStep = (e)=> {
        this.setState(state =>({
            active: 1,
            showUpload: false,
            showEdit: true,
        }));
    }
    editStep = (e)=> {
        this.setState({
            active: 2,
            showEdit: false,
            showResult: true,
        });
    }
    preUpload = (e)=> {
        this.setState({
            active: 0,
            showUpload: true,
            showEdit: false,
            showResult: false,
        });
    }
    preEdit= active => {
        this.setState({ active });
    }
    onChange = active => {
        console.log('onChange:', active);
        this.setState({ active });
    };
    render() {
        const { active } = this.state;
        const isStep = this.state.active;
        let component;
        if (isStep === 0) {
            component = <GrpcUpload uploadStep={this.uploadStep}/>;
        } else {
            component = <GrpcForm editStep={this.editStep} preUpload={this.preUpload}/>;
        }
        return (
            <div className="mod-content">
                <div>
                    <Steps
                        type="navigation"
                        size="small"
                        current={active}
                        onChange={this.onChange}
                        status="wait"
                        className="site-navigation-steps"
                    >
                        <Step
                            title="Step 1"
                            subTitle="00:00:05"
                            description="This is a description."
                        />
                        <Step
                            title="Step 2"
                            subTitle="00:01:02"
                            description="This is a description."
                        />
                        <Step
                            title="Step 3"
                            subTitle="waiting for longlong time"
                            description="This is a description."
                        />
                    </Steps>
                </div>
                {component}
            </div>
        )
    }
}
