import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  return (
    <>
      <Header />
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
      <main>
        <body>

          Transform your brand

          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.

          Learn more

          Stand out to the right audience

          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.

          Learn more

          Graphic design
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

          Photography
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

          Client testimonials

          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
          Emily R.
          Marketing Director

          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
          Thomas S.
          Chief Operating Officer

          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
          Jennie F.
          Business Owner

          About
          Services
          Projects
          Contact
        </body>
      </main>
      <Footer />
    </>
  )
}

export default App
