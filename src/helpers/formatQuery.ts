export function formatQuery(age: number, themes = ""): string {
  let prompt = `Propose moi, avec un ton joyeux et amical, 5 idées de cadeau pour
  une personne âgée de ${age} ans`;

  if (themes.trim()) {
    prompt += ` et qui aime ${themes}`;
  }

  prompt += "!";
  return prompt;
}
