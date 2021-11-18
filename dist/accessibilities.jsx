// react:
import { default as React, createContext, useContext, } from 'react'; // base technology of our nodestrap components
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
export const Context = createContext(/*defaultValue :*/ {
    enabled: _defaultEnabled,
    readOnly: _defaultReadOnly,
    active: _defaultActive,
});
Context.displayName = 'Accessibility';
// hooks:
export const usePropAccessibility = (props, defaultEnabled = _defaultEnabled, defaultReadOnly = _defaultReadOnly, defaultActive = _defaultActive) => {
    // contexts:
    const accessContext = useContext(Context);
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
export const usePropEnabled = (props, defaultEnabled = _defaultEnabled) => {
    // contexts:
    const accessContext = useContext(Context);
    return (((props.inheritEnabled ?? _defaultInheritEnabled)
        ?
            accessContext.enabled // inherit
        :
            true // independent
    )
        &&
            (props.enabled ?? defaultEnabled));
};
export const usePropReadOnly = (props, defaultReadOnly = _defaultReadOnly) => {
    // contexts:
    const accessContext = useContext(Context);
    return (((props.inheritReadOnly ?? _defaultInheritReadOnly)
        ?
            accessContext.readOnly // inherit
        :
            false // independent
    )
        ||
            (props.readOnly ?? defaultReadOnly));
};
export const usePropActive = (props, defaultActive = _defaultActive) => {
    // contexts:
    const accessContext = useContext(Context);
    return (((props.inheritActive ?? _defaultInheritActive)
        ?
            accessContext.active // inherit
        :
            false // independent
    )
        ||
            (props.active ?? defaultActive));
};
export function AccessibilityProvider(props) {
    return (<Context.Provider value={{
            enabled: props.enabled ?? _defaultEnabled,
            readOnly: props.readOnly ?? _defaultReadOnly,
            active: props.active ?? _defaultActive,
        }}>
            {props.children}
        </Context.Provider>);
}
export { AccessibilityProvider as default };
