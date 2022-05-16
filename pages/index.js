import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Image from "next/image";

export default function Home() {
  const inputRef = useRef(null);

  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("assignment-cover-page.pdf");
    });
  };

  return (
    <div>
      <div className="mx-12 my-5">
        <div className=" m-5 p-5" id="divToPrint" ref={inputRef}>
          <div className="m-14">
            <div>
              <h1 className="text-center text-4xl font-bold text-indigo-900">
                BANGABANDHU SHEIKH MUJIBUR RAHMAN SCIENCE
              </h1>
              <h1 className="text-center text-4xl font-bold text-indigo-900">
                &
              </h1>
              <h1 className="text-center text-4xl font-bold text-indigo-900">
                TECHNOLOGY UNIVERSITY
              </h1>
            </div>
            <div className="text-center mt-6">
              <Image
                height={200}
                width={200}
                alt="bsmrstu_logo"
                src="/images/bsmrstu/BSMRSTU_logo.jpg"
              />
              <strong className="font-semibold block">GOPALGANJ-8100</strong>
            </div>
            <hr className="my-5 bg-indigo-800 h-0.5" />
            <div>
              <h2 className="text-center text-xl my-5 font-bold">
                Assignment on
              </h2>
              <p className="text-2xl my-1">
                <strong>Topics:</strong> Matrices Course
              </p>
              <p className="text-2xl my-1">
                <strong>Title:</strong> Functional Analysis
              </p>
              <p className="text-2xl my-1">
                <strong>Course Code:</strong> MAT259
              </p>
            </div>
            <div className="text-2xl mt-6">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="border">
                    <th className="px-5 pt-3 pb-5 border-r-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Submitted by
                    </th>
                    <th className="px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Submitted To
                    </th>
                  </tr>
                </thead>
                <tbody className="border my-6">
                  <tr>
                    <td className="px-5 py-1 border-r-2 border-gray-200 bg-white">
                      <strong>Name: </strong> Abdul Basir
                    </td>
                    <td className="px-5 py-1 border-r-2 border-gray-200 bg-white">
                      <p className="text-gray-600 whitespace-no-wrap">
                        Sabina Yesmin
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-1 border-r-2 border-gray-200 bg-white">
                      <strong>Student Id: </strong> 18PHY040
                    </td>
                    <td className="px-5 py-1  border-gray-200 bg-white">
                      (Assistant Professor)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-1 border-r-2 border-gray-200 bg-white">
                      <strong>Year: </strong> 2<sup>nd</sup>
                    </td>
                    <td className="px-5 py-1  border-gray-200 bg-white">--</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-1 border-r-2 border-gray-200 bg-white">
                      <strong>Semester: </strong> 2<sup>nd</sup>
                    </td>
                    <td className="px-5 py-1 border-gray-200 bg-white">
                      <td>Department of Mathematics</td>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-1 border-r-2 border-b-2 border-gray-200 bg-white">
                      <strong>Department: </strong> Physics
                    </td>
                    <td className="px-5 py-1  border-b-2 border-gray-200 bg-white">
                      <td>(BSMRSTU) </td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-8 text-2xl">
              <p>Date of Submission: 25/04/2022</p>
            </div>
          </div>
        </div>
        <div className="my-5 text-2xl">
          <button
            className="bg-indigo-900 text-white px-12 py-2 font-semibold text-2xl my-3"
            onClick={printDocument}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
