// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="app-item">
      <img src={imageUrl} className="img-style" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
