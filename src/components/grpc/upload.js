import React, { Component } from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

export default class GrpcUpload extends Component{
    constructor(props) {
        super(props);
        this.state= {
            fileList: [],
            uploading: false,
            // upload: {
            //     name: 'file',
            //     multiple: true,
            //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            //     onChange(info) {
            //         const { status } = info.file;
            //         if (status !== 'uploading') {
            //             console.log(info.file, info.fileList);
            //         }
            //         if (status === 'done') {
            //             message.success(`${info.file.name} file uploaded successfully.`);
            //         } else if (status === 'error') {
            //             message.error(`${info.file.name} file upload failed.`);
            //         }
            //     },
            // }
        }

    }
    componentDidMount(){
    }
    submitUpload = event =>{
        event.preventDefault();

        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });

        // You can use any AJAX library you like
        reqwest({
            url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed.');
            },
        });

        this.props.uploadStep(this);
    };
    render() {
        const { uploading, fileList } = this.state;
        const props = {
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload(file) {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    message.error('You can only upload JPG/PNG file!');
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    message.error('Image must smaller than 2MB!');
                }
                return isJpgOrPng && isLt2M;
            },
            customRequest: file=>{
                const index = file.name.lastIndexOf(".");
                const ext = file.name.substr(index + 1);
                if (ext != "proto") {
                    message.error("请上传正确格式的文件!");
                    return false;
                }
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
            },
            fileList,
        };
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
                    <Button
                        type="primary"
                        onClick={this.submitUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                    >
                        {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>
                </div>

            </div>

        )
    }
}
