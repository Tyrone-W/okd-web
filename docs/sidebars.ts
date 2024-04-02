import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  projectSidebar: [{type: 'autogenerated', dirName: 'project'}],
  communitySidebar: [{type: 'autogenerated', dirName: 'community'}],
  operatorsSidebar: [{type: 'autogenerated', dirName: 'operators'}],
  productDocsSidebar: [
    {type: 'autogenerated', dirName: 'documentation'},
    {type: 'link', label: "Community/Project Docs", href: "/docs/project"},
    {type: 'link', label: "Product Docs", href: "https://docs.okd.io/latest/"},
],
  // But you can create a sidebar manually
};

export default sidebars;
