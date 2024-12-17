export const getChampionImageUrl = (imageName: string, version: string = '14.24.1' , flag: string = 'champion') => {

    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/${flag}/${imageName}`;
};