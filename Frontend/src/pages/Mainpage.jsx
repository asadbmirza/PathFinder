import { HeaderText } from "../styles/mainpage"
import SuggestionCard from "../components/SuggestionCard"
import { RegisterButton } from "../styles/formstyles"
import { Navigate } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Mainpage = () => {
  const [edit, setEdit] = useState(false);
  const data = JSON.parse(localStorage.getItem('data'));
  if (edit) {
    return <Navigate to="/details" />
  }

  
  
 return (
  <main>
    <HeaderText>Based on your information these are potential steps you can take...</HeaderText>
    <SuggestionCard
      title="First, check out this..."
      description={data[0].step}
      skills={data[0].requiredSkills}
      imgPath="https://cdn.elearningindustry.com/wp-content/uploads/2019/10/7-Benefits-That-Highlight-The-Importance-Of-Soft-Skills-In-The-Workplace.png"
      >
    </SuggestionCard>
    <SuggestionCard
      title="Get involved in the community..."
      description={data[1].step}
      skills={data[1].requiredSkills}
      imgPath="https://www.fastweb.com/uploads/article_photo/photo/2034795/4-Ways-to-gain-job-experience.jpg"
      >
    </SuggestionCard>
    <SuggestionCard
      title="Connect, contribute, and grow..."
      description={data[2].step}
      skills={data[2].requiredSkills}
      imgPath="https://prod-media.asvabprogram.com/MEDIA_CENTER/thumbnails/apprenticeship-main.png"
      caption="">
    </SuggestionCard>
    <SuggestionCard
      title="Kick things off with confidence..."
      description={data[3].step}
      skills={data[3].requiredSkills}
      imgPath="https://i0.wp.com/floify.com/wp-content/uploads/2023/09/MicrosoftTeams-image-14.jpeg?fit=1024%2C671&ssl=1"
      caption="">
    </SuggestionCard>
    <SuggestionCard
      title="Discover what's next for you..."
      description={data[4].step}
      skills={data[4].requiredSkills}
      imgPath="https://framerusercontent.com/images/18aeJDBzC6ZxUCC6riBVlpmNwoU.png"
      caption="">
    </SuggestionCard>
    <RegisterButton>Generate Another Career Path</RegisterButton>
    <RegisterButton onClick={() => setEdit(true)}>Edit Skills and Interests</RegisterButton>
  </main>
)

}

export default Mainpage;