function splitAndCapitalize(input: string): string {
  return input
    .split("_") // Split the string by underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words back together with spaces
}

export { splitAndCapitalize };
