import { Link } from "react-router-dom"
import styled from 'styled-components'
import '../styles/homepage.css'

const BeginButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  background-color: #64558f;
  font-size: 1.2rem;
  color: white;
`

const HomepageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  color: white;
`

function Homepage() {
  return (
    <HomepageText>
      <div>
        <h1>Career Path AI</h1>
        <h2>Your Future Starts Here</h2>
      </div>
      <Link to="dashboard">
        <BeginButton>Begin Now</BeginButton>
      </Link>
    </HomepageText>
  )
}


export default Homepage