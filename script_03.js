//Quel est le chiffre d'affaires moyen par utilisateur ?
const average = users.reduce((acc,b) => acc + b.revenue, 0);
console.log(average/users.length);

//Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0) ?
const percent = users.filter(a => a.revenue > 0);
console.log((percent.length-1) / users.length *100);

//Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
const winners = users.filter(a => a.revenue > 0);
const averageOfMoneyWon = winners.reduce((acc, b)=> acc + b.revenue, 0);
console.log(averageOfMoneyWon/winners.length);

//Combien avons-nous gagné d'argent au total ?
const total = users.reduce((acc, b) => acc + b.revenue, 0);
console.log(total);

//Combien avons-nous d'utilisateurs en France ?
const FR = users.filter(a => a.country == "France");
console.log(FR.length)

//Parmi ces utilisateurs, combien avons-nous de clients payants en France ?
const frenchMoney = FR.filter(a => a.revenue > 0);
console.log(frenchMoney.length);

//Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne) (chiffre d'affaires total, en France, aux États-Unis, etc.)
const GB = users.filter(a => a.country == "Great Britain");
const USA = users.filter(a => a.country == "United States");
const GER = users.filter(a => a.country == "Germany");

const FRtotal = FR.reduce((acc, b) => acc + b.revenue, 0);
const GBtotal = GB.reduce((acc, b) => acc + b.revenue, 0);
const USAtotal = USA.reduce((acc, b) => acc + b.revenue, 0);
const GERtotal = GER.reduce((acc, b) => acc + b.revenue, 0);

console.log("La france a gagné " + FRtotal/100 + " € cette année");
console.log("Les US ont gagné " + USAtotal/100 + " € cette année");
console.log("La Grande-Bretagne a gagné " + GBtotal/100 + " € cette année");
console.log("L'Allemagne a gagné " + GERtotal/100 + " € cette année");

//Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent ?
const moneyMakers = users.filter(a => a.revenue > 0);
const unique = moneyMakers.filter((v,i,a)=>a.findIndex(t=>(t.country === v.country))===i);
const countryMoneyMakers = unique.map(a => a.country);
console.log(countryMoneyMakers);

//Quels sont les 5 utilisateurs qui nous ont rapporté le plus d'agent ?
const highest = users.sort((a, b) => b.revenue - a.revenue);
console.log(highest[0], highest[1], highest[2], highest[3], highest[4]);

//Gagnons-nous plus d'argent auprès des hommes, ou des femmes ?
const women = users.filter(a => a.sex == "F" && a.revenue > 0);
const men = users.filter(a => a.sex == "M" && a.revenue > 0);

const womenMoney = women.reduce((acc, b) => acc + b.revenue, 0);
const menMoney = men.reduce((acc, b) => acc + b.revenue, 0);

if(menMoney > womenMoney){
  console.log("Les hommes gagnent !")
};
if(menMoney < womenMoney){
  console.log("Les femmes gagnent !")
};

//Sors-moi les utilisateurs ayant rapporté au moins 75€
const miniWin = users.filter(a => a.revenue > 7500);
console.log(miniWin);

//Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont des clients payants ? 
const hundred = users.filter(a => a.id <= 100);
const hundredPaying = hundred.filter(a => a.revenue > 0);
console.log(hundredPaying.length / hundred.length * 100);
