import { data } from "./Data/butterfly";

declare const brain:any;
let trainData:string[]=data.split('.');

trainData=trainData.map((sentence)=>sentence.replace('\n','').trim());
console.log('trainData',trainData);

let net = new brain.recurrent.LSTM({
    hiddenLayers: [4],
    inputSize:1,
    outputSize:1
});


net.train(trainData, {
    iterations: 5000,
    errorThresh: 0.011,
    logPeriod: 100,
    log:(stats:any)=> console.log('stats',stats)
});


(document.querySelector('#app') as HTMLDivElement).innerHTML = brain.utilities.toSVG(net);

console.log(net.run("How does the climate exchange affect the population of the butterflies?"));
