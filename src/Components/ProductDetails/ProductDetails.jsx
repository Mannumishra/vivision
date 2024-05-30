import React, { useEffect, useState } from 'react'
import "./ProductDetails.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { _id } = useParams();
  const [data, setData] = useState({})
  // const getApiData = async () => {
  //   try {
  //     let res = await axios.get("https://sadibackend.onrender.com/api/user/" + _id)
  //     console.log(res);
  //     setData(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    // getApiData();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, []);

  return (
    <div className="full-details-container">
      {/* <h2 className='text-center'>SEE PRODUCT DETAILS</h2> */}
      <div className="table-containerfirst">
        <div className='imagediv'>
          <a href={data.image} target="_blank" rel="noopener noreferrer">
            <img src={data.image} alt={data.name} className="profile-image" />
          </a>
        </div>
        <table className='table table-bordered table-striped table-hover tablweidth'>
          <tbody>
            <tr>
              <th colSpan={3} style={{ color: "orange" }}>MACHINE INFORMATION</th>
            </tr>
            <tr>
              <th>Machine Type</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Inverter control </th>
              <td>{data.fathername}</td>
            </tr>
            <tr>
              <th>Max. Inlet Dia. (mm) </th>
              <td>{data.mothername}</td>
            </tr>
            <tr>
              <th>Outlet Dia. (mm)</th>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <th>Max. Dia. No.</th>
              <td>{data.age}</td>
            </tr>
            <tr>
              <th>Max. line speed (m/min)</th>
              <td>{data.dateofbirth}</td>
            </tr>
            <tr>
              <th>Body structure </th>
              <td>{data.birthplace}</td>
            </tr>
            <tr>
              <th>Drawing capstan</th>
              <td>{data.height}</td>
            </tr>
            <tr>
              <th>Slip ratio of m/c (%)</th>
              <td>{data.siblings}</td>
            </tr>

          </tbody>
        </table>

      </div>

      <div className="table-container">
        <table className='table table-bordered table-striped table-hover  '>
          <tbody>
            <tr>
              <th>Take-up motor (kw)</th>
              <td colSpan={2}>{data.email}</td>
              <th>Fix speed capstan Dia. (mm)</th>
              <td colSpan={2}>{data.phone}</td>
            </tr>
            <tr>
              <th>Transmission type</th>
              <td>{data.religion}</td>
              <th>Lubrication type </th>
              <td>{data.cast}</td>
              <th>Max. annealing voltage (V)</th>
              <td>{data.subcast}</td>
            </tr>
            <tr>
              <th>Max. annealing current (A) </th>
              <td>{data.gotra}</td>
              <th>Take-up bobbin size (mm)</th>
              <td>{data.mgotra}</td>
              <th>Traversing type </th>
              <td>{data.ggotra}</td>
            </tr>
            <tr>
              <th>Tension control</th>
              <td>{data.education}</td>
              <th>Brake</th>
              <td>{data.companyname}</td>
              <th>Weight (KG) </th>
              <td>{data.salary}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ProductDetails