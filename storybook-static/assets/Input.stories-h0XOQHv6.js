import{I as u}from"./Input-ChAJI01D.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,b={title:"CS-Tools/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"The variant of the input"},type:{control:{type:"select"},options:["text","email","password","number","search","url","tel"],description:"The type of the input"},label:{control:"text",description:"Label for the input field"},error:{control:"text",description:"Error message to display"},helper:{control:"text",description:"Helper text to display"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the input is disabled"}},args:{onChange:m()}},e={args:{placeholder:"Enter your text..."}},r={args:{label:"Email Address",placeholder:"Enter your email...",type:"email"}},a={args:{label:"Username",placeholder:"Enter username...",error:"Username is required",value:""}},s={args:{label:"Password",type:"password",placeholder:"Enter password...",helper:"Password must be at least 8 characters long"}},o={args:{variant:"filled",label:"Search",placeholder:"Search for anything...",type:"search"}},t={args:{variant:"outline",label:"Website URL",placeholder:"https://example.com",type:"url"}},l={args:{label:"Search",placeholder:"Search...",leftIcon:"🔍"}},n={args:{label:"Password",type:"password",placeholder:"Enter password...",rightIcon:"👁️"}},c={args:{label:"Phone Number",type:"tel",placeholder:"+1 (555) 000-0000",leftIcon:"📞",rightIcon:"✓"}},p={args:{label:"Disabled Field",placeholder:"This field is disabled",disabled:!0,value:"Read-only value"}},d={args:{label:"Age",type:"number",placeholder:"Enter your age...",helper:"Must be 18 or older"}},i={args:{variant:"outline",label:"Full Name",placeholder:"John Doe",helper:"Enter your first and last name",leftIcon:"👤"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your text..."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "Enter your email...",
    type: "email"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username...",
    error: "Username is required",
    value: ""
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
    helper: "Password must be at least 8 characters long"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: "Search",
    placeholder: "Search for anything...",
    type: "search"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: "Website URL",
    placeholder: "https://example.com",
    type: "url"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search...",
    leftIcon: "🔍"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
    rightIcon: "👁️"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    leftIcon: "📞",
    rightIcon: "✓"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Field",
    placeholder: "This field is disabled",
    disabled: true,
    value: "Read-only value"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age...",
    helper: "Must be 18 or older"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: "Full Name",
    placeholder: "John Doe",
    helper: "Enter your first and last name",
    leftIcon: "👤"
  }
}`,...i.parameters?.docs?.source}}};const y=["Default","WithLabel","WithError","WithHelper","Filled","Outline","WithLeftIcon","WithRightIcon","WithBothIcons","Disabled","Number","CompleteForm"];export{i as CompleteForm,e as Default,p as Disabled,o as Filled,d as Number,t as Outline,c as WithBothIcons,a as WithError,s as WithHelper,r as WithLabel,l as WithLeftIcon,n as WithRightIcon,y as __namedExportsOrder,b as default};
