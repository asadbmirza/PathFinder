Submitted to HTV 9

### **Inspiration**

As students, we know navigating a career path is often confusing and overwhelming, especially when geographical location, access to resources, and personal background create additional barriers. We were inspired by the challenges that many people face when trying to advance in their careers, particularly those in underrepresented regions or communities. We wanted to create a tool that could help anyone, regardless of where they come from, gain clarity on their career goals and how to achieve them. The idea was to harness the power of AI to provide personalized, actionable career advice that takes into account an individual’s unique context—be it their location, skills, education, or interests. This idea was mainly inspired by reading various SDGs such as "8. Decent Work and Economic Growth" and "Quality Education".

### **What it does**

Our platform helps users by generating personalized career paths based on key inputs such as current location, skills, education, and professional interests. The AI model processes this information and provides users with a 5 step plan for their desired career, outlining the skills they should develop, and various resources to help them. Additionally, the platform adjusts recommendations based on the user's location to ensure that they are both relevant and realistic.

### **How we built it**

Frontend: We used React to build a responsive and user-friendly interface. The frontend allows users to easily input their data and interact with the platform. Backend: The backend was built using Node.js and frameworks such as Express.js to handle the API requests, user data processing, and communication with the AI model. Database: We implemented PostgreSQL to store user data, including their inputted information and the career paths generated by the AI model. AI Model: We used the llama-8b-8192 model for our career advice generation purposes. The model was personalized to analyze user inputs and generate personalized career recommendations based on the factors we gave it. Development Tools: Kaggle was used to fine-tune the AI model, while Postman was used to test API and form requests.

### **Challenges we ran into**

The main challenge we ran into was fine-tuning our AI model with a custom data set as none of us had any previous ML experience and had to learn from scratch this weekend by following various tutorials.
Another challenge we experienced was handling various errors in our backend with our login and registration. We tackled this by using passport.js to simplify our login/logout process and express-session to handle the session of the user.
Accomplishments that we're proud of
We’re incredibly proud of the fact that we successfully built a working website capable of generating career paths that adapt to users’ unique circumstances. We believe the ability to factor in both geographical and personal elements to offer tailored advice sets our project apart. Additionally, we are proud of the smooth integration between the AI model, frontend, and backend, which ensures a cohesive and responsive user experience.

### **What we learned**

Throughout the development process, we gained significant experience in training and fine-tuning AI models. We also learned the importance of refining data inputs and how they affect AI output, particularly when trying to achieve a high degree of personalization. Collaboratively, our team improved our problem-solving skills, learning to overcome technical challenges related to AI integration, backend efficiency, and frontend responsiveness.

### **What's next for CareerPathAI**

We would say the next main steps for CareerPathAI would be how to web scrape from various sources to get better data for our model, and also how to properly fine-tune/train an AI model for better personalization to help more people.
