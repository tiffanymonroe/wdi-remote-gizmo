console.log('react is rad');

const Header = () => {
  return (
    <header>
      <h1>Website</h1>
    </header>
  )
}

const AboutMe = () => {
  return (
    <main>
    <h2>I am Bib Fortuna</h2>
      <img src='https://i.pinimg.com/236x/86/9b/6d/869b6d02226dfdd4b0ddc49086417f13--jabbas-palace-bibs.jpg'/>
    </main>
  )
}

const Footer = () => {
  return (
    <footer>
      Die wanna wanga
    </footer>
)
}

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
