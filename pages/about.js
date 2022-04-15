export async function getStaticProps() {
  let example = "Hello!";
  console.log('Called');
  return { props: {example: example}}
}


function About({example}) {
  return <div>About {example}</div>
}

export default About;