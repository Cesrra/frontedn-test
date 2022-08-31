const getData = async (a) => {
   try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${a}`);
      const data = await response.json();
      return data;      
   } catch (error) {
      console.error(error)
   }

};

export default getData;