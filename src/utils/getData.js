const sum = async (a) => {
   return await fetch(`https://rickandmortyapi.com/api/character/?page=${a}`);
};

export default sum;