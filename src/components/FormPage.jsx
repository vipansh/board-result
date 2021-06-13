import React, { useState, useRef } from "react";

export const FormPage = () => {
  const tamplet = {
    nine: "",
    firstTerm: "",
    secondTerm: "",
    preBoard: "",
    hindi: "",
  };
  const [result, setResult] = useState(tamplet);
  const [finalResult, setFinalResult] = useState();
  const [totalMarks, setTotalMarks] = useState(0);

  const myRef = useRef(null);
  const scrollToRef = (scroll) => {
    if (scroll) {
      window.scrollTo(0, scroll);
    }
  };

  function changeValue(e) {
    let value = e.target.value;
    let name = e.target.name;
    setResult({ ...result, [name]: value });
  }

  function percentageof(x, y) {
    return (x / y) * 100;
  }

  function xpercentofy(x, y) {
    return (x / 100) * y;
  }

  function giveResult() {
    let ninthMarks = Math.ceil(xpercentofy(10, percentageof(result.nine, 700)));

    if (percentageof(result.nine, 700) < 33) {
      ninthMarks = xpercentofy(10, 33);
    }

    let firstTermMarks = Math.ceil(
      xpercentofy(15, percentageof(result.firstTerm, 50))
    );
    if (percentageof(result.firstTerm, 50) < 33) {
      firstTermMarks = xpercentofy(15, 33);
    }

    let secondTermMarks = Math.ceil(
      xpercentofy(15, percentageof(result.secondTerm, 85))
    );
    if (percentageof(result.secondTerm, 85) < 33) {
      secondTermMarks = xpercentofy(15, 33);
    }

    let preBoardMarks = Math.ceil(
      xpercentofy(40, percentageof(result.preBoard, 85))
    );
    if (percentageof(result.preBoard, 85) < 33) {
      preBoardMarks = xpercentofy(40, 33);
    }
    let hindiMarks = Math.ceil(xpercentofy(5, percentageof(result.hindi, 85)));

    if (percentageof(result.hindi, 85) < 33) {
      hindiMarks = xpercentofy(5, 33);
    }

    setFinalResult({
      nine: parseFloat(ninthMarks).toFixed(2),
      firstTerm: parseFloat(firstTermMarks).toFixed(2),
      secondTerm: parseFloat(secondTermMarks).toFixed(2),
      preBoard: parseFloat(preBoardMarks).toFixed(2),
      hindi: parseFloat(hindiMarks).toFixed(2),
    });

    setTotalMarks(
      ninthMarks + firstTermMarks + secondTermMarks + preBoardMarks + hindiMarks
    );
    setTimeout(() => {
      scrollToRef(myRef.current.offsetTop);
    }, 0);
  }

  return (
    <div className="p-4">
      <div className="mt-8 flex ">
        <div className="max-w-1/2 mx-1 text-gray-600 font-bold">
          9Th result(weightage 10%){" "}
        </div>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3  mx-2 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="nine"
          value={result.nine}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div className="mt-8 flex">
        <div className="max-w-1/2 mx-1 text-gray-600 font-bold">
          10th First Term result(weightage 15%)
        </div>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 mx-2 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="firstTerm"
          value={result.firstTerm}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div className="mt-8 flex">
        <div className="max-w-1/2 mx-1 text-gray-600 font-bold">
          10Th second term result(weightage 15%)
        </div>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 mx-2 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="secondTerm"
          value={result.secondTerm}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div className="mt-8 flex">
        <div className="max-w-1/2 mx-1 text-gray-600 font-bold">
          pre Board 10Th result(weightage 40%)
        </div>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 mx-2 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="preBoard"
          value={result.preBoard}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>

      <div className="mt-8 flex">
        <div className="max-w-1/2 mx-1 text-gray-600 font-bold">
          Hindi exam 10Th result(weightage 5%)
        </div>
        <input
          className="w-full bg-gray-300 text-gray-900 mt-2 p-3 mx-2 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="hindi"
          value={result.hindi}
          onChange={(e) => {
            changeValue(e);
          }}
        />
      </div>
      <div className="flex">
        <button
          className="m-4 p-4 border rounded-md flex mx-auto text-white bg-indigo-500  py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg"
          onClick={giveResult}
          href="#result"
        >
          Calculate
        </button>
        <button
          className="m-4 p-4 border rounded-md flex mx-auto text-white bg-indigo-500  py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg"
          onClick={() => {
            setFinalResult();
            setResult(tamplet);
          }}
        >
          Reset
        </button>
      </div>

      {finalResult && (
        <div className="flex flex-col justify-start">
          <div className=" flex  justify-center sm:text-3xl text-2xl font-medium title-font text-gray-900  py-2 my-2 border-b-4 rounded-2xl border-gray-300">
            Result
            
          </div>
          <div
            ref={myRef}
            className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-gray-700"
          >
            <div className="flex items-center border rounded shadow bg-white p-2 m-2 border-t-4 border-green-500">
              {" "}
              Ninth:{" "}
              <span className="font-bold mx-2"> {finalResult.nine} </span>
            </div>
            <div className="flex items-center border rounded shadow bg-white p-2 m-2 border-t-4 border-green-500">
              {" "}
              10th First Term:{" "}
              <span className="font-bold mx-2"> {finalResult.firstTerm}</span>
            </div>
            <div className="flex items-center border rounded shadow bg-white p-2 m-2 border-t-4 border-green-500">
              {" "}
              10th Second Term:{" "}
              <span className="font-bold mx-2"> {finalResult.secondTerm}</span>
            </div>
            <div className="flex items-center border rounded shadow bg-white p-2 m-2 border-t-4 border-green-500">
              {" "}
              10th pre Board:{" "}
              <span className="font-bold mx-2"> {finalResult.preBoard}</span>
            </div>
            <div className="flex items-center border rounded shadow bg-white p-2 m-2 border-t-4 border-green-500">
              {" "}
              10th Hindi:{" "}
              <span className="font-bold mx-2"> {finalResult.hindi}</span>
            </div>
          </div>
          <div className="flex text-xl  rounded shadow bg-white p-2 my-2  border-2 border-t-4 border-green-600 font-semibold text-gray-800">
            Total:
            <span className="font-bold mx-2"> {Math.ceil(totalMarks)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
