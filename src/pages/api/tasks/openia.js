import { Configuration, OpenAIApi } from "openai";

export default async function handlerOpenIa(req, res) {

  const {code, languaje} = req.query;

  if(!code) {
    return res.status(400).json({error: 'Ingrese el codigo'})
  }
  try {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });

    const openia = new OpenAIApi(configuration);
    const response = await openia.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: code }],
    });

    const responseIA = JSON.stringify(response.data.choices[0].message);
    console.log(responseIA)

    res.status(200).json({ response: "La DATA esta en la CONSOLA" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error " + error });
  }
}
