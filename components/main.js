export default function CreateForm(props) {

    function getRandomCust(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
      const getAvgCookiesPerHour = (min, max, avg) => {
        let avgCookiesPerHour= []
        for (let i = 0; i < 14; i++) {
          let totalCookiePerHour = Math.floor(getRandomCust(min, max) * avg);
          avgCookiesPerHour.push(totalCookiePerHour)
        }
        // console.log(props)
        props.setTotalPerHour((props.totalPerHour + avgCookiesPerHour.reduce((a, b) => a + b)))
        return avgCookiesPerHour
      }
    
    
      const onCreate = e => {
        e.preventDefault();
        const result =
        {
          'location': e.target.location.value,
          'avgCookiesPerHour': getAvgCookiesPerHour(e.target.minCustomers.value, e.target.maxCustomers.value, e.target.avgCookies.value),
        }
        props.setCookies([...props.cookieStands, result]);
        e.target.reset();
      }

    return (
        <main>
        <form className="grid items-center justify-center grid-cols-4 gap-5 p-5 mx-20 my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md gap-x-8" onSubmit={onCreate}>
            <div className="flex flex-col col-span-8 mb-4 ">
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="location">Location</label>
                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="text" name="location" id="location" placeholder="Cookie Stand Location" required  />
            </div>

            <div className="flex flex-col col-span-2">
                <label className="mb-2 font-bold text-grey-darkest width" htmlFor="minCustomers">min Customers per Hour</label>
                <input className="px-3 mx-5 border text-grey-darkest" type="number" name="minCustomers" id="minCustomers" required />
            </div>


            <div className="flex flex-col col-span-2">
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="maxCustomers">max Customers per Hour</label>
                <input className="px-3 mx-5 border text-grey-darkest" type="number" name="maxCustomers" id="maxCustomers" required />
            </div>
        
            <div className="flex flex-col col-span-2">
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="avgCookies">Average Cookies per Sale</label>
                <input className="px-3 mx-5 border text-grey-darkest" type="number" name="avgCookies" id="avgCookies"/>
            </div>
            
            <button className="px-5 py-5 bg-green-500 rounded text-green hover:bg-green-600" type="submit" >Create</button>
        </form>
    </main>
    );
}
