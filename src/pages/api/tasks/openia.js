import { Configuration, OpenAIApi } from "openai";

export default async function handlerOpenIa(req, res) {
  const { code, languaje, tolanguaje } = req.query;

  console.log(`Code: ${code}, lenguaje: ${languaje}, toLanguaje: ${tolanguaje}`)

  if (!code || !languaje || !tolanguaje) {
    return res
      .status(400)
      .json({
        error: "Missing code or languaje, please enter [languaje or code]",
      });
  }


  const LANGUAJES_SUPPORTED = [
    "javascript",
    "ruby",
    "python",
    "rust",
    "c",
    "go",
    "nextjs",
    "react",
    "angular",
  ];

  if (!LANGUAJES_SUPPORTED.includes(languaje)) {
    return res
      .status(404)
      .json({ error: "Sorry, this language is not in our list of languages." });
  }

  try {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });

    const openia = new OpenAIApi(configuration);
    const response = await openia.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Pasame este codigo ${code} de ${languaje} a el lenguaje de programación ${tolanguaje}` }],
    });

    const responseIA = response.data.choices[0].message
    console.log(responseIA.content);

    res.status(200).json({ translate : responseIA.content });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error " + error });
  }
}
