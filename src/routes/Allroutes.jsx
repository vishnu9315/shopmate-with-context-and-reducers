import {Routes, Route} from 'react-router-dom'
import {Homepage, Cartpage} from '../Pages'

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/cartpage" element = {<Cartpage />} />
      </Routes>
    </>
  )
}


