const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'LpwpP44p6vm5v1pisyeV';

export const newLike = async (item_id) => {
  // console.log(JSON.stringify({item_id}));
  fetch(`${baseURL}apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id }),
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
