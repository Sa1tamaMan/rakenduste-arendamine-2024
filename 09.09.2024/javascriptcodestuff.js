const array = [1, 3, 7, 2, 9, 4];

const filteredarray = array.filter(element => element > 2);

console.log(filteredarray);

let guy = {
    name: "Bob",
    school: "TLU"
}

const myPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
}

const runPromise = async () => {
    console.log(await myPromise());
}

runPromise();