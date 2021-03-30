import { useState, useEffect } from 'react';
import Head from 'next/head';
import ContainerStyled from '../src/components/ContainerStyled';
import ImageBG from '../src/components/ImageBG';
import Controls from '../src/components/Controls';
import Quote from '../src/components/Quote';


export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <Head>
        <title>Front End Mentor | Coding Bootcamp Testimonials Slider</title>
      </Head>

      <main>
        <ContainerStyled>
          <ImageBG active={active} />
          <Controls
            active={active}
            setActive={setActive}
          />
          <Quote active={active} />
        </ContainerStyled>
      </main>
    </div>
  )
}
