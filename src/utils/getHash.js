const getHash = () => 
// location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
  location.hash.slice(2, -1).toLocaleLowerCase() || '/';

export default getHash;