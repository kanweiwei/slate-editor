import { __extends } from "tslib";
import * as React from "react";
import "./style.less";
import ReactDom from "react-dom";
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenu.prototype.render = function () {
        var root = document.getElementById("root");
        var _a = this.props, isSelected = _a.isSelected, children = _a.children;
        if (!isSelected) {
            return null;
        }
        return ReactDom.createPortal(<div className="context-menu" id="context-menu" ref={this.props.contextMenuRef}>
        {children}
      </div>, root);
    };
    return ContextMenu;
}(React.Component));
export default ContextMenu;