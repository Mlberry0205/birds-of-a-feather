import React from "react";
import "./Learn.css"
import birdPhoto from './beardedBell.png'
// import { Link } from 'react-router-dom'

const Learn = () => {
  return (
    <div className=".about-layout">
      <h2>About</h2>
      <p className="text">This site was created to listen and learn about the sounds of the bearded bellbird.  My inspiration came from Xeno-canto.  Xeno-canto is a website dedicated to sharing wildlife sounds from all over the world.  Birds of a Feather only contains sounds from the bearded bellbird.</p>
      <h2>Aims</h2>
      <p className="text">Whether you are a research scientist, a birder, or simply curious about a sound that you heard out your kitchen window, we invite you to listen and explore the sound recordings in the collection. </p>
      <h2>The Bearded Bellbird</h2>
      <p className="text">The bearded bellbird can be found in Northern South America.  They are famously loud and distinctive-looking with a white plumage belly apart from a brown head and black wings. At his throat hang several black, unfeathered "wattles". All of the recordings in this app are all male bearded bellbirds. The male has a loud, repeated metallic hammering call. There are two subspecies, the nominate subspecies is only found in northeastern Brazil, while the other subspecies occurs in Trinidad, Venezuela, Colombia, Guyana, eastern Bolivia and northern Brazil.</p>
      <div className="table-box">
        <table>
          <tbody>
            <tr>
              <th>Bellbird Information</th>
              <th>Values</th>
            </tr>
            <tr>
              <td>Conservation status</td>
              <td>Least concern</td>
            </tr>
            <tr>
              <td>Old latin name for bird</td>
              <td>Ampelis averano</td>
            </tr>
            <tr>
              <td>Order</td>
              <td>Perching Birds / Passeriformes</td>
            </tr>
            <tr>
              <td>Family</td>
              <td>Cotingas / Cotingidae</td>
            </tr>
            <tr>
              <td>Genus</td>
              <td>Procnias</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a className="text" href={`https://ebird.org/species/beabel1`}>Learn more here</a>  
      <h2>Xeno-canto</h2>
      <p className="text">Xeno-canto's website is more than just a collection of recordings. It is also a collaborative project.  If you feel inspired, I invite you to checkout Xeno-cantos website.  You can share your own recordings, help identify mystery recordings, or share your expertise in the forums.</p>
      <a className="text" href={`https://xeno-canto.org/`}>Head to xeno-canto.org</a>   
        {/* <img className='about-bird-image' src={birdPhoto} alt={'male bearded bell'}/> */}
    </div>
  )
}

export default Learn