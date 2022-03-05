"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bmapgl_1 = require("react-bmapgl");
var Scene = function () {
    return (react_1["default"].createElement(react_bmapgl_1.Map, { center: { lng: 116.402544, lat: 39.928216 }, zoom: "11", style: { height: 1024 } },
        react_1["default"].createElement(react_bmapgl_1.Marker, { position: { lng: 116.402544, lat: 39.928216 }, icon: undefined, map: undefined }),
        react_1["default"].createElement(react_bmapgl_1.NavigationControl, { map: undefined }),
        react_1["default"].createElement(react_bmapgl_1.InfoWindow, { position: { lng: 116.402544, lat: 39.928216 }, text: "\u5185\u5BB9", title: "\u6807\u9898", map: undefined })));
};
exports["default"] = Scene;
