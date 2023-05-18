// @means start in the project root diractory (aka where the packege.json)
import styles from "@/styles/About.module.css"
import { useState } from 'react'
// special next js images that speed up SSR caching
import Image from 'next/image'

export default function About(){
  const [fontSize, setFontSize] = useState(3)

  return(
    <div>
      {/* styled jsx example */}
      <style jsx>{`
      .bigHeader {
        font-size: ${fontSize}rem;
      }

      `}</style>
      <h1 className="bigHeader">About Me</h1>
      <button onClick={() => setFontSize(fontSize + 1)}>+</button>
      <button onClick={() => setFontSize(fontSize - 1)}>-</button>
      <br></br>
      <p className={styles.greenText}>I am a software engineer 🖥️.</p>

      {/* local images are stored in @/public */}
      {/* regular <img /> work as well, if you cant provide a width and height */}
      <Image
          src="/next.svg"
          alt="next logo"
            //next Image componenets NEED a predefined pixle height and width
            width={400}
            height={400}
      />

      {/* using another hosting domain for images  */}
      <Image 
      src="https://placekitten.com/450/450"
      alt="an image of a kitten"
      width={450}
      height={450}
      />

    </div>
  )
}