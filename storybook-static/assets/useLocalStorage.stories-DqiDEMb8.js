import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as u,e as S}from"./iframe-CyeslHGW.js";import{B as g}from"./Button-jOmDPDFN.js";import{C as x}from"./Card-BLJn7Sw7.js";import{I as y}from"./Input-ChAJI01D.js";import"./preload-helper-PPVm8Dsz.js";function h(r,s){const[t,n]=u.useState(()=>{try{const e=window.localStorage.getItem(r);return e?JSON.parse(e):s}catch(e){return console.warn(`Error reading localStorage key "${r}":`,e),s}}),l=e=>{try{const a=e instanceof Function?e(t):e;n(a),window.localStorage.setItem(r,JSON.stringify(a))}catch(a){console.warn(`Error setting localStorage key "${r}":`,a)}},d=()=>{try{window.localStorage.removeItem(r),n(s)}catch(e){console.warn(`Error removing localStorage key "${r}":`,e)}};return u.useEffect(()=>{const e=a=>{if(a.key===r&&a.newValue!==null)try{n(JSON.parse(a.newValue))}catch(p){console.warn(`Error parsing localStorage key "${r}":`,p)}};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[r]),{value:t,setValue:l,removeValue:d}}const v=({storageKey:r="stories-key",initialValue:s="Hello World"})=>{const t=h(r,s),[n,l]=S.useState(t.value),d=()=>{t.setValue(n)},e=()=>{t.removeValue(),l(s)};return o.jsx(x,{header:o.jsx("h3",{className:"text-lg font-semibold",children:"useLocalStorage Hook"}),variant:"outlined",className:"w-96",children:o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"cs-bg-tertiary p-3 rounded",children:[o.jsx("p",{className:"text-sm font-medium",children:"Stored Value:"}),o.jsxs("p",{className:"text-lg cs-text-primary break-all",children:['"',t.value,'"']}),o.jsxs("p",{className:"text-xs cs-text-secondary mt-1",children:["Key: ",r]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(y,{label:"New Value",value:n,onChange:a=>l(a.target.value),placeholder:"Enter new value..."}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(g,{onClick:d,variant:"primary",size:"sm",children:"Save"}),o.jsx(g,{onClick:e,variant:"outline",size:"sm",children:"Clear"})]})]})]})})},E={title:"CS-Tools/Hooks/useLocalStorage",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{storageKey:{control:"text",description:"Clé du localStorage"},initialValue:{control:"text",description:"Valeur initiale"}}},c={args:{storageKey:"storybook-demo",initialValue:"Hello Storybook!"}},i={args:{storageKey:"my-todos",initialValue:'["Faire les courses", "Coder"]'}},m={args:{storageKey:"username",initialValue:"John Doe"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    storageKey: 'storybook-demo',
    initialValue: 'Hello Storybook!'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    storageKey: 'my-todos',
    initialValue: '["Faire les courses", "Coder"]'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    storageKey: 'username',
    initialValue: 'John Doe'
  }
}`,...m.parameters?.docs?.source}}};const b=["Primary","TodoList","UserName"];export{c as Primary,i as TodoList,m as UserName,b as __namedExportsOrder,E as default};
