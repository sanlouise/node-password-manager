function doWork() {
	throw new Error('Oops, cannot do work!')

}

try {
	doWork();
} catch (e) {
	console.log(e.message)
} finally {
	// Will always get executed regardless of the prior result
	console.log('Finally block executed.')
}