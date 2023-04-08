"use strict";(self.webpackChunktraveli_app=self.webpackChunktraveli_app||[]).push([[825],{"./src/components/Icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>IconWithText});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles={wrapper:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    width: 80px;\n    padding: 10px 0;\n    font-size: ",";\n    color: ",";\n    text-align: center;\n    text-decoration: none;\n    background-color: ",";\n    :hover,\n    :focus {\n      color: ",";\n    }\n    p {\n      margin: 12px 0;\n    }\n  "])),theme.r.fontSize.sm,theme.r.color.black,theme.r.color.white,theme.r.color.blue),lines:(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    display: table;\n    width: 100%;\n    /* フォントサイズとともに高さが変わるため */\n    height: 3.6rem;\n    margin: 4px 0 0 0;\n    & > p {\n      display: table-cell;\n      vertical-align: middle;\n    }\n  "])))},__jsx=react.createElement,IconWithText=function IconWithText(_ref){var iconType=_ref.iconType;return __jsx(link_default(),{css:styles.wrapper,href:"/"},"qr"===iconType&&__jsx("div",null,__jsx(hi_index_esm.mPq,{size:24}),__jsx("p",null,"QRコード")),"bell"===iconType&&__jsx("div",null,__jsx(hi_index_esm.Uet,{size:24}),__jsx("p",null,"通知")),"setting"===iconType&&__jsx("div",null,__jsx(hi_index_esm.XlX,{size:24}),__jsx("p",null,"設定")),"help"===iconType&&__jsx("div",null,__jsx(hi_index_esm.cLc,{size:24}),__jsx("p",null,"ヘルプ")),"mail"===iconType&&__jsx("div",null,__jsx(hi_index_esm.Zuw,{size:24}),__jsx("p",null,"お問い合わせ")),"privacy"===iconType&&__jsx("div",null,__jsx(hi_index_esm.c3K,{size:24}),__jsx("div",{css:styles.lines},__jsx("p",null,"プライバシー",__jsx("br",null),"ポリシー"))),"twitter"===iconType&&__jsx("div",null,__jsx(index_esm.Ccr,{size:24}),__jsx("div",{css:styles.lines},__jsx("p",null,"公式",__jsx("br",null),"Twitter"))),"hp"===iconType&&__jsx("div",null,__jsx(hi_index_esm.C1O,{size:24}),__jsx("p",null,"HP")))};IconWithText.displayName="IconWithText",IconWithText.__docgenInfo={description:"",methods:[],displayName:"IconWithText",props:{iconType:{required:!0,tsType:{name:"union",raw:"| 'qr'\n| 'bell'\n| 'setting'\n| 'help'\n| 'mail'\n| 'privacy'\n| 'twitter'\n| 'hp'",elements:[{name:"literal",value:"'qr'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'setting'"},{name:"literal",value:"'help'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'privacy'"},{name:"literal",value:"'twitter'"},{name:"literal",value:"'hp'"}]},description:""}}};try{IconWithText.displayName="IconWithText",IconWithText.__docgenInfo={description:"",displayName:"IconWithText",props:{iconType:{defaultValue:null,description:"",name:"iconType",required:!0,type:{name:"enum",value:[{value:'"qr"'},{value:'"bell"'},{value:'"setting"'},{value:'"help"'},{value:'"mail"'},{value:'"privacy"'},{value:'"twitter"'},{value:'"hp"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/IconWithText.tsx#IconWithText"]={docgenInfo:IconWithText.__docgenInfo,name:"IconWithText",path:"src/components/Icons/IconWithText.tsx#IconWithText"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq});var _styles_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/theme.ts"),mq=function mq(breakpointKey){return"@media (max-width: ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.r.breakpoint[breakpointKey],")")}},"./src/stories/components/Grids/GridIconWithText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>GridIconWithText_stories});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),Icons=__webpack_require__("./src/components/Icons/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),utils=__webpack_require__("./src/styles/utils.ts"),styles={wrapper:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: space-between;\n    max-width: 400px;\n    "," {\n      max-width: 300px;\n    }\n  "])),(0,utils.mq)("sm")),column:(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 3vh;\n  "])))},__jsx=react.createElement,GridIconWithText=function GridIconWithText(){return __jsx("div",{css:styles.wrapper},__jsx("div",{css:styles.column},__jsx(Icons.M,{iconType:"qr"}),__jsx(Icons.M,{iconType:"help"}),__jsx(Icons.M,{iconType:"twitter"})),__jsx("div",{css:styles.column},__jsx(Icons.M,{iconType:"bell"}),__jsx(Icons.M,{iconType:"mail"}),__jsx(Icons.M,{iconType:"hp"})),__jsx("div",{css:styles.column},__jsx(Icons.M,{iconType:"setting"}),__jsx(Icons.M,{iconType:"privacy"})))};GridIconWithText.displayName="GridIconWithText",GridIconWithText.__docgenInfo={description:"",methods:[],displayName:"GridIconWithText"};const GridIconWithText_stories={component:GridIconWithText,tags:["autodocs"]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}}}]);