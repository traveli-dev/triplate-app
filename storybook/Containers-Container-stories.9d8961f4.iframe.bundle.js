"use strict";(self.webpackChunktriplate_app=self.webpackChunktriplate_app||[]).push([[1802],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/Containers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Container});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles_container=function container(_ref2){var bgColor=_ref2.bgColor,isFull=_ref2.isFull,isCenter=_ref2.isCenter;return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    min-height: ",";\n    padding: 0 16px;\n    text-align: ",";\n    background-color: ",";\n  "])),isFull?"calc(100vh - 56px)":"auto",isCenter?"center":"start",function setBgColor(_ref){var bgColor=_ref.bgColor;return"white"===bgColor?theme.r.color.white:"blue"===bgColor?theme.r.color.bgBlue:"none"===bgColor?"transparent":void 0}({bgColor}))},_excluded=["bgColor","children"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Container=function Container(_ref){var bgColor=_ref.bgColor,children=_ref.children,options=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",{css:styles_container(_objectSpread({bgColor},options))},children)};Container.displayName="Container",Container.__docgenInfo={description:"",methods:[],displayName:"Container",props:{bgColor:{required:!0,tsType:{name:"union",raw:"'white' | 'blue' | 'none'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'none'"}]},description:""},isFull:{required:!1,tsType:{name:"boolean"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"white"'},{value:'"blue"'}]}},isFull:{defaultValue:null,description:"",name:"isFull",required:!1,type:{name:"boolean"}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Containers/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Containers/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/Containers/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Containers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Containers/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={component:_components_Containers__WEBPACK_IMPORTED_MODULE_1__.W,argTypes:{children:{description:"任意のコンポーネントが入ります"},bgColor:{description:"background-colorを切り替える"},isFull:{description:"ページ全体まで高さを伸ばす（任意）"},isCenter:{description:"要素を全て左右中央揃えにする（任意）"}},tags:["autodocs"]};var Default={args:{children:__jsx("h1",null,"Welcome to traveli!"),bgColor:"white",isFull:!1,isCenter:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: __jsx("h1", null, "Welcome to traveli!"),\n    bgColor: \'white\',\n    isFull: false,\n    isCenter: false\n  }\n}',...Default.parameters?.docs?.source}}}}}]);