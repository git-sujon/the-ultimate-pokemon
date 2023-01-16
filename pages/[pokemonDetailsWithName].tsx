import { useRouter } from 'next/router'

const PokemonDetailsWithName = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <div>
      <h1>Pokemon details for {name}</h1>
      <p>TODO: Display data for {name}</p>
    </div>
  )
}

export async function getStaticPaths() {
    // Fetch data from the external API
    const res = await fetch(`https://graphql-pokeapi.graphcdn.app/`);
    const data = await res.json();
    const pokemons = data?.data?.pokemons?.results;
    console.log(pokemons)
  
    // Get the paths we want to pre-render based on pokemons
    const paths = pokemons.map((pokemon) => {
        return {
            params: {
                pokemonDetailsWithName: `${pokemon?.name}`
            }
        }
    })
  
    // We'll pre-render only these paths at build time.
    return { paths, fallback: false }
  }
  

export async function getStaticProps({ params }) {
  const gqlQuery = `query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }`;

  const gqlVariables = {
    name: params?.name
  };
  
  const res = await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: 'POST',
  });

  const data = await res.json();
  console.log(data)
  return {
    props: {
      data,
    },
  }
}

export default PokemonDetailsWithName;