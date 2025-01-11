export const parseAnimalData = (jsonString: string) => {
    // Remove surrounding backticks if present
    const cleanedString = jsonString.trim().replace(/^```json|```$/g, "");
    // Parse the JSON string into a JavaScript object
    return cleanedString;
  };