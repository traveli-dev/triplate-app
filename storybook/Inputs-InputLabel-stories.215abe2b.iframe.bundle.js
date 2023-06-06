"use strict";(self.webpackChunktriplate_app=self.webpackChunktriplate_app||[]).push([[1958],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/Inputs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xf:()=>InputImage,AZ:()=>InputLabel,oH:()=>InputText,zg:()=>InputTextArea});var _templateObject,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles={input:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    box-sizing: border-box;\n    width: 100%;\n    height: 48px;\n    padding: 0 16px;\n    font-size: ",";\n    background-color: ",";\n    border: 0;\n    border-radius: 100px;\n\n    &:hover,\n    &:focus {\n      outline: 2px solid ",";\n    }\n  "])),theme.r.fontSize.md,theme.r.color.bgGray,theme.r.color.outlineGray)},_excluded=["placeholder"],__jsx=react.createElement,InputText=function InputText(_ref){var placeholder=_ref.placeholder,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("input",(0,esm_extends.Z)({css:styles.input,placeholder,type:"text"},props))};InputText.displayName="InputText",InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{placeholder:{required:!0,tsType:{name:"string"},description:""}}};try{InputText.displayName="InputText",InputText.__docgenInfo={description:"",displayName:"InputText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/InputText.tsx#InputText"]={docgenInfo:InputText.__docgenInfo,name:"InputText",path:"src/components/Inputs/InputText.tsx#InputText"})}catch(__react_docgen_typescript_loader_error){}var InputImage_styles_templateObject,_templateObject2,_templateObject3,_templateObject4,InputTextArea_styles_templateObject,next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),InputImage_styles_styles={previewImageWrapper:(0,emotion_react_browser_esm.iv)(InputImage_styles_templateObject||(InputImage_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    height: 136px;\n    overflow: hidden;\n    border-radius: 16px;\n    &:hover,\n    &:focus {\n      border: 2px solid ",";\n    }\n  "])),theme.r.color.outlineGray),previewImage:(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    position: relative !important;\n    object-fit: cover;\n  "]))),hidden:(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    display: none;\n  "]))),uploadImage:(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    height: 136px;\n    font-size: ",";\n    font-weight: bold;\n    color: ",";\n    cursor: pointer;\n    background-color: ",";\n    border: 0;\n    border-radius: 16px;\n    span {\n      display: block;\n      margin: 8px 0 0 0;\n    }\n    &:hover,\n    &:focus {\n      border: 2px solid ",";\n    }\n  "])),theme.r.fontSize.md,theme.r.color.gray,theme.r.color.bgGray,theme.r.color.outlineGray)},InputImage_excluded=["src","uploading"],InputImage_jsx=react.createElement,InputImage=function InputImage(_ref){var src=_ref.src,uploading=_ref.uploading,props=(0,objectWithoutProperties.Z)(_ref,InputImage_excluded),_useInputImage=function useInputImage(){var inputRef=(0,react.useRef)(null);return{inputRef,onClickImage:function onClickImage(){var _inputRef$current;null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.click()}}}(),inputRef=_useInputImage.inputRef,onClickImage=_useInputImage.onClickImage;return InputImage_jsx(react.Fragment,null,InputImage_jsx("input",(0,esm_extends.Z)({accept:"image/*",css:InputImage_styles_styles.hidden,ref:inputRef,type:"file"},props)),src?InputImage_jsx("div",{css:InputImage_styles_styles.previewImageWrapper},InputImage_jsx(image_default(),{alt:"",css:InputImage_styles_styles.previewImage,fill:!0,src})):InputImage_jsx("button",{css:InputImage_styles_styles.uploadImage,onClick:onClickImage},InputImage_jsx(index_esm.tw,{size:24}),uploading&&InputImage_jsx(react.Fragment,null,"ローディング"),InputImage_jsx("span",null,"画像をアップロード")))};InputImage.__docgenInfo={description:"",methods:[],displayName:"InputImage",props:{src:{required:!0,tsType:{name:"string"},description:""},uploading:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"e",type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"}}],return:{name:"void"}}},description:""}}};try{InputImage.displayName="InputImage",InputImage.__docgenInfo={description:"",displayName:"InputImage",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},uploading:{defaultValue:null,description:"",name:"uploading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/InputImage.tsx#InputImage"]={docgenInfo:InputImage.__docgenInfo,name:"InputImage",path:"src/components/Inputs/InputImage.tsx#InputImage"})}catch(__react_docgen_typescript_loader_error){}var InputLabel_styles_templateObject,InputLabel_styles_templateObject2,InputLabel_styles_templateObject3,InputTextArea_styles_styles={textarea:(0,emotion_react_browser_esm.iv)(InputTextArea_styles_templateObject||(InputTextArea_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    box-sizing: border-box;\n    width: 100%;\n    height: 72px;\n    padding: 12px 16px;\n    font-size: ",";\n    line-height: 24px;\n    resize: none;\n    background-color: ",";\n    border: 0;\n    border-radius: 16px;\n\n    &:hover,\n    &:focus {\n      outline: 2px solid ",";\n    }\n  "])),theme.r.fontSize.md,theme.r.color.bgGray,theme.r.color.outlineGray)},InputTextArea_excluded=["placeholder"],InputTextArea_jsx=react.createElement,InputTextArea=function InputTextArea(_ref){var placeholder=_ref.placeholder,props=(0,objectWithoutProperties.Z)(_ref,InputTextArea_excluded);return InputTextArea_jsx("textarea",(0,esm_extends.Z)({css:InputTextArea_styles_styles.textarea,placeholder},props))};InputTextArea.displayName="InputTextArea",InputTextArea.__docgenInfo={description:"",methods:[],displayName:"InputTextArea",props:{placeholder:{required:!0,tsType:{name:"string"},description:""}}};try{InputTextArea.displayName="InputTextArea",InputTextArea.__docgenInfo={description:"",displayName:"InputTextArea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/InputTextArea.tsx#InputTextArea"]={docgenInfo:InputTextArea.__docgenInfo,name:"InputTextArea",path:"src/components/Inputs/InputTextArea.tsx#InputTextArea"})}catch(__react_docgen_typescript_loader_error){}var InputLabel_styles_styles={label:(0,emotion_react_browser_esm.iv)(InputLabel_styles_templateObject||(InputLabel_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: block;\n    font-size: ",";\n    cursor: pointer;\n  "])),theme.r.fontSize.md),subText:(0,emotion_react_browser_esm.iv)(InputLabel_styles_templateObject2||(InputLabel_styles_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    margin-left: 16px;\n    font-size: ",";\n    color: ",";\n  "])),theme.r.fontSize.sm,theme.r.color.gray),childrenWrapper:(0,emotion_react_browser_esm.iv)(InputLabel_styles_templateObject3||(InputLabel_styles_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    margin-top: 8px;\n  "])))},InputLabel_jsx=react.createElement,InputLabel=function InputLabel(_ref){var htmlFor=_ref.htmlFor,children=_ref.children,subText=_ref.subText,text=_ref.text;return InputLabel_jsx("label",{css:InputLabel_styles_styles.label,htmlFor},text,subText&&InputLabel_jsx("span",{css:InputLabel_styles_styles.subText},subText),InputLabel_jsx("div",{css:InputLabel_styles_styles.childrenWrapper},children))};InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",methods:[],displayName:"InputLabel",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},subText:{required:!1,tsType:{name:"string"},description:""}}};try{InputLabel.displayName="InputLabel",InputLabel.__docgenInfo={description:"",displayName:"InputLabel",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Inputs/InputLabel.tsx#InputLabel"]={docgenInfo:InputLabel.__docgenInfo,name:"InputLabel",path:"src/components/Inputs/InputLabel.tsx#InputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/Inputs/InputLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Inputs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Inputs/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={component:_components_Inputs__WEBPACK_IMPORTED_MODULE_1__.AZ,argTypes:{htmlFor:{description:"input要素と紐づけるid"},text:{description:"labelとして表示されるtext"},subText:{description:"灰色で表示される補足情報"},children:{description:"input系の要素"}},tags:["autodocs"]};var Default={args:{htmlFor:"name",text:"表示されるなまえ",subText:"いつでも変更できます",children:__jsx(_components_Inputs__WEBPACK_IMPORTED_MODULE_1__.oH,{id:"name",placeholder:"表示されるなまえを入力"})},parameters:{backgrounds:{default:"white"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    htmlFor: 'name',\n    text: '表示されるなまえ',\n    subText: 'いつでも変更できます',\n    children: __jsx(InputText, {\n      id: \"name\",\n      placeholder: \"\\u8868\\u793A\\u3055\\u308C\\u308B\\u306A\\u307E\\u3048\\u3092\\u5165\\u529B\"\n    })\n  },\n  parameters: {\n    backgrounds: {\n      \"default\": 'white'\n    }\n  }\n}",...Default.parameters?.docs?.source}}}}}]);