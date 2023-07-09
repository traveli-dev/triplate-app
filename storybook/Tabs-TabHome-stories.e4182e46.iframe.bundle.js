"use strict";(self.webpackChunktriplate_app=self.webpackChunktriplate_app||[]).push([[2034],{"./src/stories/components/Tabs/TabHome.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoData:()=>NoData,default:()=>TabHome_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,Tab_styles_templateObject,index_esm=__webpack_require__("./node_modules/firebase/firestore/dist/esm/index.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),Cards=__webpack_require__("./src/components/Cards/index.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),utils=__webpack_require__("./src/styles/utils.ts"),styles={grid:function grid(isGrid){return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: grid;\n    grid-template-columns: ",";\n    gap: 32px 16px;\n    width: 100%;\n    "," {\n      grid-template-columns: ",";\n    }\n  "])),isGrid?"1fr 1fr 1fr":"1fr",(0,utils.mq)("sm"),isGrid?"1fr 1fr":"1fr")},layoutCardTriplink:(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    margin-bottom: 32px;\n  "]))),tabsWrapper:(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 16px;\n  "]))),buttonGrid:(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    color: ",";\n    background-color: transparent;\n    border: none;\n    &:hover {\n      color: ",";\n    }\n    &:focus {\n      color: ",";\n    }\n  "])),theme.r.color.black,theme.r.color.blue,theme.r.color.black),tabs:(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    width: 100%;\n    height: 34px;\n    & input[type='radio'] {\n      /* ラジオボタン消す */\n      display: none;\n\n      /* tab */\n      @media screen and (prefers-reduced-motion: reduce) {\n        & + span {\n          display: inline-block;\n          padding: 6px 12px;\n          margin-right: 8px;\n          font-size: ",";\n          text-align: center;\n          cursor: pointer;\n          background-color: ",";\n          border: 2px solid ",";\n          border-radius: 100px;\n          transition: none;\n\n          &:hover,\n          &:focus {\n            background-color: ",";\n          }\n        }\n      }\n      & + span {\n        display: inline-block;\n        padding: 6px 12px;\n        margin-right: 8px;\n        font-size: ",";\n        text-align: center;\n        cursor: pointer;\n        background-color: ",";\n        border: 2px solid ",";\n        border-radius: 100px;\n        transition: all 0.3s 0s ease;\n\n        &:hover,\n        &:focus {\n          background-color: ",";\n        }\n      }\n\n      &:checked + span {\n        color: ",";\n        background-color: ",";\n        border: 2px solid ",";\n      }\n    }\n  "])),theme.r.fontSize.md,theme.r.color.white,theme.r.color.outlineGray,theme.r.color.bgGray,theme.r.fontSize.md,theme.r.color.white,theme.r.color.outlineGray,theme.r.color.bgGray,theme.r.color.white,theme.r.color.black,theme.r.color.black)},__jsx=react.createElement,TabHome=function TabHome(_ref){var myTriplinksData=_ref.myTriplinksData,joinTriplinksData=_ref.joinTriplinksData,favoriteTriplinksData=_ref.favoriteTriplinksData,_useState=(0,react.useState)("all"),value=_useState[0],setValue=_useState[1],_useState2=(0,react.useState)(!1),isGrid=_useState2[0],setIsGrid=_useState2[1],formattedMyTriplinksData=myTriplinksData.map((function(_ref2){return{thumbnail:_ref2.thumbnail,date:_ref2.date,title:_ref2.title,id:_ref2.id}})),formattedJoinTriplinksData=joinTriplinksData.map((function(_ref3){return{thumbnail:_ref3.thumbnail,date:_ref3.date,title:_ref3.title,id:_ref3.id}})),formattedFavoriteTriplinksData=favoriteTriplinksData.map((function(_ref4){return{thumbnail:_ref4.thumbnail,date:_ref4.date,title:_ref4.title,id:_ref4.id}}));return __jsx(react.Fragment,null,__jsx("div",{css:styles.tabsWrapper},__jsx("div",{css:styles.tabs},__jsx("label",null,__jsx("input",{defaultChecked:!0,name:"tab",type:"radio",value:"all",onChange:function onChange(e){setValue(e.target.value)}}),__jsx("span",null,"すべて")),__jsx("label",null,__jsx("input",{name:"tab",type:"radio",value:"join",onChange:function onChange(e){setValue(e.target.value)}}),__jsx("span",null,"参加中")),__jsx("label",null,__jsx("input",{name:"tab",type:"radio",value:"favorite",onChange:function onChange(e){setValue(e.target.value)}}),__jsx("span",null,"いいね"))),__jsx("button",{css:styles.buttonGrid,onClick:function onClick(){setIsGrid(!isGrid)}},__jsx(isGrid?hi_index_esm.O5k:hi_index_esm.nA8,{size:20}))),"all"===value&&__jsx("div",null,formattedMyTriplinksData.length?__jsx("div",{css:styles.grid(isGrid)},formattedMyTriplinksData.map((function(triplink){return __jsx(link_default(),{href:"/triplink/".concat(triplink.id),key:triplink.id},__jsx(Cards.X8,{data:triplink,isGrid}))}))):__jsx("p",null,"トラべリンクがないです")),"join"===value&&__jsx("div",null,formattedJoinTriplinksData.length?__jsx("div",{css:styles.grid(isGrid)},formattedJoinTriplinksData.map((function(triplink){return __jsx(link_default(),{href:"/triplink/".concat(triplink.id),key:triplink.id},__jsx(Cards.X8,{data:triplink,isGrid}))}))):__jsx("p",null,"トラべリンクがないです")),"favorite"===value&&__jsx("div",null,formattedFavoriteTriplinksData.length?__jsx("div",{css:styles.grid(isGrid)},formattedFavoriteTriplinksData.map((function(triplink){return __jsx(link_default(),{href:"/triplink/".concat(triplink.id),key:triplink.id},__jsx(Cards.X8,{data:triplink,isGrid}))}))):__jsx("p",null,"トラべリンクがないです")))};TabHome.__docgenInfo={description:"",methods:[],displayName:"TabHome",props:{myTriplinksData:{required:!0,tsType:{name:"Array",elements:[{name:"GetTriplinkType"}],raw:"GetTriplinkType[]"},description:""},joinTriplinksData:{required:!0,tsType:{name:"Array",elements:[{name:"GetTriplinkType"}],raw:"GetTriplinkType[]"},description:""},favoriteTriplinksData:{required:!0,tsType:{name:"Array",elements:[{name:"GetTriplinkType"}],raw:"GetTriplinkType[]"},description:""}}};try{TabHome.displayName="TabHome",TabHome.__docgenInfo={description:"",displayName:"TabHome",props:{myTriplinksData:{defaultValue:null,description:"",name:"myTriplinksData",required:!0,type:{name:"GetTriplinkType[]"}},joinTriplinksData:{defaultValue:null,description:"",name:"joinTriplinksData",required:!0,type:{name:"GetTriplinkType[]"}},favoriteTriplinksData:{defaultValue:null,description:"",name:"favoriteTriplinksData",required:!0,type:{name:"GetTriplinkType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabHome.tsx#TabHome"]={docgenInfo:TabHome.__docgenInfo,name:"TabHome",path:"src/components/Tabs/TabHome.tsx#TabHome"})}catch(__react_docgen_typescript_loader_error){}var Tabs_styles_templateObject,Tab_styles_styles_tab=function tab(type){return(0,emotion_react_browser_esm.iv)(Tab_styles_templateObject||(Tab_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    flex-shrink: 0;\n    width: 88px;\n    padding: ",";\n    font-size: ",";\n    background-color: ",";\n    border: none;\n    scroll-snap-align: start;\n\n    &[aria-selected='true'] {\n      &::after {\n        position: absolute;\n        right: 0;\n        bottom: 0px;\n        left: 0;\n        width: ",";\n        height: ",";\n        margin: 0 auto;\n        content: '';\n        background-color: ",";\n        border-radius: 4px;\n      }\n      font-weight: bold;\n    }\n    &[aria-selected='false'] {\n      &:hover,\n      &:focus {\n        color: ",";\n        cursor: pointer;\n        background-color: ",";\n      }\n    }\n  "])),"triplink"===type?"12px":"64px 12px 12px 12px",theme.r.fontSize.sm,theme.r.color.white,"triplink"===type?"88px":"8px","triplink"===type?"3px":"4px",theme.r.color.black,"triplink"===type?theme.r.color.black:theme.r.color.gray700,"triplink"===type?theme.r.color.bgGray:theme.r.color.white)},Tab_jsx=react.createElement,Tab=function Tab(_ref){var tabName=_ref.tabName,focusedTab=_ref.focusedTab,children=_ref.children,selectedTab=_ref.selectedTab,handleTabClick=_ref.handleTabClick,type=_ref.type;return Tab_jsx("button",{"aria-controls":tabName,"aria-selected":selectedTab===tabName,css:Tab_styles_styles_tab(type),id:tabName,role:"tab",tabIndex:focusedTab===tabName?0:-1,onClick:function onClick(){return handleTabClick(tabName)}},children)};Tab.displayName="Tab",Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tabName:{required:!0,tsType:{name:"literal",value:"undefined"},description:""},selectedTab:{required:!0,tsType:{name:"literal",value:"undefined"},description:""},focusedTab:{required:!0,tsType:{name:"literal",value:"undefined"},description:""},type:{required:!0,tsType:{name:"TabType"},description:""},handleTabClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabName: `tab-${number}`) => void",signature:{arguments:[{name:"tabName",type:{name:"literal",value:"undefined"}}],return:{name:"void"}}},description:""}}};try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{tabName:{defaultValue:null,description:"",name:"tabName",required:!0,type:{name:"`tab-${number}`"}},selectedTab:{defaultValue:null,description:"",name:"selectedTab",required:!0,type:{name:"`tab-${number}`"}},focusedTab:{defaultValue:null,description:"",name:"focusedTab",required:!0,type:{name:"`tab-${number}`"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"triplink"'},{value:'"triplate"'}]}},handleTabClick:{defaultValue:null,description:"",name:"handleTabClick",required:!0,type:{name:"(tabName: `tab-${number}`) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}var TabPanel_styles_templateObject,Tabs_styles_styles={tabs:(0,emotion_react_browser_esm.iv)(Tabs_styles_templateObject||(Tabs_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    background-color: ",";\n  "])),theme.r.color.white)},Tabs_jsx=react.createElement,Tabs=function Tabs(_ref){var children=_ref.children;return Tabs_jsx("div",{css:Tabs_styles_styles.tabs},children)};Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var TabList_styles_templateObject,TabList_styles_templateObject2,TabPanel_styles_styles_tabPanel=function tabPanel(type){return(0,emotion_react_browser_esm.iv)(TabPanel_styles_templateObject||(TabPanel_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    padding: ",";\n    background-color: ",";\n  "])),"triplink"===type?"16px":"16px 0","triplink"===type?theme.r.color.bgGray:theme.r.color.white)},TabPanel_jsx=react.createElement,TabPanel=function TabPanel(_ref){var tabName=_ref.tabName,selectedTab=_ref.selectedTab,panelName=_ref.panelName,children=_ref.children,type=_ref.type;return TabPanel_jsx("div",{"aria-labelledby":tabName,css:TabPanel_styles_styles_tabPanel(type),hidden:selectedTab!==tabName,id:panelName,role:"tabpanel",tabIndex:0},children)};TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{panelName:{required:!0,tsType:{name:"string"},description:""},tabName:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},selectedTab:{required:!0,tsType:{name:"literal",value:"undefined"},description:""},type:{required:!0,tsType:{name:"TabType"},description:""}}};try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{panelName:{defaultValue:null,description:"",name:"panelName",required:!0,type:{name:"string"}},tabName:{defaultValue:null,description:"",name:"tabName",required:!0,type:{name:"string"}},selectedTab:{defaultValue:null,description:"",name:"selectedTab",required:!0,type:{name:"`tab-${string}`"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"triplink"'},{value:'"triplate"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabPanel.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"src/components/Tabs/TabPanel.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}var TabList_styles_styles={tabList:(0,emotion_react_browser_esm.iv)(TabList_styles_templateObject||(TabList_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    width: fit-content;\n    max-width: 100%;\n    margin: 0 auto;\n    overflow-x: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-padding-inline: 32px;\n    scroll-behavior: smooth;\n  "]))),tabListWrapper:function tabListWrapper(type){return(0,emotion_react_browser_esm.iv)(TabList_styles_templateObject2||(TabList_styles_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    border-bottom: "," solid\n      ",";\n  "])),"triplink"===type?"2px":"0px",theme.r.color.outlineGray)}},TabList_jsx=react.createElement,TabList=(0,react.forwardRef)((function(_ref,ref){var children=_ref.children,type=_ref.type;return TabList_jsx("div",{css:TabList_styles_styles.tabListWrapper(type)},TabList_jsx("div",{css:TabList_styles_styles.tabList,ref,role:"tablist"},children))}));TabList.displayName="TabList",TabList.__docgenInfo={description:"",methods:[],displayName:"TabList"};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"triplink"'},{value:'"triplate"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabList.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"src/components/Tabs/TabList.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}var TabTriplink_styles_templateObject,getTabIndex=function getTabIndex(tabName){var t=tabName.replace("tab-","");return parseInt(t)},useTabNavigation=function useTabNavigation(tabLength){var _useState=(0,react.useState)("tab-0"),selectedTab=_useState[0],setSelectedTab=_useState[1],_useState2=(0,react.useState)("tab-0"),focusedTab=_useState2[0],setFocusedTab=_useState2[1],tabListRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(null!==tabListRef.current){var currentTabList=tabListRef.current,handleKeyDown=function handleKeyDown(e){var tabIndex=getTabIndex(focusedTab);"ArrowLeft"===e.key?tabIndex>=1&&tabIndex--:"ArrowRight"===e.key&&tabIndex<tabLength-1&&tabIndex++,setFocusedTab("tab-".concat(tabIndex));var nextFocusTab=currentTabList.children[tabIndex];nextFocusTab instanceof HTMLButtonElement&&nextFocusTab.focus()};return currentTabList.addEventListener("keydown",handleKeyDown),function(){currentTabList.removeEventListener("keydown",handleKeyDown)}}}),[focusedTab,tabListRef]),{focusedTab,tabListRef,handleTabClick:function handleTabClick(tabName){setSelectedTab(tabName),setFocusedTab(tabName),function scrollToTab(tabName){if(null!==tabListRef.current){var currentTabList=tabListRef.current,tabIndex=getTabIndex(tabName);currentTabList.children[tabIndex].scrollIntoView({behavior:"smooth",inline:"nearest"})}}(tabName)},selectedTab}},TabTriplink_styles_styles={layoutCardTripListItem:(0,emotion_react_browser_esm.iv)(TabTriplink_styles_templateObject||(TabTriplink_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    margin-bottom: 16px;\n  "])))},TabTriplink_jsx=react.createElement,TabTriplink=function TabTriplink(_ref){var triplinks=_ref.triplinks,tabLength=Object.keys(triplinks).length,_useTabNavigation=useTabNavigation(tabLength),focusedTab=_useTabNavigation.focusedTab,tabListRef=_useTabNavigation.tabListRef,handleTabClick=_useTabNavigation.handleTabClick,selectedTab=_useTabNavigation.selectedTab;return TabTriplink_jsx(Tabs,null,TabTriplink_jsx(TabList,{ref:tabListRef,type:"triplink"},Object.keys(triplinks).map((function(_,index){return TabTriplink_jsx(Tab,{focusedTab,handleTabClick,key:index,selectedTab,tabName:"tab-".concat(index),type:"triplink"},index+1,"日目")}))),Object.values(triplinks).map((function(value,index){return TabTriplink_jsx(TabPanel,{key:index,panelName:"day-".concat(index+1),selectedTab,tabName:"tab-".concat(index),type:"triplink"},value.map((function(plan,index){return TabTriplink_jsx("div",{css:TabTriplink_styles_styles.layoutCardTripListItem,key:index},TabTriplink_jsx(Cards.Tv,{date:null,icon:"map",memo:plan.memo,title:plan.name}))})))})))};TabTriplink.displayName="TabTriplink",TabTriplink.__docgenInfo={description:"",methods:[],displayName:"TabTriplink",props:{triplinks:{required:!0,tsType:{name:"TriplinkType['itineraries']",raw:"TriplinkType['itineraries']"},description:""}}};try{TabTriplink.displayName="TabTriplink",TabTriplink.__docgenInfo={description:"",displayName:"TabTriplink",props:{triplinks:{defaultValue:null,description:"",name:"triplinks",required:!0,type:{name:"{ [key: `day${number}`]: { id: number; isSecret: boolean; url: string | null; name: string; time: Timestamp | null; memo: string | null; }[]; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabTriplink.tsx#TabTriplink"]={docgenInfo:TabTriplink.__docgenInfo,name:"TabTriplink",path:"src/components/Tabs/TabTriplink.tsx#TabTriplink"})}catch(__react_docgen_typescript_loader_error){}var TabTriplate_styles_templateObject,TabTriplate_styles_templateObject2,TabTriplate_styles_templateObject3,TabTriplate_styles_templateObject4,TabTriplate_styles_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),Buttons=__webpack_require__("./src/components/Buttons/index.ts"),TabTriplate_styles_styles={thumbnail:(0,emotion_react_browser_esm.iv)(TabTriplate_styles_templateObject||(TabTriplate_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n    object-fit: cover;\n    border-radius: 24px;\n  "]))),imgWrapper:(0,emotion_react_browser_esm.iv)(TabTriplate_styles_templateObject2||(TabTriplate_styles_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    width: 100%;\n    aspect-ratio: 2/1;\n    "," {\n      aspect-ratio: 1/1;\n    }\n  "])),(0,utils.mq)("sm")),descriptionWrapper:(0,emotion_react_browser_esm.iv)(TabTriplate_styles_templateObject3||(TabTriplate_styles_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    padding: 16px;\n    margin-top: 16px;\n    border: 1px solid ",";\n    border-radius: 16px;\n  "])),theme.r.color.outlineGray),tag:(0,emotion_react_browser_esm.iv)(TabTriplate_styles_templateObject4||(TabTriplate_styles_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n    p {\n      margin-left: 8px;\n      font-size: ",";\n      font-weight: 600;\n    }\n  "])),theme.r.fontSize.md),description:(0,emotion_react_browser_esm.iv)(TabTriplate_styles_templateObject5||(TabTriplate_styles_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    margin: 10px 0;\n    font-size: ",";\n  "])),theme.r.fontSize.sm),linkButton:(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n  "]))),day:(0,emotion_react_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    margin-bottom: 16px;\n    font-size: ",";\n    font-weight: 600;\n    letter-spacing: 0.1em;\n  "])),theme.r.fontSize.lg),layoutCardTripListItem:(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n    margin-bottom: 16px;\n  "]))),cardTripListItemWrapper:(0,emotion_react_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    padding: 16px;\n    margin-top: 32px;\n    background-color: ",";\n    border-radius: 16px;\n  "])),theme.r.color.bgGray)},TabTriplate_jsx=react.createElement,TabTriplate=function TabTriplate(_ref){var itineraries=_ref.itineraries,memories=_ref.memories,tabLength=Object.keys(itineraries).length,_useTabNavigation=useTabNavigation(tabLength),focusedTab=_useTabNavigation.focusedTab,tabListRef=_useTabNavigation.tabListRef,handleTabClick=_useTabNavigation.handleTabClick,selectedTab=_useTabNavigation.selectedTab;return TabTriplate_jsx(Tabs,null,TabTriplate_jsx(TabList,{ref:tabListRef,type:"triplate"},Object.keys(itineraries).map((function(_,index){return TabTriplate_jsx(Tab,{focusedTab,handleTabClick,key:index,selectedTab,tabName:"tab-".concat(index),type:"triplate"},index+1,"日目")}))),Object.values(itineraries).map((function(value,index){var _memories$thumbnail,_memories$itineraryId;return TabTriplate_jsx(TabPanel,{key:index,panelName:"day-".concat(index+1),selectedTab,tabName:"tab-".concat(index),type:"triplate"},memories["day".concat(index+1)]&&TabTriplate_jsx(react.Fragment,null,TabTriplate_jsx("div",{css:TabTriplate_styles_styles.imgWrapper},TabTriplate_jsx(image_default(),{alt:"",css:TabTriplate_styles_styles.thumbnail,fill:!0,src:null!==(_memories$thumbnail=memories["day".concat(index+1)].thumbnail)&&void 0!==_memories$thumbnail?_memories$thumbnail:""})),TabTriplate_jsx("div",{css:TabTriplate_styles_styles.descriptionWrapper},TabTriplate_jsx("div",{css:TabTriplate_styles_styles.tag},TabTriplate_jsx(hi_index_esm.sAB,{size:20}),TabTriplate_jsx("p",null,value[null!==(_memories$itineraryId=memories["day".concat(index+1)].itineraryId)&&void 0!==_memories$itineraryId?_memories$itineraryId:0].name)),TabTriplate_jsx("p",{css:TabTriplate_styles_styles.description},memories["day".concat(index+1)].description),TabTriplate_jsx("div",{css:TabTriplate_styles_styles.linkButton},TabTriplate_jsx(Buttons.$q,{Icon:hi_index_esm.iDf,isFit:!0},"Google Map")))),TabTriplate_jsx("div",{css:TabTriplate_styles_styles.cardTripListItemWrapper},TabTriplate_jsx("h2",{css:TabTriplate_styles_styles.day},"Day".concat(index+1,"の旅程")),value.map((function(plan,index){return TabTriplate_jsx("div",{css:TabTriplate_styles_styles.layoutCardTripListItem,key:index},TabTriplate_jsx(Cards.Tv,{date:null,icon:"map",memo:plan.memo,title:plan.name}))}))))})))};TabTriplate.displayName="TabTriplate",TabTriplate.__docgenInfo={description:"",methods:[],displayName:"TabTriplate",props:{itineraries:{required:!0,tsType:{name:"TriplateType['itineraries']",raw:"TriplateType['itineraries']"},description:""},memories:{required:!0,tsType:{name:"TriplateType['memories']",raw:"TriplateType['memories']"},description:""}}};try{TabTriplate.displayName="TabTriplate",TabTriplate.__docgenInfo={description:"",displayName:"TabTriplate",props:{itineraries:{defaultValue:null,description:"",name:"itineraries",required:!0,type:{name:"{ [key: `day${number}`]: { id: number; isSecret: boolean; url: string | null; name: string; time: Timestamp | null; memo: string | null; }[]; }"}},memories:{defaultValue:null,description:"",name:"memories",required:!0,type:{name:"{ [key: `day${number}`]: { itineraryId: number | null; thumbnail: string | null; description: string | null; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabTriplate.tsx#TabTriplate"]={docgenInfo:TabTriplate.__docgenInfo,name:"TabTriplate",path:"src/components/Tabs/TabTriplate.tsx#TabTriplate"})}catch(__react_docgen_typescript_loader_error){}const TabHome_stories={component:TabHome,argTypes:{myTriplinksData:{description:"myTriplinksDataの配列"},joinTriplinksData:{description:"joinTriplinksDataの配列"},favoriteTriplinksData:{description:"favoriteTriplinksDataの配列"}},tags:["autodocs"]};var Default={args:{myTriplinksData:[{id:"o1PHRC1TGzdX4WAxHSZrdgCIweQ2",ownerId:"C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",title:"テストデータ１",thumbnail:"/images/thumbnail_sample.jpg",date:[new index_esm.EK(1671634800,0),new index_esm.EK(1671807600,0)],createdAt:new index_esm.EK(1671634800,0),updatedAt:null,members:[],tabimemo:{budget:null,items:[],memo:null},itineraries:{}},{id:"o2PHRC1TGzdX4WAxHSZrdgCIweQ2",ownerId:"C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",title:"テストデータ２",thumbnail:"/images/thumbnail_sample.jpg",date:[new index_esm.EK(1671634800,0),new index_esm.EK(1671807600,0)],createdAt:new index_esm.EK(1671634800,0),updatedAt:null,members:[],tabimemo:{budget:null,items:[],memo:null},itineraries:{}}],joinTriplinksData:[{id:"o1PHRC1TGzdX4WAxHSZrdgCIweQ2",ownerId:"C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",title:"テストデータ１",thumbnail:"/images/thumbnail_sample.jpg",date:[new index_esm.EK(1671634800,0),new index_esm.EK(1671807600,0)],createdAt:new index_esm.EK(1671634800,0),updatedAt:null,members:[],tabimemo:{budget:null,items:[],memo:null},itineraries:{}}],favoriteTriplinksData:[{id:"o1PHRC1TGzdX4WAxHSZrdgCIweQ2",ownerId:"C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",title:"テストデータ１",thumbnail:"/images/thumbnail_sample.jpg",date:[new index_esm.EK(1671634800,0),new index_esm.EK(1671807600,0)],createdAt:new index_esm.EK(1671634800,0),updatedAt:null,members:[],tabimemo:{budget:null,items:[],memo:null},itineraries:{}}]}},NoData={args:{myTriplinksData:[],joinTriplinksData:[],favoriteTriplinksData:[]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    myTriplinksData: [{\n      id: 'o1PHRC1TGzdX4WAxHSZrdgCIweQ2',\n      ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',\n      title: 'テストデータ１',\n      thumbnail: '/images/thumbnail_sample.jpg',\n      date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],\n      createdAt: new Timestamp(1671634800, 0),\n      updatedAt: null,\n      members: [],\n      tabimemo: {\n        budget: null,\n        items: [],\n        memo: null\n      },\n      itineraries: {}\n    }, {\n      id: 'o2PHRC1TGzdX4WAxHSZrdgCIweQ2',\n      ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',\n      title: 'テストデータ２',\n      thumbnail: '/images/thumbnail_sample.jpg',\n      date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],\n      createdAt: new Timestamp(1671634800, 0),\n      updatedAt: null,\n      members: [],\n      tabimemo: {\n        budget: null,\n        items: [],\n        memo: null\n      },\n      itineraries: {}\n    }],\n    joinTriplinksData: [{\n      id: 'o1PHRC1TGzdX4WAxHSZrdgCIweQ2',\n      ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',\n      title: 'テストデータ１',\n      thumbnail: '/images/thumbnail_sample.jpg',\n      date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],\n      createdAt: new Timestamp(1671634800, 0),\n      updatedAt: null,\n      members: [],\n      tabimemo: {\n        budget: null,\n        items: [],\n        memo: null\n      },\n      itineraries: {}\n    }],\n    favoriteTriplinksData: [{\n      id: 'o1PHRC1TGzdX4WAxHSZrdgCIweQ2',\n      ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',\n      title: 'テストデータ１',\n      thumbnail: '/images/thumbnail_sample.jpg',\n      date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],\n      createdAt: new Timestamp(1671634800, 0),\n      updatedAt: null,\n      members: [],\n      tabimemo: {\n        budget: null,\n        items: [],\n        memo: null\n      },\n      itineraries: {}\n    }]\n  }\n}",...Default.parameters?.docs?.source}}},NoData.parameters={...NoData.parameters,docs:{...NoData.parameters?.docs,source:{originalSource:"{\n  args: {\n    myTriplinksData: [],\n    joinTriplinksData: [],\n    favoriteTriplinksData: []\n  }\n}",...NoData.parameters?.docs?.source}}}}}]);