async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

async function awaitCall() {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("API Data Retrieved"), 2000); // Simulates 2-second API call
        });
    }

    const data = await fetchData();
    console.log(data);


    async function awaitCallWithErrorHandling() {
        function fetchDataWithError() {
            return new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error("API Failure")), 2000); // Simulates 2-second API call failure
            });
        }
    
        try {
            const data = await fetchDataWithError();
            console.log(data);
        } catch (error) {
            console.error("Something went wrong: " + error.message);
        }
    }

    async function chainedAsyncFunctions() 
        async function firstTask() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("First task completed");
        }
    
        async function secondTask() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Second task completed");
        }
    
        async function thirdTask() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Third task completed");
        }
    
        await firstTask();
        await secondTask();
        await thirdTask();

