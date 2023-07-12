"use strict";(self.webpackChunktriplate_app=self.webpackChunktriplate_app||[]).push([[5166],{"./src/components/Selects/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>SelectAuthority,K:()=>SelectBase});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),utils=__webpack_require__("./src/styles/utils.ts"),styles={wrapper:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n\n    select {\n      width: 120px;\n      padding: 8px 16px;\n      font-size: ",";\n      text-overflow: ellipsis;\n      cursor: pointer;\n      background: #fff;\n      border: 2px solid ",";\n      border-radius: 100px;\n      &:hover,\n      &:focus {\n        background-color: ",";\n        "," {\n          background-color: ",";\n        }\n      }\n    }\n    &::before {\n      position: absolute;\n      top: 50%;\n      right: 16px;\n      width: 10px;\n      height: 10px;\n      margin-top: -7px;\n      content: '';\n      border: 0;\n      border-right: solid 2px ",";\n      border-bottom: solid 2px ",";\n      transform: rotate(45deg);\n    }\n  "])),theme.r.fontSize.md,theme.r.color.bgGray,theme.r.color.bgGray,(0,utils.mq)("sm"),theme.r.color.white,theme.r.color.gray,theme.r.color.gray)},__jsx=react.createElement,SelectAuthority=function SelectAuthority(_ref){var canEdit=_ref.canEdit;return __jsx("div",{css:styles.wrapper},__jsx("select",{name:"authority"},canEdit?__jsx(react.Fragment,null,__jsx("option",{value:"owner"},"編集可能"),__jsx("option",{value:"noEdit"},"見るだけ")):__jsx(react.Fragment,null,__jsx("option",{value:"noEdit"},"見るだけ"),__jsx("option",{value:"owner"},"編集可能"))))};SelectAuthority.displayName="SelectAuthority",SelectAuthority.__docgenInfo={description:"",methods:[],displayName:"SelectAuthority",props:{canEdit:{required:!0,tsType:{name:"boolean"},description:""}}};try{SelectAuthority.displayName="SelectAuthority",SelectAuthority.__docgenInfo={description:"",displayName:"SelectAuthority",props:{canEdit:{defaultValue:null,description:"",name:"canEdit",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Selects/SelectAuthority.tsx#SelectAuthority"]={docgenInfo:SelectAuthority.__docgenInfo,name:"SelectAuthority",path:"src/components/Selects/SelectAuthority.tsx#SelectAuthority"})}catch(__react_docgen_typescript_loader_error){}var SelectBase_styles_templateObject,_templateObject2,_templateObject3,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),SelectBase_styles_styles={wrapper:(0,emotion_react_browser_esm.iv)(SelectBase_styles_templateObject||(SelectBase_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    vertical-align: middle;\n\n    &::before {\n      position: absolute;\n      top: 50%;\n      right: 16px;\n      width: 10px;\n      height: 10px;\n      margin-top: -7px;\n      content: '';\n      border: 0;\n      border-right: solid 2px ",";\n      border-bottom: solid 2px ",";\n      transform: rotate(45deg);\n    }\n  "])),theme.r.color.gray,theme.r.color.gray),select:function select(isInvalid){return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    padding: 12px 47px 12px 16px;\n    font-size: ",";\n    color: ",";\n    text-overflow: ellipsis;\n    background-color: ",";\n    border-radius: 100px;\n\n    &:hover,\n    &:focus {\n      outline: 2px solid\n        ",";\n    }\n    &:disabled {\n      background-color: ",";\n    }\n  "])),theme.r.fontSize.md,theme.r.color.gray,theme.r.color.bgGray,isInvalid?theme.r.color.red:theme.r.color.outlineGray,theme.r.color.outlineGray)},placeholder:(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    /* placeholderは選択候補に表示させない */\n    display: none;\n  "])))},SelectBase_jsx=react.createElement,SelectBase=function SelectBase(_ref){var placeholder=_ref.placeholder,options=_ref.options,isInvalid=_ref.isInvalid,register=_ref.register,disabled=_ref.disabled;return SelectBase_jsx("div",{css:SelectBase_styles_styles.wrapper},SelectBase_jsx("select",(0,esm_extends.Z)({css:SelectBase_styles_styles.select(isInvalid),disabled},register),SelectBase_jsx("option",{css:SelectBase_styles_styles.placeholder,disabled:!0,value:""},placeholder),options.map((function(option){return SelectBase_jsx("option",{key:option.id,value:option.id},option.name)}))))};SelectBase.displayName="SelectBase",SelectBase.__docgenInfo={description:"",methods:[],displayName:"SelectBase",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},isInvalid:{required:!0,tsType:{name:"boolean"},description:""},register:{required:!0,tsType:{name:"UseFormRegisterReturn"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  name: string\n  id: string\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:"{\n  name: string\n  id: string\n}[]"},description:""}}};try{SelectBase.displayName="SelectBase",SelectBase.__docgenInfo={description:"",displayName:"SelectBase",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!0,type:{name:"boolean"}},register:{defaultValue:null,description:"",name:"register",required:!0,type:{name:"UseFormRegisterReturn<string>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ name: string; id: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Selects/SelectBase.tsx#SelectBase"]={docgenInfo:SelectBase.__docgenInfo,name:"SelectBase",path:"src/components/Selects/SelectBase.tsx#SelectBase"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mq:()=>mq,s:()=>buttonAnimation});var _templateObject,_templateObject2,_home_runner_work_triplate_app_triplate_app_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_styles_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/theme.ts"),mq=function mq(breakpointKey){return"@media (max-width: ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.r.breakpoint[breakpointKey],")")},buttonAnimation=((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject||(_templateObject=(0,_home_runner_work_triplate_app_triplate_app_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  position: relative;\n  @media screen and (prefers-reduced-motion: reduce) {\n    &::before {\n      position: absolute;\n      bottom: -4px;\n      left: 0;\n      width: 100%;\n      height: 2px;\n      content: '';\n      background-color: ",";\n      border-radius: 2px;\n      transition: none;\n      transform: scaleX(0);\n      transform-origin: center;\n    }\n  }\n  &::before {\n    position: absolute;\n    bottom: -4px;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    content: '';\n    background-color: ",";\n    border-radius: 2px;\n    transition: transform 0.3s ease-in-out;\n    transform: scaleX(0);\n    transform-origin: center;\n  }\n  &:hover::before,\n  &:focus::before {\n    transform: scaleX(1);\n    transform-origin: center;\n  }\n"])),_styles_theme__WEBPACK_IMPORTED_MODULE_0__.r.color.hoverBlack,_styles_theme__WEBPACK_IMPORTED_MODULE_0__.r.color.hoverBlack),function buttonAnimation(_ref){var scale=_ref.scale,transition=_ref.transition;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject2||(_templateObject2=(0,_home_runner_work_triplate_app_triplate_app_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  /* 波紋の基点とするためrelativeを指定 */\n  position: relative;\n  /* はみ出す波紋を隠す */\n  overflow: hidden;\n  transition: transform ",";\n  /* 波紋 */\n  @media screen and (prefers-reduced-motion: reduce) {\n    &::after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      content: '';\n      background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat\n        50%;\n      opacity: 0;\n      transition: none;\n      transform: scale(10, 10);\n    }\n  }\n\n  /* 波紋 */\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: '';\n    background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat 50%;\n    opacity: 0;\n    transition: transform 0.3s, opacity 1s;\n    transform: scale(10, 10);\n  }\n\n  @media screen and (prefers-reduced-motion: reduce) {\n    &:active::after {\n      opacity: 0.3;\n      transition: none;\n      transform: scale(0, 0);\n    }\n  }\n\n  &:active::after {\n    opacity: 0.3;\n    transition: 0s;\n    transform: scale(0, 0);\n  }\n\n  "," {\n    &:active {\n      transform: scale(",");\n    }\n  }\n"])),transition,mq("sm"),scale)})},"./src/stories/components/Selects/SelectBase.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/Selects/index.ts").K,argTypes:{placeholder:{description:"placeholder"},options:{description:"idとnameの配列 nameが表示されidで選択"},register:{description:"react hook formのregister"}},tags:["autodocs"]};var Default={args:{placeholder:"たびを選択",options:[{name:"かだといそのうら",id:"9bcecdd8-fed9-4d72-8a40-b54c7b9ec05b"},{name:"和歌山市ラーメン巡り",id:"b533283c-adde-4107-aa0a-943ddccb5278"},{name:"神社巡り",id:"b21323a4-05f8-42db-9ce7-a2f29946595f"},{name:"海遊館",id:"a0bf63a0-0367-11ee-be56-0242ac120002"}]},parameters:{backgrounds:{default:"white"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'たびを選択',\n    options: [{\n      name: 'かだといそのうら',\n      id: '9bcecdd8-fed9-4d72-8a40-b54c7b9ec05b'\n    }, {\n      name: '和歌山市ラーメン巡り',\n      id: 'b533283c-adde-4107-aa0a-943ddccb5278'\n    }, {\n      name: '神社巡り',\n      id: 'b21323a4-05f8-42db-9ce7-a2f29946595f'\n    }, {\n      name: '海遊館',\n      id: 'a0bf63a0-0367-11ee-be56-0242ac120002'\n    }]\n  },\n  parameters: {\n    backgrounds: {\n      \"default\": 'white'\n    }\n  }\n}",...Default.parameters?.docs?.source}}}}}]);