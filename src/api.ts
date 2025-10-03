import axios from 'axios'

export async function getCharacters(page:number){
    const res = await axios.get('https://rickandmortyapi.com/api/character')
    return res.data
}

export async function getCharacterById (id: string){
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return res.data
};