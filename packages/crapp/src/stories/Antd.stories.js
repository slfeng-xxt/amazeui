import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { text, select } from '@kadira/storybook-addon-knobs'

import 'antd/dist/antd.css'
import {
  Button,
  Icon,
  Breadcrumb,
  Menu,
  Pagination,
  Steps,
  Tabs,
  Checkbox,
  Cascader,
  DatePicker,
} from 'antd'

import moment from 'moment'

const RangePicker = DatePicker.RangePicker
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const TabPane = Tabs.TabPane

const btnTypes = {
  "": "",
  primary: "primary",
  dashed: "dashed",
  danger: "danger",
}
storiesOf('General', module)
  .addWithInfo(
    'Button 按钮',
    `基本按钮组件`,
    () => (
      <div>
        <Button
          type={select('Type', btnTypes)}
          shape={select('Shape', {
            '': '',
            circle: "circle",
          })}
          icon={select('Icon', {
            '': '',
            search: 'search',
            download: 'download',
          })}
          size={select('Size', {
            default: 'default',
            large: 'large',
            small: 'small',
          })}
        >按钮文字</Button>
      </div>
    ),
    { inline: true, },
  )
  .addWithInfo(
    'Icon 图标',
    `基本图标`,
    () => (
      <div>
        <Icon type={
          select('Type', {
            link: 'link',
            shrink: 'shrink',
            "arrows-alt": 'arrows-alt'
          })
        } /> 这是Icon文字
      </div>
    ),
    { inline: true },
  )

storiesOf('Navigation', module)
  .addWithInfo(
    'Breadcrumb 面包屑',
    `基本面包屑`,
    () => (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Menu 菜单',
    `基本菜单`,
    () => (
      <Menu
        style={{ width: 240 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Pagination 分页',
    `基本分页`,
    () => (
      <Pagination defaultCurrent={6} total={500} />
    ),
    { inline: true },
  )
  .addWithInfo(
    'Steps 步骤条',
    `基本步骤条`,
    () => (
      <Steps>
        <Steps.Step status="finish" title="Login" icon={<Icon type="user" />} />
        <Steps.Step status="finish" title="Verification" icon={<Icon type="solution" />} />
        <Steps.Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
        <Steps.Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
      </Steps>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Tabs 标签页',
    `基本标签页`,
    () => (
      <Tabs type="card">
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    ),
    { inline: true },
  )

storiesOf('DataEntry', module)
  .addWithInfo(
    'Checkbox 复选框',
    `基本复选框`,
    () => (
      <Checkbox.Group
        options={[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ]}
        defaultValue={['Apple', 'Pear']}
      />
    ),
    { inline: true },
  )
  .addWithInfo(
    'Cascader 级联选择',
    `基本级联选择`,
    () => (
      <Cascader
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        options={
          [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake',
              }],
            }],
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              }],
            }],
          }]
        }
        onChange={value => console.log(value)}
      />
    ),
    { inline: true },
  )
  .addWithInfo(
    'Datepicker 日期控件',
    `基本日期选择`,
    () => (
      <RangePicker
        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
        onChange={(dates, dateStrings) => {
          console.log('From: ', dates[0], ', to: ', dates[1]);
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        }}
        />
    ),
    { inline: true },
  )


