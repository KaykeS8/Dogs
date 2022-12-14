import React, { Dispatch } from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhotos } from './FeedPhotos'

interface PropsFeed {
  user?: number;
}
export const Feed = ({ user }: PropsFeed) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setpages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infiniteScrool() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.75 && !wait) {
          setpages((page) => [...page, page.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }
    window.addEventListener('wheel', infiniteScrool)
    return () => {
      window.removeEventListener('wheel', infiniteScrool)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto &&
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      }
      {pages.map((page) => (
        <FeedPhotos key={page} user={user!} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite}/>
      ))}
    </div>
  )
}