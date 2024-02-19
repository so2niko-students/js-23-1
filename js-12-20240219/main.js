const text = `The North Pole, also known as the Geographic North Pole, is the point where the Earth’s axis of rotation intersects its surface in the Northern Hemisphere. Let’s delve into its intriguing features:


North Pole

True North Pole: To distinguish it from the Magnetic North Pole, we refer to it as the True North Pole. Unlike the South Pole, which lies on a continental landmass, the North Pole is situated in the middle of the Arctic Ocean. Its waters are almost perpetually covered by shifting sea ice.
Coordinates: The North Pole’s precise location is at 90°N latitude. Here, all directions point south, and all lines of longitude converge. Interestingly, its longitude can be defined as any degree value, as no specific time zone is assigned to this remote spot.
Nearest Land: While the nearest land is usually considered to be Kaffeklubben Island, off the northern coast of Greenland (approximately 700 km or 430 mi away), some semi-permanent gravel banks lie even closer. The closest permanently inhabited place is Alert on Ellesmere Island, Canada, which lies about 817 km (508 mi) from the Pole.

Extreme weather

Extreme Conditions: The North Pole experiences extreme weather conditions. It remains frigid, with temperatures plummeting far below freezing. The sun circles the horizon during the Arctic summer, while the polar night shrouds it in darkness during winter.
Ice Thickness: The sea ice at the North Pole varies in thickness. Drillings conducted on April 16, 1990, revealed an average ice thickness of 2.5 meters. The depth of the Arctic Ocean beneath the Pole has been measured at 4,261 meters (13,980 feet) by the Russian Mir submersible in 2007 and 4,087 meters (13,409 feet) by the USS Nautilus in 1958.

Exploration

Exploration: Numerous expeditions have sought to reach the North Pole. The first undisputed success was achieved by the airship Norge in 1926, led by the renowned explorer Roald Amundsen. Prior attempts by Frederick Cook, Robert Peary, and Richard E. Byrd were also once accepted as reaching the Pole.

Barneo

Barneo Base: Since 2002, a group of Russians has established a private base called Barneo near the Pole. This temporary station operates for a few weeks during early spring.
Melting Ice: Studies predict that the North Pole may become seasonally ice-free due to Arctic ice shrinkage. The exact timeline varies, but the impact of climate change remains a concern.`;

//Регулярні вирази
const reNums = /\d+/g;
const reNums2 = /[1234567890]+/g;
const reUpperC = /[A-Z][a-z]+/g;

//Перевірка
//test - метод регулярного виразу. Повертає true/false
console.log(reNums.test('2024 рік'));
console.log(reNums.test('рік'));

//Пошук
//match - метод рядка, який повертає масив всього, що знайшов
const numbers = text.match(reNums2);
// console.log(numbers);
const upperWords = text.match(reUpperC);
// console.log(upperWords);

//Заміна
//replace - метод рядку, який допомагає змінювати текст
console.log('2024 рік'.replace(reNums, 'Хахаха'));
