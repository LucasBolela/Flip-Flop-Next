export default async function handler(req, res) {
  const resp = await fetch(`https://api.alternative.me/fng/`);
  const data = await resp.json();

  res.status(200).json(data)
}