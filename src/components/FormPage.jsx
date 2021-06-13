import React, { useState } from "react";

export const FormPage = () => {
  const tamplet = {
    nine:"",
    firstTerm: "",
    secondTerm: "",
    preBoard: "",
    hindi: "",
  };
  const [result, setResult] = useState(tamplet);
  const [finalResult, setFinalResult] = useState();
  const [totalMarks, setTotalMarks] = useState(0)

  function changeValue(e) {
    let value = e.target.value;
    let name = e.target.name;
    setResult({ ...result, [name]: value });
  }

  function percentageof(x, y) {
    return (x / y) * 100;
  }

  function xpercentofy(x, y) {
    return ( x / 100 ) * y;
  }

  function giveResult() {
    console.log(xpercentofy(10,percentageof(result.nine, 700)));
    let ninthMarks = Math.ceil(xpercentofy(10, percentageof(result.nine, 700)));

    if(percentageof(result.nine, 700)<33){
        ninthMarks = xpercentofy(10,33)
    }

    let firstTermMarks = Math.ceil(
      xpercentofy(15, percentageof(result.firstTerm, 50))
    );
    if(percentageof(result.firstTermMarks, 50)<33){
        firstTermMarks=(xpercentofy(15,33))
    }
    let secondTermMarks = Math.ceil(
      xpercentofy(15, percentageof(result.secondTerm, 85))
    );

    if(percentageof(result.secondTerm, 85)<33){
        secondTermMarks=(xpercentofy(15,33))
    }

    let preBoardMarks = Math.ceil(
      xpercentofy(40, percentageof(result.preBoard, 85))
    );

    if(percentageof(result.preBoard, 85)<33){
        preBoardMarks=(xpercentofy(40,33))
    }
    let hindiMarks = Math.ceil(xpercentofy(5, percentageof(result.hindi, 85)));
    if(percentageof(result.hindi, 85)<33){
        hindiMarks=(xpercentofy(5,33))
    }

    setFinalResult({
      nine: ninthMarks,
      firstTerm: firstTermMarks,
      secondTerm: secondTermMarks,
      preBoard: preBoardMarks,
      hindi: hindiMarks,
    });

    setTotalMarks(ninthMarks+firstTermMarks+ secondTermMarks+preBoardMarks+hindiMarks)

  }

  return (
    <div className="p-4">
      <div class="mt-8 flex ">
        <div class="uppercase w-1/2 text-sm text-gray-600 font-bold">9Th result(weightage 10%) </div>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="nine"
          value={result.name}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div class="mt-8 flex">
        <div class="uppercase w-1/2 text-sm text-gray-600 font-bold">
          10th First Term 9Th result(weightage 15%)
        </div>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="firstTerm"
          value={result.firstTerm}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div class="mt-8 flex">
        <div class="uppercase w-1/2 text-sm text-gray-600 font-bold">
          10Th second term 9Th result(weightage 15%)
        </div>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="secondTerm"
          value={result.secondTerm}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div class="mt-8 flex">
        <div class="uppercase w-1/2 text-sm text-gray-600 font-bold">pre Board 9Th result(weightage 40%)</div>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="preBoard"
          value={result.preBoard}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div class="mt-8 flex">
        <div class="uppercase w-1/2 text-sm text-gray-600 font-bold">Hindi exam 9Th result(weightage 5%)</div>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="hindi"
          value={result.hindi}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <button className="m-4 p-4 border rounded-md" onClick={giveResult}>Calculate</button>
      <button className="m-4 p-4 border rounded-md" onClick={()=>{
          setFinalResult(tamplet)
          setResult(tamplet)
      }}>Reset</button>


      <div>Result</div>
      {finalResult&&<div>
        <div> ninth: {finalResult.nine}</div>
    <div>  first Term: {finalResult.firstTerm}</div>
    <div>  second Term: {finalResult.secondTerm}</div>
    <div>  pre Board: {finalResult.preBoard}</div>
    <div>  hindi: {finalResult.hindi}</div>
    <div>Total: {Math.ceil(totalMarks)}</div>
          </div>}
     


    </div>
  );
};
