export default function Table() {
  return (
    <div className="md:col-start-2 lg:col-start-2 lg:col-span-2 bg-[#0E0E0E]  col-span-full border border-primary  rounded-lg overflow-hidden text-base w-full ">
      <table className=" w-full border-collapse">
        <tbody>
          <tr className="border-b border-primary bg-white/10 text-primary ">
            <th className="text-left px-4 border-r border-primary  ">
              Console Components
            </th>
            <th className="text-left px-4 py-2  ">Pins</th>
          </tr>
          <tr className="text-secondary text-base border-b border-primary  ">
            <td className="p-4 border-r border-primary ">
              1 Wireless communication receiver
            </td>
            <td className="p-4">7</td>
          </tr>
          <tr className="text-secondary text-base border-b border-primary ">
            <td className="p-4 border-r border-primary ">4 LEDS</td>
            <td className="p-4">4</td>
          </tr>
          <tr className="text-secondary text-base border-b border-primary">
            <td className="p-4 border-r border-primary ">1 start button</td>
            <td className="p-4">1</td>
          </tr>
          <tr className="text-secondary text-base border-b border-primary">
            <td className="p-4 border-r border-primary ">Block logic</td>
            <td className="p-4">?</td>
          </tr>
          <tr className="text-primary">
            <td className="p-4 border-r border-primary ">
              Total (must be &lt; 20){" "}
            </td>
            <td className="p-4">12 + ?</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
