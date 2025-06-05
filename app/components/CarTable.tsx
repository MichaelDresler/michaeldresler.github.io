export default function CarTable() {
  return (
    <div className=" border border-primary  bg-black/5  rounded-lg overflow-hidden text-base w-full">
      <table className=" w-full border-collapse  ">
        <tbody>
          <tr className="border-b border-primary bg-white/10 text-primary " >
            <th className="text-left px-4 border-r border-primary   ">
              Car Components</th>
            <th className="text-left px-4 py-2  " >Pins</th>
          </tr>
          <tr className="text-secondary border-b border-primary  ">
            <td className="p-4 border-r border-primary ">1 Wireless communication receiver</td>
            <td className="p-4">7</td>
          </tr>
          <tr className="text-secondary border-b border-primary ">
            <td className="p-4 border-r border-primary ">2 DC Motors</td>
            <td className="p-4">11</td>
          </tr>
          <tr className="text-primary">
            <td className="p-4 border-r border-primary  ">Total (must be &lt; 20) </td>
            <td className="p-4">18</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}
