import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home" className="container-fluid">
    <header className="text-center border-bottom">
      <h1>Home Page</h1>
    </header>
    <div style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/512/567/595/women-lesbians-blue-angel-strawberries-innuendo-phallic-symbol-open-mouth-sexy-wallpaper-preview.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%' }}
    >
      <div className="d-flex justify-content-center align-items-center" style={{ height: `${80}vh` }}>
        <Link to="/auth/signup">
          <Button variant="warning" type="button">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  </div>
)

export default PagesHome
