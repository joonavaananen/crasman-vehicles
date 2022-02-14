const fetcher = async (...args) => {
  try {
    const response = await fetch(...args);

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch ({ message }) {
    console.error(message);
  }
};

export { fetcher };
