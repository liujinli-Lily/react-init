import React, {Component} from 'react';

import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

import './index.scss';

export default class JSONEditorDemo extends Component {
    componentDidMount () {
        const options = {
            mode: 'code',
            // 有效值 'view', 'form', 'code', 'text', 'preview'
            onChangeJSON: this.props.onChangeJSON,
            onEditable() {
                return false;
            },
        };

        this.jsoneditor = new JSONEditor(this.container, options);
        this.jsoneditor.set(this.props.json);
    }

    componentWillUnmount () {
        if (this.jsoneditor) {
            this.jsoneditor.destroy();
        }
    }

    componentDidUpdate() {
        this.jsoneditor.update(this.props.json);
    }

    render() {
        return (
            <div className="_json-editor">
                <div className="jsoneditor-react-container" ref={elem => this.container = elem} style={this.props.style} />
            </div>

        );
    }
}
