import React from 'react'
// import { Menu, Dropdown } from 'antd'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

class ProjectManagement extends React.Component {
  render() {
    // const menu = (
    //   <Menu selectable={false}>
    // {
    /* <Menu.ItemGroup title="Active">
          <Menu.Item>
            <Link to="/">Project Management</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">User Interface Development</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Documentation</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Inactive">
          <Menu.Item>
            <Link to="/">Marketing</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/">
            <i className={`${styles.menuIcon} icmn-cog`} /> Settings
          </Link>
        </Menu.Item> */
    //   }
    //   </Menu>
    // )
    return (
      // <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
      <div className={styles.dropdown}>
        <i className={`${styles.icon} fa fa-users`} />
        <span className="d-none d-xl-inline">
          <strong>
            <Link to="/dashboard/FunctionView">
              <FormattedMessage id="topBar.projectManagement" />
            </Link>
          </strong>
        </span>
      </div>
      // </Dropdown>
    )
  }
}

export default ProjectManagement
