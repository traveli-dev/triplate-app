"use strict";(self.webpackChunktriplate_app=self.webpackChunktriplate_app||[]).push([[1773],{"./src/components/Cards/CardMemo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>CardMemo});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles={memoWrapper:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    padding: 20px 24px;\n    background-color: ",";\n    border-radius: 16px;\n  "])),theme.r.color.bgGray),memo:(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 0;\n    list-style: none;\n    li {\n      display: flex;\n      font-size: ",";\n    }\n  "])),theme.r.fontSize.md),title:(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    flex-grow: 1;\n    font-weight: bold;\n    /* width: 70px; */\n    text-align: start;\n  "]))),item:(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 2;\n    gap: 4px;\n    text-align: end;\n    li > label {\n      flex-grow: 1;\n      line-height: 25px;\n    }\n  "]))),checkbox:(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    margin: 0;\n    background: #fff;\n    border: 2px solid ",";\n    border-radius: 8px;\n    -webkit-appearance: none;\n    appearance: none;\n    &:checked {\n      background: ",";\n      border: none;\n      &::before,\n      ::after {\n        position: absolute;\n        display: block;\n        content: '';\n        background: #fff;\n        border-radius: 2px;\n        transform: rotate(45deg);\n      }\n      &::before {\n        bottom: 9px;\n        left: 6px;\n        width: 6px;\n        height: 3px;\n      }\n      &::after {\n        bottom: 6px;\n        left: 13px;\n        width: 3px;\n        height: 12px;\n      }\n    }\n  "])),theme.r.color.gray,theme.r.color.black)},__jsx=react.createElement,CardMemo=function CardMemo(_ref){var data=_ref.data,_useCardMemo=function useCardMemo(id){var _useState=(0,react.useState)([]),checkedData=_useState[0],setCheckedData=_useState[1],getCheckedList=function getCheckedList(){var data=localStorage.getItem(id);return data?data.split(","):[]};return(0,react.useEffect)((function(){var checkedList=getCheckedList();setCheckedData(checkedList)}),[]),{checkedData,setCheckedData,updateCheckedList:function updateCheckedList(list){localStorage.setItem(id,list.toString())},createCheckedList:function createCheckedList(index){var checkedList=getCheckedList();return checkedList?checkedList.includes(index)?checkedList.filter((function(checked){return checked!==index})):(checkedList.push(index.toString()),checkedList):[index]}}}(data.id),checkedData=_useCardMemo.checkedData,setCheckedData=_useCardMemo.setCheckedData,updateCheckedList=_useCardMemo.updateCheckedList,createCheckedList=_useCardMemo.createCheckedList;return __jsx("div",{css:styles.memoWrapper},__jsx("ul",{css:styles.memo},__jsx("li",null,__jsx("p",{css:styles.title},"持ち物"),__jsx("ul",{css:styles.item},data.items.length?data.items.map((function(item,index){return __jsx("li",{key:index},__jsx("input",{checked:checkedData.includes(index.toString()),css:styles.checkbox,id:"item".concat(index),type:"checkbox",onChange:function onChange(){var newList=createCheckedList(index.toString());updateCheckedList(newList),setCheckedData(newList)}}),__jsx("label",{htmlFor:"item".concat(index)}," ",item))})):"ー")),__jsx("li",null,__jsx("p",{css:styles.title},"予算"),__jsx("p",{css:styles.item},data.budget?__jsx(react.Fragment,null,data.budget,"円"):"０円")),__jsx("li",null,__jsx("p",{css:styles.title},"メモ"),__jsx("p",{css:styles.item},data.memo?data.memo:"ー"))))};CardMemo.displayName="CardMemo",CardMemo.__docgenInfo={description:"",methods:[],displayName:"CardMemo",props:{data:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  id: string\n  budget: string\n  items: string[]\n  memo: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"budget",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"memo",value:{name:"string",required:!0}}]}},description:""}}};try{CardMemo.displayName="CardMemo",CardMemo.__docgenInfo={description:"",displayName:"CardMemo",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ id: string; budget: string; items: string[]; memo: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardMemo.tsx#CardMemo"]={docgenInfo:CardMemo.__docgenInfo,name:"CardMemo",path:"src/components/Cards/CardMemo.tsx#CardMemo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Cards/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vl:()=>CardMemo.V,Tv:()=>CardTripListItem,X8:()=>CardTriplink});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),styles={wrapper:(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: block;\n    width: 100%;\n    text-decoration: none;\n    cursor: pointer;\n    transition: opacity 0.3s 0s ease;\n    &:hover,\n    &:focus {\n      opacity: 0.9;\n    }\n  "]))),imgWrapper:function imgWrapper(isGrid){return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    width: 100%;\n    height: ",";\n    margin: 0 auto;\n    overflow: hidden;\n    border: 1px solid ",";\n    border-radius: ",";\n  "])),isGrid?"100%":"171px",theme.r.color.bgGray,isGrid?"32px":"16px")},imgSquare:(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    /* 正方形を維持する */\n    &::before {\n      display: block;\n      padding-top: 100%;\n      content: '';\n    }\n  "]))),img:(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    object-fit: cover;\n    display: block;\n  "]))),title:function title(isGrid){return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    font-size: ",";\n    font-weight: 600;\n  "])),isGrid?theme.r.fontSize.sm:theme.r.fontSize.md)},description:function description(isGrid){return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    margin-top: 16px;\n    margin-left: ",";\n    text-align: ",";\n  "])),isGrid?"0":"14px",isGrid?"center":"start")},date:function date(isGrid){return(0,emotion_react_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    margin-top: ",";\n    font-size: ",";\n    color: ",";\n  "])),isGrid?"6px":"8px",theme.r.fontSize.xs,theme.r.color.gray)}},__jsx=react.createElement,CardTriplink=function CardTriplink(_ref){var data=_ref.data,isGrid=_ref.isGrid;return __jsx("div",{css:styles.wrapper},__jsx("div",{css:[styles.imgWrapper(isGrid),isGrid&&styles.imgSquare]},__jsx(image_default(),{alt:"",css:styles.img,fill:!0,src:data.thumbnail})),__jsx("div",{css:styles.description(isGrid)},__jsx("h2",{css:styles.title(isGrid)},data.title),__jsx("p",{css:styles.date(isGrid)},data.date)))};CardTriplink.displayName="CardTriplink",CardTriplink.__docgenInfo={description:"",methods:[],displayName:"CardTriplink",props:{isGrid:{required:!0,tsType:{name:"boolean"},description:""},data:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  thumbnail: string\n  date?: [string, string]\n  title: string\n}",signature:{properties:[{key:"thumbnail",value:{name:"string",required:!0}},{key:"date",value:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}],required:!1}},{key:"title",value:{name:"string",required:!0}}]}},description:""}}};try{CardTriplink.displayName="CardTriplink",CardTriplink.__docgenInfo={description:"",displayName:"CardTriplink",props:{isGrid:{defaultValue:null,description:"",name:"isGrid",required:!0,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ thumbnail: string; date?: [string, string] | undefined; title: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardTriplink.tsx#CardTriplink"]={docgenInfo:CardTriplink.__docgenInfo,name:"CardTriplink",path:"src/components/Cards/CardTriplink.tsx#CardTriplink"})}catch(__react_docgen_typescript_loader_error){}var CardTripListItem_styles_templateObject,CardTripListItem_styles_templateObject2,CardTripListItem_styles_templateObject3,CardTripListItem_styles_templateObject4,CardTripListItem_styles_templateObject5,CardTripListItem_styles_templateObject6,CardTripListItem_styles_templateObject7,CardMemo=__webpack_require__("./src/components/Cards/CardMemo.tsx"),index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),CardTripListItem_styles_styles={item:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject||(CardTripListItem_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 64px;\n    cursor: pointer;\n    background-color: ",";\n    border-radius: 100px;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.04);\n  "])),theme.r.color.white),values:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject2||(CardTripListItem_styles_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    color: ",";\n  "])),theme.r.color.black),icon:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject3||(CardTripListItem_styles_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    margin-right: 28px;\n    margin-left: 24px;\n  "]))),title:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject4||(CardTripListItem_styles_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    font-size: ",";\n    font-weight: 600;\n  "])),theme.r.fontSize.md),sub:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject5||(CardTripListItem_styles_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    gap: 24px;\n    margin-top: 6px;\n  "]))),textWithIcon:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject6||(CardTripListItem_styles_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n    font-size: ",";\n  "])),theme.r.fontSize.sm),iconSmall:(0,emotion_react_browser_esm.iv)(CardTripListItem_styles_templateObject7||(CardTripListItem_styles_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    margin-right: 8px;\n  "])))},CardTripListItem_jsx=react.createElement,CardTripListItem=function CardTripListItem(_ref){var icon=_ref.icon,title=_ref.title,date=_ref.date,memo=_ref.memo;return CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.item},CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.icon},"map"==icon&&CardTripListItem_jsx(image_default(),{alt:"",height:24,src:"/linkIcon/linkIcon_pin.svg",width:24}),"link"==icon&&CardTripListItem_jsx(image_default(),{alt:"",height:24,src:"/linkIcon/linkIcon_link.svg",width:24}),"ledger"==icon&&CardTripListItem_jsx(image_default(),{alt:"",height:24,src:"/linkIcon/linkIcon_ledger.svg",width:24})),CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.values},CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.title},title),CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.sub},date&&CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.textWithIcon},CardTripListItem_jsx(index_esm.XoX,{css:CardTripListItem_styles_styles.iconSmall,size:16}),CardTripListItem_jsx("p",null,date)),memo&&CardTripListItem_jsx("div",{css:CardTripListItem_styles_styles.textWithIcon},CardTripListItem_jsx(index_esm.vrJ,{css:CardTripListItem_styles_styles.iconSmall,size:16}),CardTripListItem_jsx("p",null,memo)))))};CardTripListItem.displayName="CardTripListItem",CardTripListItem.__docgenInfo={description:"",methods:[],displayName:"CardTripListItem",props:{icon:{required:!0,tsType:{name:"union",raw:"'map' | 'link' | 'ledger'",elements:[{name:"literal",value:"'map'"},{name:"literal",value:"'link'"},{name:"literal",value:"'ledger'"}]},description:""},title:{required:!0,tsType:{name:"string"},description:""},date:{required:!1,tsType:{name:"string"},description:""},memo:{required:!1,tsType:{name:"string"},description:""}}};try{CardTripListItem.displayName="CardTripListItem",CardTripListItem.__docgenInfo={description:"",displayName:"CardTripListItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"map"'},{value:'"ledger"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},memo:{defaultValue:null,description:"",name:"memo",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardTripListItem.tsx#CardTripListItem"]={docgenInfo:CardTripListItem.__docgenInfo,name:"CardTripListItem",path:"src/components/Cards/CardTripListItem.tsx#CardTripListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/Cards/CardTripListItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithoutDetails:()=>WithoutDetails,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/Cards/index.ts").Tv,argTypes:{icon:{description:"アイコンのタイプが入ります"},title:{description:"タイトルが入ります"},date:{description:"時間が入ります"},memo:{description:"テキストが入ります"}},tags:["autodocs"]};var Default={args:{icon:"link",title:"タイトル",date:"00:00",memo:"テキストが入ります"},parameters:{viewport:{defaultViewport:"pc"}}},WithoutDetails={args:{icon:"link",title:"タイトル"},parameters:{viewport:{defaultViewport:"pc"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'link',\n    title: 'タイトル',\n    date: '00:00',\n    memo: 'テキストが入ります'\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'pc'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},WithoutDetails.parameters={...WithoutDetails.parameters,docs:{...WithoutDetails.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'link',\n    title: 'タイトル'\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: 'pc'\n    }\n  }\n}",...WithoutDetails.parameters?.docs?.source}}}}}]);