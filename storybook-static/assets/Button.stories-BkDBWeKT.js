import{B as m}from"./Button-jOmDPDFN.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,h={title:"CS-Tools/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"The variant of the button"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the button"},isLoading:{control:"boolean"}},args:{onClick:l()}},r={args:{variant:"primary",children:"Primary Button"}},e={args:{variant:"secondary",children:"Secondary Button"}},a={args:{variant:"outline",children:"Outline Button"}},t={args:{variant:"ghost",children:"Ghost  Button"}},o={args:{size:"sm",children:"Small Button"}},s={args:{size:"md",children:"Medium Button"}},n={args:{size:"lg",children:"Large Button"}},c={args:{isLoading:!0,children:"Loading Button"}},i={args:{leftIcon:"🚀",children:"Button with Left Icon"}},d={args:{rightIcon:"🚀",children:"Button with Right Icon"}},u={args:{disabled:!0,children:"Disabled Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: "Primary Button"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: "Secondary Button"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost  Button'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Loading Button'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: '🚀',
    children: 'Button with Left Icon'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rightIcon: '🚀',
    children: 'Button with Right Icon'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...u.parameters?.docs?.source}}};const B=["Primary","Secondary","Outline","Ghost","Small","Medium","Large","Loading","WithLeftIcon","WithRightIcon","Disabled"];export{u as Disabled,t as Ghost,n as Large,c as Loading,s as Medium,a as Outline,r as Primary,e as Secondary,o as Small,i as WithLeftIcon,d as WithRightIcon,B as __namedExportsOrder,h as default};
