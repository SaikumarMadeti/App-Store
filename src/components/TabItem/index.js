// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'inactive-tab-btn'
  return (
    <li>
      <button
        type="button"
        className={`btn-styles ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
