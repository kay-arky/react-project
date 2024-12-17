import ProfilePic from "/src/assets/Card/kay-arky.jpg"
function Card() {
  return (
    <div className="card">
      <img className="card-img" src={ProfilePic} />
      <h2 className="card-title">
        <a href="">kay - arky</a>
      </h2>
      <p className="card-description">I am a Student of Informatics Engineering</p>
    </div>
  )
}
export default Card