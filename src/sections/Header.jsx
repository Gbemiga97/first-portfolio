import { images } from "../utils"


const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={images.Logo} alt="logo" />
          </a>

          <button className="btn btn-sm">
            Work with me
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header