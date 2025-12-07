import { Hero } from './components/section/Hero'
import { Header } from './components/layout/Header'
import { WebringBadge } from './components/ui/WebringBadge'
function App() {

  return (
    <>
      <Header />
      <Hero/>
      <WebringBadge siteUrl="austinjian.ca" />
    </>
  )
}

export default App
