function trainIteration(tunnel, train, iteration) {
    for (let i = 0; i < iteration; i++) {
        let tunnelArr = Array(tunnel).fill("_"); // Initialize tunnel with '_'

        // Determine the start and end positions of the train
        let start = Math.max(0, i - train + 1); // Ensure it doesn't go negative
        let end = Math.min(i + 1, tunnel); // Ensure it doesn't exceed tunnel size
        //console.log(i,start,end)
        // Fill the tunnel with train numbers
        let trainNumber = train;
        for (let j = end - 1; j >= start; j--) {
            tunnelArr[j] = trainNumber--;
        }

        console.log(tunnelArr.join(" ")); // Print the tunnel state
    }
}
