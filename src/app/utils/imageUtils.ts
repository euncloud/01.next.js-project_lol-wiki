export const getChampionImageUrl = (imageName: string, version: string = '14.24.1') => {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${imageName}`;
  };