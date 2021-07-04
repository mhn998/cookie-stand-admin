import avgCookiesPerHour from '/data'
console.log(avgCookiesPerHour)
console.log(avgCookiesPerHour[0])
console.log(avgCookiesPerHour[0].avgCookiesPerHour)
console.log(avgCookiesPerHour[0].location)

export default function ReportTable({ stands }) {
    console.log(stands[0])
    console.log(stands)
    
    return  (
    <div>
        {stands[0].length >0 ?
        
            <div className="text-center text-gray-700">
                <center>
                <table className="border-2">
                    <thead className="border-2" >
                        <tr className="border-2">
                            <th className="border-2"> Location </th>
                            <th> 6 am </th>
                            <th> 7 am </th>
                            <th> 8 am </th>
                            <th> 9 am </th>
                            <th> 10 am </th>
                            <th> 11 am </th>
                            <th> 12 pm </th>
                            <th> 1 pm </th>
                            <th> 2 pm </th>
                            <th> 3 pm </th>
                            <th> 4 pm </th>
                            <th> 5 pm </th>
                            <th> 6 pm </th>
                            <th> 7 pm </th>
                            <th>Totals</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {stands[0].map(cookie =>
                            <tr key={cookie.location}>
                                <td className="border-2"> {cookie.location} </td>
                                {cookie.hourly_sales.map((value,i) =>
                                    <td key={'value'+i}> {value} </td>
                                )}
                                <td>{cookie.hourly_sales.reduce((a, b) => a+b)}</td>
                            </tr>
                   )}
    
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="border-2">Totals</td>
                                    {stands[0][0].hourly_sales.map((_,i) => {
    
                                        const acum = stands[0].reduce((acc, cur) => acc + cur.hourly_sales[i], 0);
                                        return(<td key={i+stands[0].length}>{acum}</td>)
                                    }
    
                                    )}
                            <td>{stands[1]}</td>
                        </tr>
                    </tfoot>
                </table>
                </center>
            </div>
        : 
            (<h2> <center> No Cookie Stands Available </center> </h2>)
    }
    </div>
    )
}