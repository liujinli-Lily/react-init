import React, { Component } from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

export default class GrpcUpload extends Component{
    constructor(props) {
        super(props);
        this.state= {
            upload: {
                name: 'file',
                multiple: true,
                action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                onChange(info) {
                    const { status } = info.file;
                    if (status !== 'uploading') {
                        console.log(info.file, info.fileList);
                    }
                    if (status === 'done') {
                        message.success(`${info.file.name} file uploaded successfully.`);
                    } else if (status === 'error') {
                        message.error(`${info.file.name} file upload failed.`);
                    }
                },
            }
        }

    }
    componentDidMount(){
    }
    submitUpload = event =>{
        event.preventDefault();
        this.props.uploadStep(this);
    }
    render() {
        return(
            <div className="m-grpc-upload">
                <Dragger {...this.state.upload}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>
                <div className="u-btn">
                    <Button type="primary" onClick={this.submitUpload}>提交</Button>
                </div>

            </div>

        )
    }
}
