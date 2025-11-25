// Task
// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules
// 1. There are always exactly three reels

// 2. Each reel has 10 different items.

// 3. The three reel inputs may be different.

// 4. The spin array represents the index of where the reels finish.

// 5. The three spin inputs may be different

// 6. Three of the same is worth more than two of the same

// 7. Two of the same plus one "Wild" is double the score.

// 8. No matching items returns 0.
// Scoring
// Item
// Three of the same
// Two of the same
// Two of the same plus one Wild
// Wild
// 100
// 10
// N/A
// Star
// 90
// 9
// 18
// Bell
// 80
// 8
// 16
// Shell
// 70
// 7
// 14
// Seven
// 60
// 6
// 12
// Cherry
// 50
// 5
// 10
// Bar
// 40
// 4
// 8
// King
// 30
// 3
// 6
// Queen
// 20
// 2
// 4
// Jack
// 10
// 1
// 2

// Returns
// Return an integer of the score.
// Example
// Initialise
// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
// reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
// reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"]
// spin = [5,5,5]
// result = fruit([reel1,reel2,reel3],spin)
// Scoring
// reel1[5] == "Cherry"
// reel2[5] == "Cherry"
// reel3[5] == "Cherry"

// Cherry + Cherry + Cherry == 50
// Return
// result == 50
// Good luck and enjoy!

const scoring = {
	wild3: 100,
	wild2: 10,
	star3: 90,
	star2: 9,
	star2wild: 18,
	bell3: 80,
	bell2: 8,
	bell2wild: 16,
	shell3: 70,
	shell2: 7,
	shell2wild: 14,
	cherry3: 50,
	cherry2: 5,
	cherry2wild: 10,
	bar3: 40,
	bar2: 4,
	bar2wild: 8,
	king3: 30,
	king2: 3,
	king3wild: 6,
	queen3: 20,
	queen2: 2,
	queen2wild: 4,
	jack3: 10,
	jack2: 1,
	jack2wild: 2,
};

export function fruit(reels: string[][], spins: number[]): number {
	const reelsResult = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
	const map = new Map();
	for (let each of reelsResult) {
		const item = each.toLowerCase();
		if (map.has(item)) map.set(item, map.get(item) + 1);
		else map.set(item, 1);
	}
	if() return 0
	let containsWild = map.has("wild");
	let itemScore = "";
	for (let e of map) {
		if (e[1] === 2 && containsWild) {

		}
	}
}
