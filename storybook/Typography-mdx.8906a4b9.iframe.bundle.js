/*! For license information please see Typography-mdx.8906a4b9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktraveli_app=self.webpackChunktraveli_app||[]).push([[872],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/cores/Typography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SampleText:()=>SampleText,default:()=>Typography,typography:()=>typography});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,external_STORYBOOK_MODULE_CLIENT_LOGGER_.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");const typography={type:{primary:'"Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN","Hiragino Sans", "Meiryo", -apple-system, BlinkMacSystemFont, system-ui,sans-serif'},weight:{regular:"400",bold:"700"},size:{sm:12,md:16,lg:20,xl:24}},SampleText="Hello World! あいうえお 12345";const Typography=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Typography"}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"typography",children:"Typography"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Font:"})," Helvetica Neue"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Weights:"})," 400(regular), 700(bold)"]}),"\n",(0,jsx_runtime.jsx)(dist.GA,{fontSizes:[Number(typography.size.sm),Number(typography.size.md),Number(typography.size.lg),Number(typography.size.xl)],fontWeight:typography.weight.regular,sampleText:SampleText,fontFamily:typography.type.primary}),"\n",(0,jsx_runtime.jsx)(dist.GA,{fontSizes:[Number(typography.size.sm),Number(typography.size.md),Number(typography.size.lg),Number(typography.size.xl)],fontWeight:typography.weight.bold,sampleText:SampleText,fontFamily:typography.type.primary})]})}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);