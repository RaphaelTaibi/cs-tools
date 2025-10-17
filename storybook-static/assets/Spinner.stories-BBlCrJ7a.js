import{j as d}from"./jsx-runtime-D_zvdyIk.js";const g=({size:b="medium",color:y="blue",className:z=""})=>{const S={small:"w-4 h-4 border-2",medium:"w-8 h-8 border-4",large:"w-12 h-12 border-4"},f="animate-spin rounded-full border-t-transparent",p={blue:"border-blue-600",red:"border-red-600",green:"border-green-600",purple:"border-purple-600",gray:"border-gray-600",yellow:"border-yellow-600",indigo:"border-indigo-600",pink:"border-pink-600"},v=p[y]||p.blue,w=`${f} ${S[b]} ${v} ${z}`.trim();return d.jsx("div",{className:"flex items-center justify-center",children:d.jsx("div",{className:w,role:"status","aria-label":"Loading",children:d.jsx("span",{className:"sr-only",children:"Loading..."})})})};g.__docgenInfo={description:"A reusable Spinner component for loading states",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'blue' | 'red' | 'green' | 'purple' | 'gray' | 'yellow' | 'indigo' | 'pink'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"},{name:"literal",value:"'green'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'indigo'"},{name:"literal",value:"'pink'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const k={title:"CS-Tools/Spinner",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the spinner"},color:{control:{type:"select"},options:["blue","red","green","purple","gray","yellow","indigo","pink"],description:"The color of the spinner"}}},e={args:{size:"medium",color:"blue"}},r={args:{size:"small",color:"blue"}},s={args:{size:"medium",color:"blue"}},a={args:{size:"large",color:"blue"}},o={args:{size:"medium",color:"blue"}},l={args:{size:"medium",color:"red"}},n={args:{size:"medium",color:"green"}},i={args:{size:"medium",color:"purple"}},c={args:{size:"medium",color:"gray"}},m={args:{size:"medium",color:"yellow"}},t={args:{size:"medium",color:"indigo"}},u={args:{size:"medium",color:"pink"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'blue'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'blue'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'blue'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'blue'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'blue'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'red'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'green'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'purple'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'gray'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'yellow'
  }
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'indigo'
  }
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'pink'
  }
}`,...u.parameters?.docs?.source}}};const x=["Default","Small","Medium","Large","Blue","Red","Green","Purple","Gray","Yellow","Indigo","Pink"];export{o as Blue,e as Default,c as Gray,n as Green,t as Indigo,a as Large,s as Medium,u as Pink,i as Purple,l as Red,r as Small,m as Yellow,x as __namedExportsOrder,k as default};
