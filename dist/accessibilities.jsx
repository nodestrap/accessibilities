"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.AccessibilityProvider = exports.usePropActive = exports.usePropReadOnly = exports.usePropEnabled = exports.usePropAccessibility = exports.Context = void 0;
// react:
const react_1 = __importStar(require("react")); // base technology of our nodestrap components
// defaults:
const _defaultEnabled = true;
const _defaultReadOnly = false;
const _defaultActive = false;
const _defaultInheritEnabled = true;
const _defaultInheritReadOnly = true;
const _defaultInheritActive = false;
/**
 * A react context for accessibility stuff.
 */
exports.Context = (0, react_1.createContext)(/*defaultValue :*/ {
    enabled: _defaultEnabled,
    readOnly: _defaultReadOnly,
    active: _defaultActive,
});
exports.Context.displayName = 'Accessibility';
// hooks:
const usePropAccessibility = (props, defaultEnabled = _defaultEnabled, defaultReadOnly = _defaultReadOnly, defaultActive = _defaultActive) => {
    // contexts:
    const accessContext = (0, react_1.useContext)(exports.Context);
    return {
        enabled: (((props.inheritEnabled ?? _defaultInheritEnabled)
            ?
                accessContext.enabled // inherit
            :
                true // independent
        )
            &&
                (props.enabled ?? defaultEnabled)),
        readOnly: (((props.inheritReadOnly ?? _defaultInheritReadOnly)
            ?
                accessContext.readOnly // inherit
            :
                false // independent
        )
            ||
                (props.readOnly ?? defaultReadOnly)),
        active: (((props.inheritActive ?? _defaultInheritActive)
            ?
                accessContext.active // inherit
            :
                false // independent
        )
            ||
                (props.active ?? defaultActive)),
    };
};
exports.usePropAccessibility = usePropAccessibility;
const usePropEnabled = (props, defaultEnabled = _defaultEnabled) => {
    // contexts:
    const accessContext = (0, react_1.useContext)(exports.Context);
    return (((props.inheritEnabled ?? _defaultInheritEnabled)
        ?
            accessContext.enabled // inherit
        :
            true // independent
    )
        &&
            (props.enabled ?? defaultEnabled));
};
exports.usePropEnabled = usePropEnabled;
const usePropReadOnly = (props, defaultReadOnly = _defaultReadOnly) => {
    // contexts:
    const accessContext = (0, react_1.useContext)(exports.Context);
    return (((props.inheritReadOnly ?? _defaultInheritReadOnly)
        ?
            accessContext.readOnly // inherit
        :
            false // independent
    )
        ||
            (props.readOnly ?? defaultReadOnly));
};
exports.usePropReadOnly = usePropReadOnly;
const usePropActive = (props, defaultActive = _defaultActive) => {
    // contexts:
    const accessContext = (0, react_1.useContext)(exports.Context);
    return (((props.inheritActive ?? _defaultInheritActive)
        ?
            accessContext.active // inherit
        :
            false // independent
    )
        ||
            (props.active ?? defaultActive));
};
exports.usePropActive = usePropActive;
function AccessibilityProvider(props) {
    return (<exports.Context.Provider value={{
            enabled: props.enabled ?? _defaultEnabled,
            readOnly: props.readOnly ?? _defaultReadOnly,
            active: props.active ?? _defaultActive,
        }}>
            {props.children}
        </exports.Context.Provider>);
}
exports.AccessibilityProvider = AccessibilityProvider;
exports.default = AccessibilityProvider;
