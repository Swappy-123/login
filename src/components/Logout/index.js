// Write your code here
import './index.css'
const Logout = props => {
  const {logout} = props
  return (
    <>
    <button type="button" className="btn">
      {logout}
    </button>
    </>
  )
}
export default Logout
