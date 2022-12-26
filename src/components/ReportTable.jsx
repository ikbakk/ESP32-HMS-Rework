import { HiOutlineDownload } from 'react-icons/hi'

const ReportTable = () => {
  return (
    <div className='report-wrapper'>
      <div className='flex w-full flex-row justify-center p-2'>
        <div className='flex flex-col text-center'>
          <h2 className='text-2xl'>Ruang</h2>
          <h3 className='text-xl'>Nama</h3>
        </div>
      </div>
      <div className='m-1 flex w-full rounded-xl bg-secondary-focus'>
        <table className='text-center'>
          <tbody>
            <tr className=''>
              <th>ts</th>
              <th>hr</th>
              <th>spo</th>
              <th>temp</th>
            </tr>
            <tr>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
            </tr>
            <tr>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
            </tr>
            <tr>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
            </tr>
            <tr>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
            </tr>
            <tr>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
              <td className=' w-20'>a</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='report-export-btn'>
        <HiOutlineDownload />
        <p>Export to CSV </p>
      </div>
    </div>
  )
}

export default ReportTable
