import config from "../config.json";

const userApiEndpoint = `${config.usersUrl}/users`;

export async function getMonsters() {
  const data = await fetch(userApiEndpoint).then(response => response.json());
  return data.map(item => createMonster(item));
}

function createMonster(item) {
  item.imgUrl = `${config.imageUrl}/${item.id}?set=set2`;
  return item;
}