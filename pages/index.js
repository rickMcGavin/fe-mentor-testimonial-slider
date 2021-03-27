import Head from 'next/head'
import ContainerStyled from '../src/components/ContainerStyled';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front End Mentor | Coding Bootcamp Testimonials Slider</title>
      </Head>

      <main>
        <ContainerStyled>
          <p>
            Testimonial Slider
          </p>
        </ContainerStyled>
      </main>
    </div>
  )
}
