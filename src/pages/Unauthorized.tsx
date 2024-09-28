import '@/styles/unauthorized.css'

const Unauthorized = () => {
  return (
    <div className='translate-y-28'>
      <div className="gandalf">
        <div className="fireball"></div>
        <div className="skirt"></div>
        <div className="sleeves"></div>
        <div className="shoulders">
          <div className="hand left"></div>
          <div className="hand right"></div>
        </div>
        <div className="head">
          <div className="hair"></div>
          <div className="beard"></div>
        </div>
      </div>
      <div className="message">
        <h1>403 - You Shall Not Pass</h1>
        <p>Uh oh, Gandalf is blocking the way!<br />Maybe you have tried to access the route that you'r not meant too</p>
      </div>
    </div>
  )
}

export default Unauthorized