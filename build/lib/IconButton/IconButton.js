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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Ripple_1 = require("../Ripple/Ripple");
require("./IconButton.css");
var IconButton = (function (_super) {
    __extends(IconButton, _super);
    function IconButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            var cursorPos = {
                top: e.clientY,
                left: e.clientX,
                time: Date.now()
            };
            var parent = e.target;
            _this.setState({ cursorPos: cursorPos, parent: parent });
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        _this.state = {
            cursorPos: {
                top: 0,
                left: 0,
                time: Date.now(),
            },
            parent: null,
        };
        return _this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, color = _a.color, disabled = _a.disabled, filled = _a.filled, icon = _a.icon, type = _a.type, style = _a.style, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onTouchEnd = _a.onTouchEnd, onTouchStart = _a.onTouchStart;
        var _b = this.state, cursorPos = _b.cursorPos, parent = _b.parent;
        var modColor = color === 'success' ? 'icon-button--success' :
            color === 'danger' ? 'icon-button--danger' :
                color === 'accent' ? 'icon-button--accent' :
                    color === 'warning' ? 'icon-button--warning' : '';
        var modType = type === 'flat' ? '' :
            type === 'simple' ? 'icon-button--simple' : '';
        var inlineStyle = {};
        if (style) {
            inlineStyle = __assign({}, style);
        }
        return (React.createElement("button", { className: "\n          " + (classNames ? classNames : '') + "\n          icon-button\n          " + (color ? modColor : '') + "\n          " + (type ? modType : '') + "\n          " + (filled ? 'icon-button--filled' : '') + "\n        ", style: inlineStyle, disabled: disabled, onClick: this.handleClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onTouchEnd: onTouchEnd, onTouchStart: onTouchStart },
            React.createElement("i", { className: "material-icons" }, icon),
            React.createElement(Ripple_1.Ripple, { cursorPos: cursorPos, parent: parent, classNames: "icon-button_ripple" })));
    };
    IconButton.defaultProps = {
        disabled: false,
        type: 'flat',
    };
    return IconButton;
}(React.Component));
exports.IconButton = IconButton;
