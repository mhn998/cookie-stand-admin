import { useState } from 'react'

export default function CookieStandForm(props) {

    const initialValues = {
        location: '',
        maxCustomers: 0,
        minCustomers: 0,
        avgCookies: 0,
    };

    const jsonValues = JSON.stringify(initialValues)

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        setValues(initialValues)
    }


    function inputChangeHandler(event) {
        let { name, value} = event.target;

        setValues({values, [name]: value });
    }
    return (
        <main>
        <form className="grid items-center justify-center grid-cols-3 gap-5 p-10 mx-20 my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md gap-x-8" onSubmit={submitHandler}>
            <div className="flex flex-col col-span-2 mb-4 ">
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="location">Location</label>
                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" />
            </div>

            <CookiesForm>
                <label className="mb-2 font-bold text-grey-darkest width" htmlFor="minCustomers">min Customers per Hour</label>
                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="number" name="minCustomers" id="minCustomers" value={values.minCustomers} onChange={inputChangeHandler} />
            </CookiesForm>
            <CookiesForm>
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="maxCustomers">max Customers per Hour</label>
                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="number" name="maxCustomers" id="maxCustomers" value={values.maxCustomers} onChange={inputChangeHandler} />
            </CookiesForm>
            <CookiesForm>
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="avgCookies">Average Cookies per Sale</label>
                <input className="px-3 py-2 mx-8 border text-grey-darkest" type="number" name="avgCookies" id="avgCookies" value={values.avgCookies} onChange={inputChangeHandler} />
            </CookiesForm>

            <button className="p-4 bg-green-500 rounded text-green hover:bg-green-600" type="submit" onSubmit={submitHandler}>Create</button>
        </form>
        <div className="flex flex-col text-center mb-8">
            <placeholder className="mb-8">Report Table Coming Soon...</placeholder>
            <placeholder>{jsonValues}</placeholder>
        </div>
    </main>
    );
}

function CookiesForm({ children }) {
    return (
        <div className="flex flex-col justify-between">
            {children}
        </div>
    );
}