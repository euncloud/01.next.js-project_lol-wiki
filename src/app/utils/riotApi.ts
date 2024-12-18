export const getChampionRotation = async () => {
    const response = await fetch("/api/rotation");
    if (!response.ok) {
      throw new Error("Failed to getChampionRotation");
    }
    return response.json();
}