export function buildSquareBlock(size: number) {
	const sideLength = Math.ceil(Math.sqrt(size))

	let block = []
	let count = 1

	for (let i = 0; i < sideLength; i++) {
		let row = []
		for (let j = 0; j < sideLength; j++) {
			if (count <= size) {
				row.push(count)
				count++
			} else {
				row.push(0) // Empty cell for remaining spaces
			}
		}
		block.push(row)
	}

	return block
}
