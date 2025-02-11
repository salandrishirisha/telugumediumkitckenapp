import welcomelogo from "../Images/welcome.jpeg"
import kitchentagline from "../Images/kitchentagline.jpeg"


function About() {
  return (
    <section className="about-section">
      <div className="welcome-logo-container">
        <img src={welcomelogo || "/placeholder.svg"} alt="Welcome" className="welcome-logo" />
      </div>
      <div className="content-container">
        <div className="tagline-container">
          <img src={kitchentagline || "/placeholder.svg"} alt="Kitchen Tagline" className="tagline-image" />
        </div>
        <div className="text-content">
          <p className="description">
            Developed a fully functional food delivery application inspired by Swiggy's API using React and Parcel.js,
            focusing on responsive design and performance optimization
          </p>
          <p className="creator">
            Created by <span>salandri shirisha</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

