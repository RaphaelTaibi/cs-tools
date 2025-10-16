import{C as l}from"./Card-BLJn7Sw7.js";import"./jsx-runtime-D_zvdyIk.js";const m={title:"CS-Tools/Card",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","elevated","outlined"],description:"The variant of the card"},padding:{control:{type:"select"},options:["none","sm","md","lg"],description:"The padding of the card"},header:{control:"text",description:"Header content of the card"},footer:{control:"text",description:"Footer content of the card"}}},e={args:{children:"This is a default card with some content to showcase how it looks."}},a={args:{variant:"elevated",children:"This is an elevated card with shadow effects."}},r={args:{variant:"outlined",children:"This is an outlined card with visible borders."}},s={args:{header:"Card Header",children:"This card has a header section at the top."}},t={args:{footer:"Card Footer",children:"This card has a footer section at the bottom."}},o={args:{header:"Card Header",footer:"Card Footer",children:"This card has both header and footer sections."}},d={args:{padding:"sm",children:"This card has small padding."}},n={args:{padding:"lg",children:"This card has large padding."}},i={args:{padding:"none",children:"This card has no padding."}},c={args:{variant:"elevated",header:"🎯 Task Management",footer:"Last updated: Today",children:`
      <div>
        <h3 style="margin: 0 0 1rem 0; color: var(--cs-text-primary);">Current Tasks</h3>
        <ul style="margin: 0; padding-left: 1.5rem; color: var(--cs-text-secondary);">
          <li>Review pull requests</li>
          <li>Update documentation</li>
          <li>Plan next sprint</li>
        </ul>
      </div>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a default card with some content to showcase how it looks."
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: "This is an elevated card with shadow effects."
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: "This is an outlined card with visible borders."
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Card Header",
    children: "This card has a header section at the top."
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    footer: "Card Footer",
    children: "This card has a footer section at the bottom."
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Card Header",
    footer: "Card Footer",
    children: "This card has both header and footer sections."
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'sm',
    children: "This card has small padding."
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'lg',
    children: "This card has large padding."
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: "This card has no padding."
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    header: "🎯 Task Management",
    footer: "Last updated: Today",
    children: \`
      <div>
        <h3 style="margin: 0 0 1rem 0; color: var(--cs-text-primary);">Current Tasks</h3>
        <ul style="margin: 0; padding-left: 1.5rem; color: var(--cs-text-secondary);">
          <li>Review pull requests</li>
          <li>Update documentation</li>
          <li>Plan next sprint</li>
        </ul>
      </div>
    \`
  }
}`,...c.parameters?.docs?.source}}};const g=["Default","Elevated","Outlined","WithHeader","WithFooter","WithHeaderAndFooter","SmallPadding","LargePadding","NoPadding","ComplexContent"];export{c as ComplexContent,e as Default,a as Elevated,n as LargePadding,i as NoPadding,r as Outlined,d as SmallPadding,t as WithFooter,s as WithHeader,o as WithHeaderAndFooter,g as __namedExportsOrder,m as default};
