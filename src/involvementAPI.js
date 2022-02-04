const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'LpwpP44p6vm5v1pisyeV';

export const newLike = async (itemId) => {
  fetch(`${baseURL}apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};

export const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  return response.json();
};

export const getComments = async (movieID) => {
  console.log(`${baseURL}apps/${appId}/comments?item_id=${movieID}`);
  const response = await fetch(`${baseURL}apps/${appId}/comments?item_id=${movieID}`,{
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.json();
};

export const newComment = async (comment) => {
  fetch(`${baseURL}apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment)
  });
};

export const countComments = async (movieID) => {
  const comments = await getComments(movieID);
  if (comments.length !== undefined) {
    return comments.length;
  } else {
    return 0;
  }
};
