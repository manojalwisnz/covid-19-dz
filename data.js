const date = ['2/25/20', '2/26/20', '2/27/20', '2/28/20', '2/29/20', '3/1/20', '3/2/20', '3/3/20', '3/4/20', '3/5/20', '3/6/20', '3/7/20', '3/8/20', '3/9/20', '3/10/20', '3/11/20', '3/12/20', '3/13/20', '3/14/20', '3/15/20', '3/16/20', '3/17/20', '3/18/20', '3/19/20', '3/20/20', '3/21/20', '3/22/20', '3/23/20', '3/24/20', '3/25/20', '3/26/20', '3/27/20', '3/28/20', '3/29/20', '3/30/20', '3/31/20', '4/1/20', '4/2/20', '4/3/20', '4/4/20', '4/5/20', '4/6/20', '4/7/20', '4/8/20', '4/9/20', '4/10/20', '4/11/20', '4/12/20', '4/13/20', '4/14/20', '4/15/20', '4/16/20', '4/17/20', '4/18/20']
const confirmed = [1,1,1,1,1,1,3,5,12,12,17,17,19,20,20,20,24,26,37,48,54,60,74,90,102,139,201,230,264,302,367,409,454,511,584,716,847,986,1171,1251,1320,1423,1468,1572,1666,1761,1825,1914,1983,2070,2160,2268,2418,2534]
const recovered = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,10,12,12,12,12,12,12,22,23,23,24,24,29,29,31,31,37,46,61,61,62,90,90,90,113,237,347,405,460,591,601,691,708,783,846,846]
const deaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,4,4,6,9,11,15,17,17,19,21,25,26,29,31,35,44,58,83,105,130,152,173,193,205,235,256,275,293,313,326,336,348,364,367]
const gender = ['Male', 'Female']
const genderData = [1391, 1027]
const age = ['< 1', '1 - 14', '15 - 24', '25 - 49', '50 - 59', '+60', 'N/A']
const ageConfirmedData = [3, 41, 72, 870, 426, 903, 103]
const ageDeathsData = [0, 1, 1, 31, 65, 266, 0]
const lastUpdated = '2020-04-18 17:17'
const provinces = {
  "Aïn Defla": { confirmed: 75, recovered: 0, deaths: 5, new_confirmed: 2, new_recovered: 0, new_deaths: 0, reported: "2020-03-27" },
  "Aïn Témouchent": { confirmed: 18, recovered: 0, deaths: 2, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" },
  "Adrar": { confirmed: 14, recovered: 0, deaths: 1, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-03-15" },
  "Alger": { confirmed: 439, recovered: 11, deaths: 96, new_confirmed: 12, new_recovered: 0, new_deaths: 0, reported: "2020-03-13" },
  "Annaba": { confirmed: 19, recovered: 3, deaths: 3, new_confirmed: 2, new_recovered: 0, new_deaths: 0, reported: "2020-03-16" },
  "Béchar": { confirmed: 10, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-03" },
  "Béjaïa": { confirmed: 96, recovered: 1, deaths: 13, new_confirmed: 2, new_recovered: 0, new_deaths: 0, reported: "2020-03-17" },
  "Batna": { confirmed: 26, recovered: 0, deaths: 4, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-26" },
  "Biskra": { confirmed: 14, recovered: 2, deaths: 4, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-25" },
  "Blida": { confirmed: 663, recovered: 32, deaths: 94, new_confirmed: 35, new_recovered: 0, new_deaths: 3, reported: "2020-03-01" },
  "Bordj Bou Arréridj": { confirmed: 50, recovered: 0, deaths: 12, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-16" },
  "Bouira": { confirmed: 17, recovered: 0, deaths: 2, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-16" },
  "Boumerdès": { confirmed: 34, recovered: 1, deaths: 6, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-03-18" },
  "Chlef": { confirmed: 45, recovered: 0, deaths: 1, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" },
  "Constantine": { confirmed: 58, recovered: 0, deaths: 9, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-03-22" },
  "Djelfa": { confirmed: 40, recovered: 0, deaths: 2, new_confirmed: 5, new_recovered: 0, new_deaths: 0, reported: "2020-03-27" },
  "El Bayadh": { confirmed: 1, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-06" },
  "El Oued": { confirmed: 30, recovered: 0, deaths: 7, new_confirmed: 7, new_recovered: 0, new_deaths: 0, reported: "2020-03-18" },
  "El Tarf": { confirmed: 6, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-27" },
  "Ghardaïa": { confirmed: 28, recovered: 0, deaths: 4, new_confirmed: 3, new_recovered: 0, new_deaths: 0, reported: "2020-03-27" },
  "Guelma": { confirmed: 9, recovered: 0, deaths: 0, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-03-14" },
  "Illizi": { confirmed: 2, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-31" },
  "Jijel": { confirmed: 27, recovered: 0, deaths: 4, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" },
  "Khenchela": { confirmed: 21, recovered: 0, deaths: 2, new_confirmed: 2, new_recovered: 0, new_deaths: 0, reported: "2020-03-20" },
  "Laghouat": { confirmed: 13, recovered: 0, deaths: 0, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-03-26" },
  "M'Sila": { confirmed: 13, recovered: 0, deaths: 6, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-31" },
  "Médéa": { confirmed: 37, recovered: 1, deaths: 8, new_confirmed: 2, new_recovered: 0, new_deaths: 0, reported: "2020-03-18" },
  "Mascara": { confirmed: 22, recovered: 2, deaths: 4, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-05" },
  "Mila": { confirmed: 7, recovered: 0, deaths: 1, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-04-04" },
  "Mostaganem": { confirmed: 46, recovered: 0, deaths: 3, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" },
  "Naâma": { confirmed: 1, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-06" },
  "Oran": { confirmed: 153, recovered: 0, deaths: 12, new_confirmed: 8, new_recovered: 0, new_deaths: 0, reported: "2020-03-19" },
  "Ouargla": { confirmed: 26, recovered: 1, deaths: 3, new_confirmed: 4, new_recovered: 0, new_deaths: 0, reported: "2020-02-25" },
  "Oum el Bouaghi": { confirmed: 28, recovered: 0, deaths: 4, new_confirmed: 6, new_recovered: 0, new_deaths: 0, reported: "2020-03-26" },
  "Relizane": { confirmed: 12, recovered: 0, deaths: 2, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-21" },
  "Sétif": { confirmed: 107, recovered: 2, deaths: 9, new_confirmed: 6, new_recovered: 0, new_deaths: 0, reported: "2020-03-19" },
  "Saïda": { confirmed: 1, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-10" },
  "Sidi Bel Abbès": { confirmed: 25, recovered: 0, deaths: 5, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" },
  "Skikda": { confirmed: 27, recovered: 3, deaths: 2, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-12" },
  "Souk Ahras": { confirmed: 7, recovered: 0, deaths: 1, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-12" },
  "Tébessa": { confirmed: 10, recovered: 0, deaths: 2, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-03" },
  "Tamanghasset": { confirmed: 1, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-13" },
  "Tiaret": { confirmed: 14, recovered: 0, deaths: 1, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-04-02" },
  "Tindouf": { confirmed: 0, recovered: 0, deaths: 0, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "" },
  "Tipaza": { confirmed: 83, recovered: 0, deaths: 15, new_confirmed: 7, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" },
  "Tissemsilt": { confirmed: 29, recovered: 1, deaths: 2, new_confirmed: 0, new_recovered: 0, new_deaths: 0, reported: "2020-03-19" },
  "Tizi Ouzou": { confirmed: 86, recovered: 2, deaths: 10, new_confirmed: 1, new_recovered: 0, new_deaths: 0, reported: "2020-03-12" },
  "Tlemcen": { confirmed: 44, recovered: 0, deaths: 6, new_confirmed: 6, new_recovered: 0, new_deaths: 0, reported: "2020-03-23" }
}
