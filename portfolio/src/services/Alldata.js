
export const fetchUser = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/users/')
  const data = await response.json();
  return data.users;
}

export const fetchProject = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/projects/')
  const data = await response.json();
  return data;
}

export const fetchServices = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/services/')
  const data = await response.json();

  return data;
}


