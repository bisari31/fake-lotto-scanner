"use client";

import { QrReader } from "react-qr-reader";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [isScanned, setIsScanned] = useState(false);
  return (
    <div>
      <button
        className="bg-slate-500 text-white p-2 rounded"
        type="button"
        onClick={() => setIsScanned((prev) => !prev)}
      >
        qr 스캔
      </button>
      {isScanned && (
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result.getText());
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
      )}
      <p>{data}</p>
    </div>
  );
}
