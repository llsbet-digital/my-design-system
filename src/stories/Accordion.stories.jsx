import { Accordion } from './Accordion';

const ITEMS = [
  { value: 'q1', title: 'What is a design system?', content: 'A design system is a collection of reusable components, guidelines, and standards that enable teams to build consistent, high-quality products.' },
  { value: 'q2', title: 'How do I get started?', content: 'Install the package, import your tokens, and start using components from the library in your project.' },
  { value: 'q3', title: 'Can I customise the tokens?', content: 'Yes — all tokens are CSS custom properties defined in tokens.css. Override them at the :root level or scope them to a theme class.' },
  { value: 'q4', title: 'Is this accessible?', content: 'All components are built with ARIA attributes and keyboard navigation in mind. A11y audits are ongoing.' },
];

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = { args: { items: ITEMS, style: { width: 560 } } };
export const DefaultOpen = { args: { items: ITEMS, defaultOpen: ['q1'], style: { width: 560 } } };
export const AllowMultiple = { args: { items: ITEMS, allowMultiple: true, defaultOpen: ['q1', 'q2'], style: { width: 560 } } };
