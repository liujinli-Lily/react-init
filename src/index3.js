import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './assets/css/index.css';
import './assets/scss/default.scss';
import store from './store/index'
import BasicRoute from './router/index';
//引入样式
import './assets/css/index.css';
//引入组件
import * as serviceWorker from './serviceWorker';
//引入antd导航组件
import { Menu, Icon, Layout } from 'antd';
//引入ant-design样式
import 'antd/dist/antd.css';
//引入路由
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
//layout布局元素
const { Header, Footer, Content } = Layout;

class DefaultLayout extends Component{
    constructor(props){
        super(props)
        this.state={
            collapsed: true,
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        return(
            <Router>
                <Layout>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Link to="/"><span><span>index</span></span></Link>
                        </Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper">Navigation Three - Submenu</span>}>
                            <MenuItemGroup>
                                <Menu.Item key="setting:1"><Link to="/PageTwo"><span>index</span></Link></Menu.Item>
                                <Menu.Item key="setting:2"><Link to="/PageThree"><span>index</span></Link></Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>

                    <Layout>
                        <Header></Header>
                        <Content>
                            <Provider store={store}>
                                <BasicRoute />
                            </Provider>
                        </Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}


// 配置路由
ReactDOM.render(<DefaultLayout />, document.getElementById('root'));
serviceWorker.unregister();

