import { useState } from 'react';

function useLike(initialState = 0, like) {
  const [isLiked, setIsLiked] = useState(initialState);

  const toggleLike = () => {
    console.log('! ! ! ! ! ! ! !');
    // setIsLiked((prevIsLiked) => !prevIsLiked);
    console.log('isLiked', isLiked);
  };

  return [isLiked, toggleLike];
}

export default useLike;