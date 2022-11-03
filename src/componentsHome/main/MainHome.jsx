import React from 'react'

const MainHome = () => {
  return (
    <section className="text-center full-page">
    <img src='../.././assets/img/Satellite.mp4'alt='background'></img>
        <div className="">
            <main className="px-3 ">
                <h1>Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </main>

            {/* <footer className="mt-auto text-white-50">
                <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
            </footer>*/}
        </div> 
    </section>

  )
}

export default MainHome