import React, { Component } from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { uploadfile } from '../../request/grpc'
const { Dragger } = Upload;

export default class GrpcUpload extends Component{
    constructor(props) {
        super(props);
        this.state= {
            fileList: [],
            uploading: false,
        }

    }
    componentDidMount(){
    }
    submitUpload = async(event) =>{
        event.stopPropagation();
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('file', file);
        });
        this.setState({
            uploading: true,
        });
        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };
        const res = await uploadfile(formData, config);
        console.log(res,'1111')
        if(res.ret === 0){
            this.setState({
                fileList: [],
                uploading: false,
            });
            message.success('upload successfully.');
            this.props.uploadStep(this,res.data);
        }else {
            this.setState({
                uploading: false,
            });
            message.error('upload failed.');
        }

    };
    render() {
        const { uploading, fileList } = this.state;
        const props = {
            multiple: true,
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
            beforeUpload: file => {
                console.log(file)
                const index = file.name.lastIndexOf(".");
                const protoext = file.name.substr(index + 1);
                const isproto = protoext === 'proto';
                if (!isproto) {
                    message.error('You can only upload proto file!');
                }
                const isLimit = file.size / 1024 / 1024 < 10;
                if (!isLimit) {
                    message.error('proto must smaller than 10MB!');
                }
                return isproto && isLimit;
            },
            customRequest: ({file})=>{
                const index = file.name.lastIndexOf(".");
                const ext = file.name.substr(index + 1);
                if (ext !== "proto") {
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
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击或拖拽文件</p>
                    <p className="ant-upload-hint">
                        支持多选，文件格式仅支持proto文件
                    </p>
                </Dragger>
                <div className="u-btn">
                    <Button
                        type="primary"
                        onClick={this.submitUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                    >
                        {uploading ? 'Uploading' : '提交文件'}
                    </Button>
                </div>

            </div>

        )
    }
}
