"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var manager_1 = require("./manager");
var scene_1 = require("./scene");
var school_1 = require("./school");
var SubMenu = antd_1.Menu.SubMenu;
var Header = antd_1.Layout.Header, Content = antd_1.Layout.Content;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            theme: 'dark',
            current: 'scene'
        };
        _this.changeTheme = function (value) {
            _this.setState({
                theme: value ? 'dark' : 'light'
            });
        };
        _this.handleClick = function (e) {
            _this.setState({
                current: e.key
            });
        };
        return _this;
    }
    Home.prototype.render = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_router_dom_1.HashRouter, null,
                react_1["default"].createElement(antd_1.Layout, { className: "layout", style: { height: "100%" } },
                    react_1["default"].createElement(Header, null,
                        react_1["default"].createElement(antd_1.Menu, { theme: 'dark', onClick: this.handleClick, defaultOpenKeys: ['scene'], selectedKeys: [this.state.current], mode: "horizontal" },
                            react_1["default"].createElement(antd_1.Menu.Item, { key: "scene", icon: react_1["default"].createElement(icons_1.MailOutlined, null) },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/scene" }, "\u573A\u666F")),
                            react_1["default"].createElement(SubMenu, { key: "school", icon: react_1["default"].createElement(icons_1.AppstoreOutlined, null), title: "\u667A\u6167\u6821\u56ED" },
                                react_1["default"].createElement(antd_1.Menu.Item, { key: "1" },
                                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/school" }, "\u667A\u6167\u6559\u5BA4")),
                                react_1["default"].createElement(antd_1.Menu.Item, { key: "6" },
                                    react_1["default"].createElement(react_router_dom_1.Link, { to: "" }, "\u667A\u6167\u98DF\u5802")),
                                react_1["default"].createElement(antd_1.Menu.Item, { key: "7" },
                                    react_1["default"].createElement(react_router_dom_1.Link, { to: "" }, "\u667A\u6167\u6FA1\u5802"))),
                            react_1["default"].createElement(antd_1.Menu.Item, { key: "manager", icon: react_1["default"].createElement(icons_1.SettingOutlined, null) },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/manager" }, "\u6258\u7BA1")))),
                    react_1["default"].createElement(Content, null,
                        react_1["default"].createElement("div", { className: "site-layout-content" },
                            react_1["default"].createElement(react_router_dom_1.Routes, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "scene", element: react_1["default"].createElement(scene_1["default"], null) }),
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "school", element: react_1["default"].createElement(school_1["default"], null) }),
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "manager", element: react_1["default"].createElement(manager_1["default"], null) }))))))));
    };
    return Home;
}(react_1["default"].Component));
exports["default"] = Home;
