"use strict";(self.webpackChunktraveli_app=self.webpackChunktraveli_app||[]).push([[321],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/Containers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{W:()=>Container});var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles_container=function container(_ref2){var bgColor=_ref2.bgColor,isFull=_ref2.isFull,isCenter=_ref2.isCenter;return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    min-height: ",";\n    padding: 0 16px;\n    text-align: ",";\n    background-color: ",";\n  "])),isFull?"calc(100vh - 56px)":"auto",isCenter?"center":"start",function setBgColor(_ref){var bgColor=_ref.bgColor;return"white"===bgColor?theme.r.color.white:"blue"===bgColor?theme.r.color.bgBlue:"none"===bgColor?"transparent":void 0}({bgColor}))},_excluded=["bgColor","children"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Container=function Container(_ref){var bgColor=_ref.bgColor,children=_ref.children,options=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",{css:styles_container(_objectSpread({bgColor},options))},children)};Container.displayName="Container",Container.__docgenInfo={description:"",methods:[],displayName:"Container",props:{bgColor:{required:!0,tsType:{name:"union",raw:"'white' | 'blue' | 'none'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'none'"}]},description:""},isFull:{required:!1,tsType:{name:"boolean"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"enum",value:[{value:'"white"'},{value:'"blue"'},{value:'"none"'}]}},isFull:{defaultValue:null,description:"",name:"isFull",required:!1,type:{name:"boolean"}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Containers/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Containers/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/Headers/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithTitle:()=>WithTitle,default:()=>Header_stories});var _templateObject,_templateObject2,_templateObject3,react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),Containers=__webpack_require__("./src/components/Containers/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles={header:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    /* 下に続く要素が重ならないようにする */\n    position: sticky;\n    top: 0;\n    z-index: 999;\n    width: 100%;\n    min-width: ",";\n    max-width: ",";\n    height: 56px;\n    background-color: ",";\n    border-bottom: 2px solid ",";\n  "])),theme.r.breakpoint.sm,theme.r.breakpoint.md,theme.r.color.white,theme.r.color.bgGray),iconWrapper:(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    position: absolute;\n    top: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    color: ",";\n    text-decoration: none;\n    background-color: ",";\n    border-radius: 50%;\n    transform: translateY(-50%);\n    &:hover,\n    &:focus {\n      background-color: ",";\n    }\n  "])),theme.r.color.black,theme.r.color.white,theme.r.color.bgBlue),title:(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    margin: 0;\n    font-size: ",";\n    /* 56px(height) / 16px (font size) */\n    line-height: 3.5;\n    text-align: center;\n  "])),theme.r.fontSize.md)},__jsx=react.createElement,Header=function Header(_ref){var title=_ref.title,href=_ref.href;return __jsx("header",{css:styles.header},__jsx(Containers.W,{bgColor:"none"},__jsx(link_default(),{css:styles.iconWrapper,href},__jsx(index_esm.PSe,{size:24})),title&&__jsx("h1",{css:styles.title},title)))};Header.displayName="Header",Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{href:{required:!0,tsType:{name:"literal",value:"undefined"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"`/${string}`"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Headers/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Headers/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}const Header_stories={component:Header,argTypes:{href:{description:"遷移先の相対パスが入ります"},title:{description:"h1"}},tags:["autodocs"]};var Default={args:{href:"/"}},WithTitle={args:{href:"/",title:"新しいトラベリンクを作成"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: '/'\n  }\n}",...Default.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: '/',\n    title: '新しいトラベリンクを作成'\n  }\n}",...WithTitle.parameters?.docs?.source}}}}}]);